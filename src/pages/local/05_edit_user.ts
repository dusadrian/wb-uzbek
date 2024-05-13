import { ipcRenderer } from "electron";

export const editUser = {
    init: async () => {


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
        });

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {
            // validate all input and send to main process

            const user_id = (<HTMLInputElement>document.getElementById('user_id')).value;
            // const username = (<HTMLInputElement>document.getElementById('username')).value;
            // const password = (<HTMLInputElement>document.getElementById('password')).value;
            const name = (<HTMLSelectElement>document.getElementById('first_name')).value;
            const patronymics = (<HTMLSelectElement>document.getElementById('patronymics')).value;
            const surname = (<HTMLSelectElement>document.getElementById('last_name')).value;

            const job_title = (<HTMLSelectElement>document.getElementById('position')).value;
            const profession = (<HTMLSelectElement>document.getElementById('profession')).value;
            const phone = (<HTMLSelectElement>document.getElementById('phone')).value;
            const email = (<HTMLSelectElement>document.getElementById('email')).value;
            
            const auth_code = (<HTMLSelectElement>document.getElementById('auth_code')).value;
            
            // validate above values
            if (name === '') {
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
            if (patronymics === '') {
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
            if (surname === '') {
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
            if (job_title === '') {
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
            if (profession === '') {
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
            if (phone === '') {
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

            ipcRenderer.send('updateUser', {
                'id': user_id,
                name,
                patronymics,
                surname,
                job_title,
                profession,
                phone,
                email,
                status: '1',
                auth_code
            });
        });
    }
}


