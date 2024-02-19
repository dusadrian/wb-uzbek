import { ipcRenderer } from "electron";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        require: any;
    }
}
const $ = window.require('jquery');
const dt = window.require('datatables.net-dt');
dt(window, $);


export const users = {
    init: async () => {


        const lang = localStorage.getItem('language');
        let langpath = '';
        if (lang === 'ru') {
            langpath = '../../locales/tables_ru.json';
        } else if (lang === 'uz') {
            langpath = '../../locales/tables_uz.json';
        }

        $('#users_list').DataTable({
            "language": {
                "url": langpath
            }
        });

        (<HTMLButtonElement>document.getElementById('add_user')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'localCoordinator/04_add_user'
            });
        });

    }
}


