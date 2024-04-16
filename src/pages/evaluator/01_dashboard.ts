import { ipcRenderer } from "electron";

export const evaluator = {
    init: async () => {

        // 09 - External evaluation form of the childcare institutions and boarding schools
        const view_list_EEF = (<HTMLButtonElement>document.getElementById('view_list_EEF'));
        if (view_list_EEF !== null) {
            view_list_EEF.addEventListener('click', () => {
                ipcRenderer.send('changeWindow', {
                    'name': 'eef',
                });
            });
        }
    }
}
