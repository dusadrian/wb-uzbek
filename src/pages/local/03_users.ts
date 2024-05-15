/* eslint-disable @typescript-eslint/no-explicit-any */
import { ipcRenderer } from "electron";
import * as path from "path";
import { I18n } from "i18n";
const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../../locales'),
    defaultLocale: 'en',
});

// set language
const lang = localStorage.getItem('language');
if (lang) {
    i18n.setLocale(lang);
}
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

        const table = $('#users_list').DataTable({
            "language": {
                "url": langpath
            },
            "createdRow": function (row: any) {
                $(row).addClass('text-center');
                $(row).addClass('align-middle');
            }
        });

        ipcRenderer.on('users', (event, users) => {
            fillTable(table, users);
        });

        (<HTMLButtonElement>document.getElementById('add_user')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'local/04_add_user'
            });
        });

    }
}

const fillTable = (table: any, users: Array<any>) => {
    table.clear().draw();
    users.forEach((user) => {

        const buttonEdit = document.createElement('button');
        buttonEdit.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="fill-white w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>';
        //  text-white px-4 py-2 rounded
        buttonEdit.classList.add('bg-sky-500');
        buttonEdit.classList.add('text-white');
        buttonEdit.classList.add('px-2');
        buttonEdit.classList.add('py-1.5');
        buttonEdit.classList.add('rounded');
        buttonEdit.classList.add('editButton');
        buttonEdit.setAttribute("data-myId", user.id + '');
        buttonEdit.setAttribute("title", i18n.__("t_edit_user"));

        const buttonExport = document.createElement('button');
        buttonExport.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  class="fill-white w-4 h-4" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>';
        //  text-white px-4 py-2 rounded
        buttonExport.classList.add('bg-green-500');
        buttonExport.classList.add('text-white');
        buttonExport.classList.add('px-2');
        buttonExport.classList.add('py-1.5');
        buttonExport.classList.add('rounded');
        buttonExport.classList.add('exportButton');
        buttonExport.setAttribute("data-myUUID", user.uuid);
        buttonExport.setAttribute("data-myRoleCode", user.role_code);
        buttonExport.setAttribute("data-myServiceType", user.service_type_code);
        buttonExport.setAttribute("title", i18n.__("t_export_user_instruments"));

        const buttons = document.createElement('div');
        buttons.classList.add('flex');
        buttons.classList.add('justify-center');
        buttons.classList.add('gap-2');
        buttons.appendChild(buttonEdit);
        // add export button
        buttons.appendChild(buttonExport);

        table.row.add([
            user.name,
            user.patronymics,
            user.surname,
            user.username,
            buttons.outerHTML
        ]).draw();

    });
    document.querySelectorAll('.editButton').forEach(item => {
        item.addEventListener('click', editItem.bind(this, (<HTMLButtonElement>item).dataset.myid));
    });
    document.querySelectorAll('.exportButton').forEach(item => {
        item.addEventListener('click', exportUserData.bind(this, { uuid: (<HTMLButtonElement>item).dataset.myuuid, roleCode: (<HTMLButtonElement>item).dataset.myrolecode, serviceType: (<HTMLButtonElement>item).dataset.myservicetype }));
    });
};


// modifica modifica
const editItem = function (id: number) {
    ipcRenderer.send('changeWindow', {
        'name': 'local/05_edit_user',
        'id': id,
    });
};
const exportUserData = function (data: { uuid: string, roleCode: string, serviceType: string }) {
    console.log(data.uuid, data.roleCode, data.serviceType);

    ipcRenderer.send('exportUserData', {
        'uuid': data.uuid,
        'roleCode': data.roleCode,
        'serviceType': data.serviceType,
    });
};
