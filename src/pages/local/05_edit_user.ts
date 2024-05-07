import { app, ipcRenderer } from "electron";

const addCoordinator = (userData: any) => {
    if (userData.role_code === '1') {
        const roleCode = (<HTMLSelectElement>document.getElementById('role_code'));
        const option = document.createElement('option');
        option.value = '1';
        option.text = 'Coordinator';
        roleCode.add(option);
        roleCode.disabled = true;
    }
}


export const editUser = {
    init: async () => {

        let service_type_code = '';
        let institution_code = '';
        let institution_name = '';
        let region_code = '';

        ipcRenderer.on('user', (event, user) => {
            (<HTMLInputElement>document.getElementById('user_id')).value = user.id;
            (<HTMLInputElement>document.getElementById('username')).value = user.username;
            (<HTMLInputElement>document.getElementById('password')).value = user.password;
            (<HTMLSelectElement>document.getElementById('first_name')).value = user.name;
            (<HTMLSelectElement>document.getElementById('patronymics')).value = user.patronymics;
            (<HTMLSelectElement>document.getElementById('last_name')).value = user.surname;
            (<HTMLSelectElement>document.getElementById('position')).value = user.job_title;
            (<HTMLSelectElement>document.getElementById('profession')).value = user.profession;
            (<HTMLSelectElement>document.getElementById('phone')).value = user.phone;
            (<HTMLSelectElement>document.getElementById('email')).value = user.email;
            (<HTMLSelectElement>document.getElementById('role_code')).value = user.role_code;

            const appSession = JSON.parse(sessionStorage.getItem('appSession'));
            if (appSession) {
                if (user.role_code === '1') {
                    addCoordinator(appSession.userData);
                }
                service_type_code = appSession.userData.service_type_code;
                institution_code = appSession.userData.institution_code;
                institution_name = appSession.userData.institution_name;
                region_code = appSession.userData.region_code;
            } else {
                ipcRenderer.on('appSession', (event, arg) => {
                    if (user.role_code === '1') {
                        addCoordinator(arg.userData);
                    }
                    service_type_code = arg.userData.service_type_code;
                    institution_code = arg.userData.institution_code;
                    institution_name = arg.userData.institution_name;
                    region_code = arg.userData.region_code;
                });
            }
        });

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {
            // validate all input and send to main process

            const user_id = (<HTMLInputElement>document.getElementById('user_id')).value;
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

            // TODO -- do we need this validation?
            // check email is valid with regex
            // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            // if (email != '' && !emailRegex.test(email)) {
            //     ipcRenderer.send('showDialogMessage', {
            //         type: 'error',
            //         message: 'The enter a valid email address is not valid.'
            //     });
            // }

            ipcRenderer.send('updateUser', {
                'id': user_id,
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


