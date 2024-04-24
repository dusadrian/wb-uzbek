import { ipcRenderer } from "electron";

interface IObj {
    'name': string,
    'instrument': string,
    'id'?: string
}

export const localCoordinator = {
    init: async () => {

        ipcRenderer.send('getExisting');

        // Questionnaire on the material resources
        const viewEdit_QMR = (<HTMLButtonElement>document.getElementById('viewEdit_QMR'))
        if (viewEdit_QMR !== null) {
            viewEdit_QMR.addEventListener('click', () => {
                const obj: IObj = {
                    'name': 'instruments',
                    'instrument': 'QMR'
                }
                const instId = viewEdit_QMR.dataset.id;
                if (instId && instId !== 'null') {
                    obj['id'] = instId;
                }
                ipcRenderer.send('changeWindow', obj);
            });
        }

        // Data sheet on entries and exits
        const viewEdit_DSEE = (<HTMLButtonElement>document.getElementById('viewEdit_DSEE'));
        if (viewEdit_DSEE !== null) {
            viewEdit_DSEE.addEventListener('click', () => {
                const obj: IObj = {
                    'name': 'instruments',
                    'instrument': 'DSEE'
                }
                const instId = viewEdit_DSEE.dataset.id;
                if (instId && instId !== 'null') {
                    obj['id'] = instId;
                }
                ipcRenderer.send('changeWindow', obj);
            });
        }

        // Children placed in the service
        const viewEdit_CPIS = (<HTMLButtonElement>document.getElementById('viewEdit_CPIS'));
        if (viewEdit_CPIS !== null) {
            viewEdit_CPIS.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'cpis',
                });
            });
        }

        // Staff working in the service
        const viewEdit_CSR = (<HTMLButtonElement>document.getElementById('viewEdit_CSR'));
        if (viewEdit_CSR !== null) {
            viewEdit_CSR.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'csr',
                });
            });
        }

        // Staff working in the service
        const viewEdit_YPLCS = (<HTMLButtonElement>document.getElementById('viewEdit_YPLCS'));
        if (viewEdit_YPLCS !== null) {
            viewEdit_YPLCS.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'yplcs',
                });
            });
        }
        // Children placed in specialized boarding schools
        const viewEdit_CIBS = (<HTMLButtonElement>document.getElementById('viewEdit_CIBS'));
        if (viewEdit_CIBS !== null) {
            viewEdit_CIBS.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'cibs',
                });
            });
        }
        // Children placed in specialized boarding schools
        const viewEdit_TQYP = (<HTMLButtonElement>document.getElementById('viewEdit_TQYP'));
        if (viewEdit_TQYP !== null) {
            viewEdit_TQYP.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'tqyp',
                });
            });
        }

        // Institution details
        (<HTMLButtonElement>document.getElementById('viewEdit_ID')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'localCoordinator/02_institution_details'
            });
        });

        // Users
        (<HTMLButtonElement>document.getElementById('users')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'localCoordinator/03_users'
            });
        });

        ipcRenderer.on("existing", (_event, args) => {
            viewEdit_QMR.dataset.id = args.qmr;
            viewEdit_DSEE.dataset.id = args.dsee;
        })
    }
}
