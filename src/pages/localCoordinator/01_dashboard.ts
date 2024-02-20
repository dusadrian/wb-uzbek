import { ipcRenderer } from "electron";

export const localCoordinator = {
    init: async () => {


        // (<HTMLButtonElement>document.getElementById('viewEdit_QMR')).addEventListener('click', () => {
        //     alert('viewEdit_QMR');
        // });

        (<HTMLButtonElement>document.getElementById('viewEdit_ID')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'localCoordinator/02_institution_details'
            });
        });

        (<HTMLButtonElement>document.getElementById('viewEdit_QMR')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'instruments/01_qmr'
            });
        });


        (<HTMLButtonElement>document.getElementById('users')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'localCoordinator/03_users'
            });
        });


        // ipcRenderer.on("instrumentDataReady", (_event, args) => {

        //     console.log(args);

        //     getStatus(args.sections.section1, 'section1', 4);
        //     getStatus(args.sections.section2, 'section2', 6);
        //     getStatus(args.sections.section3, 'section3', 4);
        // })
    }
}
