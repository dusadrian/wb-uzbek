import { ipcRenderer } from "electron";
import { User, StatusInterface } from "../../interfaces/database";
import constant from "../../libraries/constants";
interface IObj {
    'name': string,
    'instrument': string,
    'id'?: string
}

const initInstruments = (userData: User, institutionDetails: any) => {

    // get ID for instruments 4 and 6 -- QMR and DSEE
    if (userData.role_code == constant.ROLE_ADMIN_SPECIALIST || userData.role_code == constant.ROLE_LOCAL) {
        ipcRenderer.send('getInstrumentsId');
    }

    // I1. Questionnaire about the child placed into the child protection system
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_DATA_COLLECTOR) && (constant.CHILD_CARE.includes(userData.service_type_code) || constant.INSON.includes(userData.service_type_code))) {
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
        if (constant.INSON.includes(userData.service_type_code)) {
            document.getElementById('t1c11').innerText = institutionDetails.children_fth;
            if (Number(institutionDetails.children_fth) === 0) {
                (document.getElementById('view_instrument1') as HTMLButtonElement).disabled = true;
            }
        } else {
            document.getElementById('t1c11').innerText = institutionDetails.children;
            if (Number(institutionDetails.children) === 0) {
                (document.getElementById('view_instrument1') as HTMLButtonElement).disabled = true;
            }
        }
    }
    // I2. Questionnaire about the child placed in specialized boarding schools
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_DATA_COLLECTOR) && (constant.SPECIALIZED.includes(userData.service_type_code))) {
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
        document.getElementById('t1c21').innerText = institutionDetails.children;
        if (Number(institutionDetails.children) === 0) {
            (document.getElementById('view_instrument2') as HTMLButtonElement).disabled = true;
        }
    }
    // I3. Staff registry
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_HR_SPECIALIST) && (constant.CHILD_CARE.includes(userData.service_type_code) || constant.SPECIALIZED.includes(userData.service_type_code))) {
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
        document.getElementById('t1c31').innerText = institutionDetails.employees;
    }
    // I4. Questionnaire on the material resources of the institution and the living conditions of the residing children
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_ADMIN_SPECIALIST) && (constant.CHILD_CARE.includes(userData.service_type_code) || constant.SPECIALIZED.includes(userData.service_type_code))) {
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
        document.getElementById('t1c41').innerText = '1';
    }
    // I5A. Trace questionnaire about the young person who left the alternative care system
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_DATA_COLLECTOR) && (constant.CHILD_CARE.includes(userData.service_type_code) || constant.SPECIALIZED.includes(userData.service_type_code) || constant.INSON.includes(userData.service_type_code))) {
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
        if (!constant.INSON.includes(userData.service_type_code)) {
            document.getElementById('t1c51').innerText = institutionDetails.leavers;
        } else {
            document.getElementById('t1c51').innerText = institutionDetails.leavers_fth;
            if (Number(institutionDetails.leavers_fth) === 0) {
                (document.getElementById('view_instrument5a') as HTMLButtonElement).disabled = true;
            }
        }
    }
    // I5. Monitoring questionnaire about the young people who left care system -- only INSON
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_DATA_COLLECTOR) && constant.INSON.includes(userData.service_type_code)) {
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
        document.getElementById('t1c61').innerText = institutionDetails.leavers_fth;
        if (Number(institutionDetails.leavers_fth) === 0) {
            (document.getElementById('view_instrument5') as HTMLButtonElement).disabled = true;
        }
    }
    // I6. Data sheet on entries and exits from childcare institutions
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_ADMIN_SPECIALIST) && (constant.CHILD_CARE.includes(userData.service_type_code) || constant.SPECIALIZED.includes(userData.service_type_code))) {
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
        document.getElementById('t1c71').innerText = '1';
    }
    // I7. Family-Type Children's Home Questionnaire
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_DATA_COLLECTOR) && constant.INSON.includes(userData.service_type_code)) {
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
        document.getElementById('t1c81').innerText = institutionDetails.fth;
        if (Number(institutionDetails.fth) === 0) {
            (document.getElementById('view_instrument7') as HTMLButtonElement).disabled = true;
        }
    }
    // I8. Patronat Family Questionnaire
    if ((userData.role_code == constant.ROLE_LOCAL || userData.role_code == constant.ROLE_DATA_COLLECTOR) && constant.INSON.includes(userData.service_type_code)) {
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
        document.getElementById('t1c91').innerText = institutionDetails.pf;
        if (Number(institutionDetails.pf) === 0) {
            (document.getElementById('view_instrument8') as HTMLButtonElement).disabled = true;
        }
    }

    // users
    if (userData.role_code === constant.ROLE_LOCAL || (userData.role_code === constant.ROLE_DATA_COLLECTOR && constant.INSON.includes(userData.service_type_code))) {
        if (!constant.INSON.includes(userData.service_type_code)) { // if not INSON
            document.getElementById('users').classList.remove('hidden');
            document.getElementById('users').classList.add('flex');
        }
        document.getElementById('institution').classList.remove('hidden');
        document.getElementById('institution').classList.add('flex');
    }
}

const processDashStats = (args: any, userData: User) => {
    if (args.instrument1.length > 0) {
        const totalCompletedObj = args.instrument1.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument1.filter((el: StatusInterface) => el.status === 'partial');

        const toBefilled = Number(document.getElementById('t1c11').innerText);

        document.getElementById('t1c12').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c13').innerText = totalPartialObj[0]?.total || 0;


        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c14').innerText = percent + '%';
    } else {
        document.getElementById('t1c12').innerText = '0';
        document.getElementById('t1c13').innerText = '0';
        document.getElementById('t1c14').innerText = '0%';
    }
    // =======
    if (args.instrument2.length > 0) {
        const totalCompletedObj = args.instrument2.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument2.filter((el: StatusInterface) => el.status === 'partial');

        const toBefilled = Number(document.getElementById('t1c21').innerText);

        document.getElementById('t1c22').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c23').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c24').innerText = percent + '%';
    } else {
        document.getElementById('t1c22').innerText = '0';
        document.getElementById('t1c23').innerText = '0';
        document.getElementById('t1c24').innerText = '0%';
    }
    // =======
    if (args.instrument3.length > 0) {
        const totalCompletedObj = args.instrument3.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument3.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c32').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c33').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c34').innerText = percent + '%';
    } else {
        document.getElementById('t1c32').innerText = '0';
        document.getElementById('t1c33').innerText = '0';
        document.getElementById('t1c34').innerText = '0%';
    }
    // =======
    if (args.instrument4.length > 0) {
        const totalCompletedObj = args.instrument4.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument4.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c42').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c43').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c44').innerText = percent + '%';
    } else {
        document.getElementById('t1c42').innerText = '0';
        document.getElementById('t1c43').innerText = '0';
        document.getElementById('t1c44').innerText = '0%';
    }
    // =======
    if (args.instrument5a.length > 0) {
        const totalCompletedObj = args.instrument5a.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument5a.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c52').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c53').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c54').innerText = percent + '%';
    } else {
        document.getElementById('t1c52').innerText = '0';
        document.getElementById('t1c53').innerText = '0';
        document.getElementById('t1c54').innerText = '0%';
    }
    // =======
    if (args.instrument5.length > 0) {
        const totalCompletedObj = args.instrument5.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument5.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c62').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c63').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c64').innerText = percent + '%';
    } else {
        document.getElementById('t1c62').innerText = '0';
        document.getElementById('t1c63').innerText = '0';
        document.getElementById('t1c64').innerText = '0%';
    }
    // =======
    if (args.instrument6.length > 0) {
        const totalCompletedObj = args.instrument6.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument6.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c72').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c73').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c74').innerText = percent + '%';
    } else {
        document.getElementById('t1c72').innerText = '0';
        document.getElementById('t1c73').innerText = '0';
        document.getElementById('t1c74').innerText = '0%';
    }
    // =======
    if (args.instrument7.length > 0) {
        const totalCompletedObj = args.instrument7.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument7.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c82').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c83').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c84').innerText = percent + '%';
    } else {
        document.getElementById('t1c82').innerText = '0';
        document.getElementById('t1c83').innerText = '0';
        document.getElementById('t1c84').innerText = '0%';
    }
    // =======
    if (args.instrument8.length > 0) {
        const totalCompletedObj = args.instrument8.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument8.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c92').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c93').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c94').innerText = percent + '%';
    } else {
        document.getElementById('t1c92').innerText = '0';
        document.getElementById('t1c93').innerText = '0';
        document.getElementById('t1c94').innerText = '0%';
    }
}


export const local = {
    init: async () => {

        // On app session
        ipcRenderer.on('appSession', (event, arg) => {
            const userData = arg.userData;
            const institutionDetails = arg.institutionDetails;
            initInstruments(userData, institutionDetails);
            ipcRenderer.send('getLocalDashStats');
            ipcRenderer.on("dashStats", (_event, args) => {
                processDashStats(args, userData);
            })
        });

        // Institution details
        (<HTMLButtonElement>document.getElementById('institution')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'local/02_institution_details'
            });
        });

        // Users
        (<HTMLButtonElement>document.getElementById('users')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'local/03_users'
            });
        });
        // Export data
        (<HTMLButtonElement>document.getElementById('exportData')).addEventListener('click', () => {
            const appSession = JSON.parse(sessionStorage.getItem('appSession'));
            ipcRenderer.send('exportData', {
                'userRoleCode': appSession.userData.role_code,
                'userServiceTypeCode': appSession.userData.service_type_code,
            });
        });
        // Import data
        (<HTMLButtonElement>document.getElementById('importData')).addEventListener('click', () => {
            const appSession = JSON.parse(sessionStorage.getItem('appSession'));
            ipcRenderer.send('importData', {
                'userRoleCode': appSession.userData.role_code,
                'userServiceTypeCode': appSession.userData.service_type_code,
            });
        });

        ipcRenderer.on("existing", (_event, args) => {
            document.getElementById('view_instrument4').dataset.id = args.qmr;
            document.getElementById('view_instrument6').dataset.id = args.dsee;
        });
    }
}
