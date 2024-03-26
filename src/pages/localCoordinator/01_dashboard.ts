import { ipcRenderer } from "electron";

interface IObj {
    'name': string,
    'instrument': string,
    'id'?: string
}

export const localCoordinator = {
    init: async () => {

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

        const viewEdit_CPIS = (<HTMLButtonElement>document.getElementById('viewEdit_CPIS'));
        if (viewEdit_CPIS !== null) {
            viewEdit_CPIS.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'cpis',
                });
            });
        }

        (<HTMLButtonElement>document.getElementById('viewEdit_ID')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'localCoordinator/02_institution_details'
            });
        });

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
