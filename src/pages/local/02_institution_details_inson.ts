import { app, ipcRenderer } from "electron";
import { first } from "lodash";

interface UpdateObjInterface {
    institution_id: string;
    institutionUUID: string;
    auth_code: string;
    services: {
        id: string;
        service_type_code: string;
        service_type_name: string;
        service_type_description: string;
        service_type_value: string;
    }[]
    pf: string;
}

const updateObj = {} as UpdateObjInterface;

export const institutionDetails = {
    init: async () => {

        ipcRenderer.on('institutionDetails', (_event, args) => {

            const institution = args.institution;
            const services = args.services;

            updateObj.institution_id = institution.id
            updateObj.institutionUUID = institution.uuid;
            (document.getElementById('institution_name') as HTMLDivElement).innerText = institution.name;
            (document.getElementById('pf') as HTMLDivElement).innerText = institution.pf;

            console.log(args);


            const serviceList = document.getElementById('serviceList') as HTMLDivElement;
            const serviceTemplate = document.getElementById('serviceTemplate') as HTMLTemplateElement;

            for (const service of services) {
                console.log(service);
                
                const clone = serviceTemplate.content.cloneNode(true) as HTMLElement;
                // Set the service name
                clone.querySelector('.serviceName').textContent = service.name;
                // first element
                const firstElement = clone.querySelector('.firstElement');
                // label
                const firstLabel = (firstElement.children[0] as HTMLLabelElement);
                firstLabel.textContent = 'Children';
                firstLabel.htmlFor = `children_${service.id}`;
                const firstInput = (firstElement.children[1] as HTMLInputElement);
                firstInput.id = `children_${service.id}`;
                firstInput.value = service.children;
                
                // second element
                const secondElement = clone.querySelector('.secondElement');
                // label
                const secondLabel = (secondElement.children[0] as HTMLLabelElement);
                secondLabel.textContent = 'Leavers';
                secondLabel.htmlFor = `leavers_${service.id}`;
                const secondInput = (secondElement.children[1] as HTMLInputElement);
                secondInput.id = `leavers_${service.id}`;
                secondInput.value = service.leavers;
                

                serviceList.appendChild(clone);
            }

        });

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {


            const auth_code = (document.getElementById('auth_code') as HTMLInputElement).value;
            updateObj.auth_code = auth_code;
            const pf = (document.getElementById('pf') as HTMLInputElement).value;
            updateObj.pf = pf;



            const children_fth = (document.getElementById('children_fth') as HTMLInputElement).value;
            const fth = (document.getElementById('fth') as HTMLInputElement).value;
            const leavers_fth = (document.getElementById('leavers_fth') as HTMLInputElement).value;


            // validate all data
            if (children_fth === '' || fth === '' || leavers_fth === '' || pf === '' || auth_code === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                return;
            }

            ipcRenderer.send('updateInstitutionDetails', updateObj);


        });
    }
}
