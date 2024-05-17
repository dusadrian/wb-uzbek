import { ipcRenderer } from "electron";
import * as DI from "../../interfaces/database";
import * as path from "path";
import { I18n } from "i18n";
const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../../locales'),
    defaultLocale: 'en',
});

// set language
const lang = localStorage.getItem('language');
if (lang) {
    i18n.setLocale(lang);
}

const updateObj = {} as DI.UpdateInsonObjInterface;
let services: DI.Institution[] = [];

const appSession = JSON.parse(sessionStorage.getItem('appSession'));

export const institutionDetails = {
    init: async () => {

        ipcRenderer.on('institutionDetails', (_event, args) => {

            console.log(args);
        
            const institution = args.institution;
            services = args.services;

            updateObj.institution_id = institution.id
            updateObj.institutionUUID = institution.uuid;
            updateObj.children_fth = institution.children_fth;
            updateObj.leavers_fth = institution.leavers_fth;
            if (appSession.language === 'uz') {
                (document.getElementById('institution_name') as HTMLDivElement).innerText = institution.code + ' | ' + institution.name_uz;
            } else if (appSession.language === 'ru') {
                (document.getElementById('institution_name') as HTMLDivElement).innerText = institution.code + ' | ' + institution.name_ru;
            } else { // fallback to english
                (document.getElementById('institution_name') as HTMLDivElement).innerText = institution.code + ' | ' + institution.name_en;
            }
            (document.getElementById('pf') as HTMLInputElement).value = institution.pf;

            const serviceList = document.getElementById('serviceList') as HTMLDivElement;
            const serviceTemplate = document.getElementById('serviceTemplate') as HTMLTemplateElement;

            if (services.length !== 0) {
                for (const service of services) {
                    
                    const clone = serviceTemplate.content.cloneNode(true) as HTMLElement;
                    // Set the service name
                    if (appSession.language === 'uz') {
                        clone.querySelector('.serviceName').textContent = service.name_uz;
                    } else if (appSession.language === 'ru') {
                        clone.querySelector('.serviceName').textContent = service.name_ru;
                    } else { // fallback to english
                        clone.querySelector('.serviceName').textContent = service.name_en;
                    }
                    // first element
                    const firstElement = clone.querySelector('.firstElement');
                    // label
                    const firstLabel = (firstElement.children[0] as HTMLLabelElement);
                    firstLabel.textContent = i18n.__('t_children');
                    firstLabel.classList.add('t_children');
                    firstLabel.htmlFor = `children_${service.id}`;
                    const firstInput = (firstElement.children[1] as HTMLInputElement);
                    firstInput.id = `children_${service.id}`;
                    firstInput.value = String(service.children);

                    // second element
                    const secondElement = clone.querySelector('.secondElement');
                    // label
                    const secondLabel = (secondElement.children[0] as HTMLLabelElement);
                    secondLabel.textContent = i18n.__('t_leavers');
                    secondLabel.htmlFor = `leavers_${service.id}`;
                    const secondInput = (secondElement.children[1] as HTMLInputElement);
                    secondInput.id = `leavers_${service.id}`;
                    secondInput.value = String(service.leavers);

                    serviceList.appendChild(clone);
                }
            } else {
                const p = document.createElement('p');
                // Set the service name
                p.classList.add('mt-5', 'mb-2', 'text-center', 'font-bold');
                p.innerText = i18n.__("No services available");
                serviceList.appendChild(p);
            }

        });

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {

            const pf = (document.getElementById('pf') as HTMLInputElement).value;
            updateObj.pf = pf;

            updateObj.services = [];
            let totalChildren = 0;
            let totalLeavers = 0;
            for (const service of services) {
                const children = (document.getElementById(`children_${service.id}`) as HTMLInputElement).value;
                const leavers = (document.getElementById(`leavers_${service.id}`) as HTMLInputElement).value;

                totalChildren += Number(children);
                totalLeavers += Number(leavers);

                updateObj.services.push({
                    id: service.id,
                    uuid: service.uuid,
                    children,
                    leavers
                });
            }

            updateObj.children_fth = String(totalChildren);
            updateObj.leavers_fth = String(totalLeavers);

            if (pf === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view pf
                document.getElementById('pf').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('pf').focus();
                return;
            }

            updateObj.type = 'inson'; // update service
            ipcRenderer.send('updateServiceByRegional', updateObj);
        });
    }
}
