import { app, ipcRenderer } from "electron";

export const institutionDetails = {
    init: async () => {

        let institution_id: string = null;
        let institutionUUID: string = null;
        let userServiceTypeCode: string;

        ipcRenderer.on('institutionDetails', (_event, args) => {
            institution_id = args.id
            institutionUUID = args.uuid;
            (document.getElementById('institution_name') as HTMLDivElement).innerText = args.name;

            // console.log(args);


            const appSession = JSON.parse(sessionStorage.getItem('appSession'));
            if (appSession) {
                userServiceTypeCode = appSession.userData.service_type_code as string;
            } else {
                ipcRenderer.on('appSession', (_event, args) => {
                    userServiceTypeCode = args.userData.service_type_code as string;
                });
            }

            if (userServiceTypeCode == '9') {
                document.getElementById('inson').classList.remove('hidden');
                (document.getElementById('children_fth') as HTMLInputElement).value = args.children_fth;
                (document.getElementById('fth') as HTMLInputElement).value = args.fth;
                (document.getElementById('leavers_fth') as HTMLInputElement).value = args.leavers_fth;
                (document.getElementById('pf') as HTMLInputElement).value = args.pf;

            } else {
                document.getElementById('institution').classList.remove('hidden');
            }
            (document.getElementById('capacity') as HTMLInputElement).value = args.capacity;
            (document.getElementById('children') as HTMLInputElement).value = args.children;
            (document.getElementById('employees') as HTMLInputElement).value = args.employees;
            (document.getElementById('leavers') as HTMLInputElement).value = args.leavers;

        });

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {


            const auth_code = (document.getElementById('auth_code') as HTMLInputElement).value;

            if (userServiceTypeCode == '9') {
                const children_fth = (document.getElementById('children_fth') as HTMLInputElement).value;
                const fth = (document.getElementById('fth') as HTMLInputElement).value;
                const leavers_fth = (document.getElementById('leavers_fth') as HTMLInputElement).value;
                const pf = (document.getElementById('pf') as HTMLInputElement).value;


                // validate all data
                if (children_fth === '' || fth === '' || leavers_fth === '' || pf === '' || auth_code === '') {
                    ipcRenderer.send('showDialogMessage', {
                        type: 'warning',
                        message: 'Please fill all fields'
                    });
                    return;
                }

                ipcRenderer.send('updateInstitutionDetails', {
                    'id': institution_id,
                    'uuid': institutionUUID,
                    'auth_code': auth_code,
                    'children_fth': children_fth,
                    'fth': fth,
                    'leavers_fth': leavers_fth,
                    'pf': pf,
                });

            } else {
                const capacity = (document.getElementById('capacity') as HTMLInputElement).value;
                const children = (document.getElementById('children') as HTMLInputElement).value;
                const employees = (document.getElementById('employees') as HTMLInputElement).value;
                const leavers = (document.getElementById('leavers') as HTMLInputElement).value;


                // validate all data
                if (capacity === '' || children === '' || employees === '' || leavers === '' || auth_code === '') {
                    ipcRenderer.send('showDialogMessage', {
                        type: 'warning',
                        message: 'Please fill all fields'
                    });
                    return;
                }

                ipcRenderer.send('updateInstitutionDetails', {
                    'id': institution_id,
                    'uuid': institutionUUID,
                    'auth_code': auth_code,
                    capacity,
                    children,
                    employees,
                    leavers,
                });
            }
        });
    }
}
