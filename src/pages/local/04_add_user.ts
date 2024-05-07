import { ipcRenderer } from "electron";

export const addUser = {
    init: async () => {

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {
            // validate all input and send to main process

            const username = (<HTMLInputElement>document.getElementById('username')).value;
            const password = (<HTMLInputElement>document.getElementById('password')).value;
            const name = (<HTMLSelectElement>document.getElementById('first_name')).value;
            const patronymics = (<HTMLSelectElement>document.getElementById('patronymics')).value;
            const surname = (<HTMLSelectElement>document.getElementById('last_name')).value;

            const job_title = (<HTMLSelectElement>document.getElementById('position')).value;
            const profession = (<HTMLSelectElement>document.getElementById('profession')).value;
            const phone = (<HTMLSelectElement>document.getElementById('phone')).value;
            const email = (<HTMLSelectElement>document.getElementById('email')).value;

            const role_code = (<HTMLSelectElement>document.getElementById('role_code')).value;

            // validate above values
            if (username === '' || password === '' || name === '' || patronymics === '' || surname === '' || job_title === '' || profession === '' || phone === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                return;
            }
            
            let service_type_code = '';
            let institution_code = '';
            let institution_name = '';
            let region_code = '';
            const appSession = JSON.parse(sessionStorage.getItem('appSession'));
            if (appSession) {
                service_type_code = appSession.userData.service_type_code;
                institution_code = appSession.userData.institution_code;
                institution_name = appSession.userData.institution_name;
                region_code = appSession.userData.region_code;
            } else {
                ipcRenderer.on('appSession', (event, arg) => {
                    service_type_code = arg.userData.service_type_code;
                    institution_code = arg.userData.institution_code;
                    institution_name = arg.userData.institution_name;
                    region_code = arg.userData.region_code;
                });
            }


            ipcRenderer.send('addUser', {
                username,
                password,
                name,
                patronymics,
                surname,
                job_title,
                profession,
                phone,
                email,
                role_code,
                service_type_code,
                institution_code,
                institution_name,
                region_code
            });
        });
    }
}


