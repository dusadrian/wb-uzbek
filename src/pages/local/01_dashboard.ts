import { ipcRenderer } from "electron";
import { User } from "../../interfaces/database";

interface IObj {
    'name': string,
    'instrument': string,
    'id'?: string
}

const initInstruments = (userData: User) => {

    // get ID for instruments 4 and 6 -- QMR and DSEE
    if (userData.role_code == '4' || userData.role_code == '1') {
        ipcRenderer.send('getInstrumentsId');
    }

    // I1. Questionnaire about the child placed into the child protection system
    if ((userData.role_code == '1' || userData.role_code == '2') && (userData.service_type_code == '1' || userData.service_type_code == '2' || userData.service_type_code == '3' || userData.service_type_code == '7' || userData.service_type_code == '9')) {
        document.getElementById('instrument1').classList.remove('hidden');
        document.getElementById('instrument1').classList.add('grid');
        const instrument1 = (<HTMLButtonElement>document.getElementById('view_instrument1'));
        if (instrument1 !== null) {
            instrument1.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'cpis',
                });
            });
        }
    }
    // I2. Questionnaire about the child placed in specialized boarding schools
    if ((userData.role_code == '1' || userData.role_code == '2') && (userData.service_type_code == '4' || userData.service_type_code == '5')) {
        document.getElementById('instrument2').classList.remove('hidden');
        document.getElementById('instrument2').classList.add('grid');
        const instrument2 = (<HTMLButtonElement>document.getElementById('view_instrument2'));
        if (instrument2 !== null) {
            instrument2.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'cibs',
                });
            });
        }
    }
    // I3. Staff registry
    if ((userData.role_code == '1' || userData.role_code == '3') && (userData.service_type_code == '1' || userData.service_type_code == '2' || userData.service_type_code == '3' || userData.service_type_code == '7' || userData.service_type_code == '4' || userData.service_type_code == '5')) {
        document.getElementById('instrument3').classList.remove('hidden');
        document.getElementById('instrument3').classList.add('grid');
        const instrument3 = (<HTMLButtonElement>document.getElementById('view_instrument3'));
        if (instrument3 !== null) {
            instrument3.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'csr',
                });
            });
        }
    }
    // I4. Questionnaire on the material resources of the institution and the living conditions of the residing children
    if ((userData.role_code == '1' || userData.role_code == '4') && (userData.service_type_code == '1' || userData.service_type_code == '2' || userData.service_type_code == '3' || userData.service_type_code == '7' || userData.service_type_code == '4' || userData.service_type_code == '5')) {
        document.getElementById('instrument4').classList.remove('hidden');
        document.getElementById('instrument4').classList.add('grid');
        const instrument4 = (<HTMLButtonElement>document.getElementById('view_instrument4'));
        if (instrument4 !== null) {
            instrument4.addEventListener('click', () => {
                const obj: IObj = {
                    'name': 'instruments',
                    'instrument': 'QMR'
                }
                const instId = instrument4.dataset.id;
                if (instId && instId !== 'null') {
                    obj['id'] = instId;
                }
                ipcRenderer.send('changeWindow', obj);
            });
        }
    }
    // I5A. Trace questionnaire about the young person who left the alternative care system
    if ((userData.role_code == '1' || userData.role_code == '2') && (userData.service_type_code == '1' || userData.service_type_code == '2' || userData.service_type_code == '3' || userData.service_type_code == '7' || userData.service_type_code == '4' || userData.service_type_code == '5' || userData.service_type_code == '9')) {
        document.getElementById('instrument5a').classList.remove('hidden');
        document.getElementById('instrument5a').classList.add('grid');
        const instrument5a = (<HTMLButtonElement>document.getElementById('view_instrument5a'));
        if (instrument5a !== null) {
            instrument5a.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'tqyp',
                });
            });
        }
    }
    // I5. Monitoring questionnaire about the young people who left care system
    if ((userData.role_code == '1' || userData.role_code == '2') && userData.service_type_code == '9') {
        document.getElementById('instrument5').classList.remove('hidden');
        document.getElementById('instrument5').classList.add('grid');
        const instrument5 = (<HTMLButtonElement>document.getElementById('view_instrument5'));
        if (instrument5 !== null) {
            instrument5.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'yplcs',
                });
            });
        }
    }
    // I6. Data sheet on entries and exits from childcare institutions
    if ((userData.role_code == '1' || userData.role_code == '4') && (userData.service_type_code == '1' || userData.service_type_code == '2' || userData.service_type_code == '3' || userData.service_type_code == '7' || userData.service_type_code == '4' || userData.service_type_code == '5')) {
        document.getElementById('instrument6').classList.remove('hidden');
        document.getElementById('instrument6').classList.add('grid');
        const instrument6 = (<HTMLButtonElement>document.getElementById('view_instrument6'));
        if (instrument6 !== null) {
            instrument6.addEventListener('click', () => {
                const obj: IObj = {
                    'name': 'instruments',
                    'instrument': 'DSEE'
                }
                const instId = instrument6.dataset.id;
                if (instId && instId !== 'null') {
                    obj['id'] = instId;
                }
                ipcRenderer.send('changeWindow', obj);
            });
        }
    }
    // I7. Family-Type Children's Home Questionnaire
    if ((userData.role_code == '1' || userData.role_code == '2') && userData.service_type_code == '9') {
        document.getElementById('instrument7').classList.remove('hidden');
        document.getElementById('instrument7').classList.add('grid');
        const instrument7 = (<HTMLButtonElement>document.getElementById('view_instrument7'));
        if (instrument7 !== null) {
            instrument7.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'ftch',
                });
            });
        }
    }
    // I8. Patronat Family Questionnaire
    if ((userData.role_code == '1' || userData.role_code == '2') && userData.service_type_code == '9') {
        document.getElementById('instrument8').classList.remove('hidden');
        document.getElementById('instrument8').classList.add('grid');
        const instrument8 = (<HTMLButtonElement>document.getElementById('view_instrument8'));
        if (instrument8 !== null) {
            instrument8.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'pfq',
                });
            });
        }
    }
}

export const local = {
    init: async () => {

        ipcRenderer.send('getExisting');

        const appSession = JSON.parse(sessionStorage.getItem('appSession'));
        if (appSession) {
            initInstruments(appSession.userData);
        } else {
            ipcRenderer.on('appSession', (event, arg) => {
                initInstruments(arg.userData);
            });
        }

        // // Institution details
        // (<HTMLButtonElement>document.getElementById('viewEdit_ID')).addEventListener('click', () => {
        //     ipcRenderer.send('changeWindow', {
        //         'name': 'local/02_institution_details'
        //     });
        // });

        // Users
        (<HTMLButtonElement>document.getElementById('users')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'local/03_users'
            });
        });

        ipcRenderer.on("existing", (_event, args) => {
            document.getElementById('view_instrument4').dataset.id = args.qmr;
            document.getElementById('view_instrument6').dataset.id = args.dsee;
        })
    }
}
