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

const boundFunctions = new Map();
const callbackEdit = () => {
    document.querySelectorAll('.editButton').forEach(item => {
        const boundFunctionToRemove = boundFunctions.has(item);
        if (!boundFunctionToRemove) {
            const boundFunction = editItem.bind(this, (<HTMLButtonElement>item).dataset.mycode);
            item.addEventListener('click', boundFunction);
            boundFunctions.set(item, boundFunction);
        }
    });
}

export const institutions = {
    init: async () => {

        const lang = localStorage.getItem('language');
        let langpath = '';
        if (lang === 'ru') {
            langpath = '../../locales/tables_ru.json';
        } else if (lang === 'uz') {
            langpath = '../../locales/tables_uz.json';
        }

        const table = $('#institutions_list').DataTable({
            "language": {
                "url": langpath
            },
            "createdRow": function (row: any) {
                $(row).addClass('text-left');
            },
            columns: [{ width: '90%' }, null],
            drawCallback: callbackEdit
        });

        ipcRenderer.on('institutions', (event, institutions) => {
            fillTable(table, institutions);
        });
    }
}

const fillTable = (table: any, institutions: Array<any>) => {
    table.clear().draw();
    institutions.forEach((institution) => {

        const buttonEdit = document.createElement('button');
        buttonEdit.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="fill-white w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>';
        //  text-white px-4 py-2 rounded
        buttonEdit.classList.add('bg-sky-500');
        buttonEdit.classList.add('text-white');
        buttonEdit.classList.add('px-2');
        buttonEdit.classList.add('py-1.5');
        buttonEdit.classList.add('rounded');
        buttonEdit.classList.add('editButton');
        buttonEdit.setAttribute("data-mycode", institution.code + '');
        buttonEdit.setAttribute("title", i18n.__("t_edit_institution"));

        const buttons = document.createElement('div');
        buttons.classList.add('flex');
        buttons.classList.add('justify-center');
        buttons.classList.add('gap-2');
        buttons.appendChild(buttonEdit);

        let instName = institution.name_en;
        if (lang === 'uz') {
            instName = institution.name_uz;
        } else if (lang === 'ru') {
            instName = institution.name_ru;
        }

        table.row.add([
            institution.code + ' | ' + instName,
            buttons.outerHTML
        ]).draw();
    });

    callbackEdit();
};


// modifica modifica
const editItem = function (code: string) {
    ipcRenderer.send('changeWindow', {
        'name': 'regional/02_institution_details_service',
        'code': code,
    });
};
