import { UpdateServiceObjInterface } from './../../interfaces/database/index';
import { ipcRenderer } from "electron";

const updateObj = {} as UpdateServiceObjInterface;
const appSession = JSON.parse(sessionStorage.getItem('appSession'));

export const institutionDetails = {
    init: async () => {

        ipcRenderer.on('institutionDetails', (_event, args) => {

            updateObj.institution_id = args.id
            updateObj.institutionUUID = args.uuid;
            updateObj.children = args.children;
            updateObj.leavers = args.leavers;
            updateObj.employees = args.employees;

            if (appSession.language === 'uz') {
                (document.getElementById('institution_name') as HTMLDivElement).innerText = args.name_uz;
            } else if (appSession.language === 'ru') {
                (document.getElementById('institution_name') as HTMLDivElement).innerText = args.name_ru;
            } else { // fallback to english
                (document.getElementById('institution_name') as HTMLDivElement).innerText = args.name_en;
            }

            (document.getElementById('children') as HTMLInputElement).value = args.children;
            (document.getElementById('employees') as HTMLInputElement).value = args.employees;
            (document.getElementById('leavers') as HTMLInputElement).value = args.leavers;
        });

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {


            const auth_code = (document.getElementById('auth_code') as HTMLInputElement).value;
            updateObj.auth_code = auth_code;
            const children = (document.getElementById('children') as HTMLInputElement).value;
            updateObj.children = children;
            const employees = (document.getElementById('employees') as HTMLInputElement).value;
            updateObj.employees = employees;
            const leavers = (document.getElementById('leavers') as HTMLInputElement).value;
            updateObj.leavers = leavers;


            // validate all data
            if (children === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('children').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('children').focus();
                return;
            }
            if (employees === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('employees').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('employees').focus();
                return;
            }
            if (leavers === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('leavers').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('leavers').focus();
                return;
            }
            if (auth_code === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('auth_code').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('auth_code').focus();
                return;
            }

            ipcRenderer.send('updateService', updateObj);

        });
    }
}
