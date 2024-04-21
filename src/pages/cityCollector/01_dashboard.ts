import { ipcRenderer } from "electron";

export const cityCollector = {
    init: async () => {

        // 07 - Family-Type Children's Home questionnaire
        const viewEdit_FTCH = (<HTMLButtonElement>document.getElementById('viewEdit_FTCH'));
        if (viewEdit_FTCH !== null) {
            viewEdit_FTCH.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'ftch',
                });
            });
        }
        // 08 - Patronat family questionnaires
        const viewEdit_PF = (<HTMLButtonElement>document.getElementById('viewEdit_PF'));
        if (viewEdit_PF !== null) {
            viewEdit_PF.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'pfq',
                });
            });
        }

        // - Young people who left care system
        const viewEdit_YPLCS = (<HTMLButtonElement>document.getElementById('viewEdit_YPLCS'));
        if (viewEdit_YPLCS !== null) {
            viewEdit_YPLCS.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'yplcs',
                });
            });
        }
    }
}
