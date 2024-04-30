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


export const eef = {
    init: async () => {

        ipcRenderer.send('getEEF');

        (<HTMLButtonElement>document.getElementById('add_evaluation')).addEventListener('click', () => {
            ipcRenderer.send('changeWindow', {
                'name': 'instruments',
                'instrument': 'EEF'
            });
        });

        const lang = localStorage.getItem('language');
        let langpath = '';
        if (lang === 'ru') {
            langpath = '../../locales/tables_ru.json';
        } else if (lang === 'uz') {
            langpath = '../../locales/tables_uz.json';
        }

        const table = $('#evaluation_list').DataTable({
            "language": {
                "url": langpath
            },
            "createdRow": function (row: HTMLTableRowElement) {
                $(row).addClass('align-middle');
            }
        });

        ipcRenderer.on('eef', (event, eef) => {
            fillTable(table, eef);
        });

    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fillTable = (table: any, items: Array<any>) => {
    table.clear().draw();
    items.forEach((item) => {

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

        const status = document.createElement('div');
        status.classList.add('flex'); 
        status.classList.add('justify-center'); 
        if(item.status == 'partial') { 
            status.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="w-4 h-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>'
        } else if(item.status == 'completed') {
            status.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 text-green-500" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>';
        }

        table.row.add([
            item.id,
            item.i1,
            status.outerHTML,
            buttons.outerHTML
        ]).draw();

    });
    document.querySelectorAll('.editButton').forEach(item => {
        item.addEventListener('click', editItem.bind(this, (<HTMLButtonElement>item).dataset.myid));
    });
    document.querySelectorAll('.deleteButton').forEach(item => {
        item.addEventListener('click', deleteItem.bind(this, (<HTMLButtonElement>item).dataset.myid));
    });
};


// modifica modifica
const editItem = function (id: number) {
    ipcRenderer.send('changeWindow', {
        'name': 'instruments',
        'instrument': 'EEF',
        'id': id,
    });
};

// sterge eveniment
const deleteItem = function (id: number) {
    ipcRenderer.send('deleteEEF', {
        'id': id,
    });
};
