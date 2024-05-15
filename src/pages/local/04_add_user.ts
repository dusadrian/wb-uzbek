import { ipcRenderer } from "electron";

const appSession = JSON.parse(sessionStorage.getItem('appSession'));
const userObj = {
    id: '',
    uuid: '',
    name: '',
    patronymics: '',
    surname: '',
    job_title: '',
    profession: '',
    phone: '',
    email: '',
}
export const addUser = {
    init: async () => {

        const userType = (<HTMLSelectElement>document.getElementById('userType'));

        const username = (<HTMLInputElement>document.getElementById('username'));
        const password = (<HTMLInputElement>document.getElementById('password'));
        const name = (<HTMLSelectElement>document.getElementById('name'));
        const patronymics = (<HTMLSelectElement>document.getElementById('patronymics'));
        const surname = (<HTMLSelectElement>document.getElementById('surname'));
        const job_title = (<HTMLSelectElement>document.getElementById('job_title'));
        const profession = (<HTMLSelectElement>document.getElementById('profession'));
        const phone = (<HTMLSelectElement>document.getElementById('phone'));
        const email = (<HTMLSelectElement>document.getElementById('email'));

        userType.addEventListener('change', () => {
            const value = userType.options[userType.selectedIndex].value;
            if (value !== '') {
                ipcRenderer.send('getNextUser', {
                    userType: value,
                    service_type_code: appSession.userData.service_type_code,
                    institution_code: appSession.userData.institution_code,
                });
            } else {
                userObj.id = '';
                userObj.uuid = '';
                userObj.name = '';
                userObj.patronymics = '';
                userObj.surname = '';
                userObj.job_title = '';
                userObj.profession = '';
                userObj.phone = '';
                userObj.email = '';
                username.value = '';
                password.value = '';
                name.value = '';
                patronymics.value = '';
                surname.value = '';
                job_title.value = '';
                profession.value = '';
                phone.value = '';
                email.value = '';
            }
        });

        ipcRenderer.on('nextUser', (event, arg) => {
            console.log('nextUser', arg);
            (<HTMLInputElement>document.getElementById('user_id')).value = arg.id;
            (<HTMLInputElement>document.getElementById('username')).value = arg.username;
            (<HTMLInputElement>document.getElementById('password')).value = arg.password;
            userObj.id = arg.id;
            userObj.uuid = arg.uuid;
        });

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {
            // validate all input and send to main process


            userObj.name = name.value;
            userObj.patronymics = patronymics.value;
            userObj.surname = surname.value;
            userObj.job_title = job_title.value;
            userObj.profession = profession.value;
            userObj.phone = phone.value;
            userObj.email = email.value;

            const auth_code = (<HTMLSelectElement>document.getElementById('auth_code')).value;

            // validate above values
            // validate above values
            if (userObj.name === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                document.getElementById('name').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('name').focus();
                return;
            }
            if (userObj.patronymics === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                document.getElementById('patronymics').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('patronymics').focus();
                return;
            }
            if (userObj.surname === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                document.getElementById('surname').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('surname').focus();
                return;
            }
            if (userObj.job_title === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                document.getElementById('job_title').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('job_title').focus();
                return;
            }
            if (userObj.profession === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                document.getElementById('profession').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('profession').focus();
                return;
            }
            if (userObj.phone === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                document.getElementById('phone').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('phone').focus();
                return;
            }
            if (auth_code === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                document.getElementById('auth_code').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('auth_code').focus();
                return;
            }

            ipcRenderer.send('addUser', {
                userObj,
                auth_code,
            });
        });
    }
}


