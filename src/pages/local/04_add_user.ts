import { ipcRenderer } from "electron";

export const addUser = {
    init: async () => {

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {
            // validate all input and send to main process

            const username = (<HTMLInputElement>document.getElementById('username')).value;
            const password = (<HTMLInputElement>document.getElementById('password')).value;
            const first_name = (<HTMLSelectElement>document.getElementById('first_name')).value;
            const patronymics = (<HTMLSelectElement>document.getElementById('patronymics')).value;
            const last_name = (<HTMLSelectElement>document.getElementById('last_name')).value;

            const position = (<HTMLSelectElement>document.getElementById('position')).value;
            const profession = (<HTMLSelectElement>document.getElementById('profession')).value;
            const phone = (<HTMLSelectElement>document.getElementById('phone')).value;
            const email = (<HTMLSelectElement>document.getElementById('email')).value;

            // validate above values
            if (username === '' || password === '' || first_name === '' || patronymics === '' || last_name === '' || position === '' || profession === '' || phone === '' || email === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please fill all fields'
                });
                return;
            }
            
            // check email is valid with regex
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailRegex.test(email)) {
                ipcRenderer.send('showDialogMessage', {
                    type: 'error',
                    message: 'Please enter a valid email'
                });
                return;
            }


            ipcRenderer.send('addUser', {
                username,
                password,
                first_name,
                patronymics,
                last_name,
                position,
                profession,
                phone,
                email
            });
        });
    }
}


