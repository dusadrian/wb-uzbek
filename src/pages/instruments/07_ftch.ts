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


export const ftch = {
    init: async () => {

        ipcRenderer.send('getFTCH');

        (<HTMLButtonElement>document.getElementById('add_family_type')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'instruments',
                'instrument': 'FTCH'
            });
        });

        const lang = localStorage.getItem('language');
        let langpath = '';
        if (lang === 'ru') {
            langpath = '../../locales/tables_ru.json';
        } else if (lang === 'uz') {
            langpath = '../../locales/tables_uz.json';
        }

        const table = $('#family_home_list').DataTable({
            "language": {
                "url": langpath
            },
            "createdRow": function (row: HTMLTableRowElement) {
                // $(row).addClass('text-center');
                $(row).addClass('align-middle');
            }
        });

        ipcRenderer.on('ftch', (event, ftch) => { 
            fillTable(table, ftch);
        });

    }
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fillTable = (table: any, ftch: Array<any>) => {
    table.clear().draw();
    ftch.forEach((item) => {

        const buttonEdit = document.createElement('button');
        buttonEdit.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="fill-white w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>';
        //  text-white px-4 py-2 rounded
        buttonEdit.classList.add('bg-sky-500');
        buttonEdit.classList.add('text-white');
        buttonEdit.classList.add('px-2');
        buttonEdit.classList.add('py-1.5');
        buttonEdit.classList.add('rounded');
        buttonEdit.classList.add('editButton');
        buttonEdit.setAttribute("data-myId", item.id + '');
        buttonEdit.setAttribute("title", "Edit item");
        
        const buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="fill-white w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>';
        buttonDelete.classList.add('bg-red-500');
        buttonDelete.classList.add('text-white');
        buttonDelete.classList.add('px-2');
        buttonDelete.classList.add('py-1.5');
        buttonDelete.classList.add('rounded');
        buttonDelete.classList.add('deleteButton');
        buttonDelete.setAttribute("data-myId", item.id + '');
        buttonDelete.setAttribute("title", "Delete item");

        const buttons = document.createElement('div');
        buttons.classList.add('flex');
        buttons.classList.add('justify-center');
        buttons.classList.add('gap-2');
        buttons.appendChild(buttonEdit);
        buttons.appendChild(buttonDelete);

        table.row.add([
            item.id,
            item.ifm1,
            item.ifm2,
            item.ifm3,
            buttons.outerHTML
        ]).draw();



    document.querySelectorAll('.editButton').forEach(item => {
        item.addEventListener('click', editItem.bind(this, (<HTMLButtonElement>item).dataset.myid));
    });
    document.querySelectorAll('.deleteButton').forEach(item => {
        item.addEventListener('click', deleteItem.bind(this, (<HTMLButtonElement>item).dataset.myid));
    });
    });
};


// modifica modifica
const editItem = function (id: number) {
    ipcRenderer.send('changeWindow', {
        'name': 'instruments',
        'instrument': 'FTCH',
        'id': id,
    });
};

// sterge eveniment
const deleteItem = function (id: number) {
    ipcRenderer.send('deleteFTCH', {
        'id': id,
    });
};
