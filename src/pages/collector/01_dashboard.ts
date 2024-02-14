// import { ipcRenderer } from "electron";

export const collector = {
    init: async () => {



        
        (<HTMLButtonElement>document.getElementById('viewEdit_QMR')).addEventListener('click', () => {
            alert('viewEdit_QMR');
        });

        // (<HTMLButtonElement>document.getElementById('sec2')).addEventListener('click', () => {
        //     ipcRenderer.send('changeWindow', {
        //         'name': 'plan_di1/02_section_2'
        //     });
        // });
        // (<HTMLButtonElement>document.getElementById('sec3')).addEventListener('click', () => {
        //     ipcRenderer.send('changeWindow', {
        //         'name': 'plan_di1/03_section_3'
        //     });
        // });
        // ipcRenderer.on("instrumentDataReady", (_event, args) => {

        //     console.log(args);

        //     getStatus(args.sections.section1, 'section1', 4);
        //     getStatus(args.sections.section2, 'section2', 6);
        //     getStatus(args.sections.section3, 'section3', 4);
        // })
    }
}
