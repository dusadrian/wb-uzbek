import { institutionDetails } from './02_institution_details_inson';
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

const appSession = JSON.parse(sessionStorage.getItem('appSession'));
let region = '';
let institutionType = '';

export const institutions = {
    init: async () => {

        ipcRenderer.on('institutions', (event, args) => {
            const serviceList = document.getElementById('service_list') as HTMLDivElement;
            if (args.institutions.length === 0) {
                serviceList.innerHTML = '<h1>No institutions available</h1>';
            }

            console.log(args);
            

            region = args.filters.region;
            institutionType = args.filters.institutionType;


            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            args.institutions.forEach((service: any) => {
                const div = document.createElement('div');
                // grid-cols-7 w-full mt-0.5 px-5 gap-0.5
                div.classList.add('grid', 'grid-cols-5', 'w-full', 'mt-0.5', 'gap-0.5');
                const div1 = document.createElement('div');
                // bg-tableRow text-gray-600 px-3 py-1.5 font-medium col-span-2 flex items-center
                div1.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-2', 'flex', 'items-center', 'col-span-2');

                let serviceName = service.name_en;
                if (appSession.language === 'uz') {
                    serviceName = service.name_uz;
                } else if (appSession.language === 'ru') {
                    serviceName = service.name_ru;
                }

                div1.innerHTML = service.code + ' | ' + serviceName;
                div.appendChild(div1);

                const div2 = document.createElement('div');
                div2.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-1', 'flex', 'items-center', 'justify-center');
                // TODO Update this based on the selected instrument
                div2.innerHTML = service.children;
                div.appendChild(div2);

                const div3 = document.createElement('div');
                div3.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-1', 'flex', 'items-center', 'justify-center');
                // div3.innerHTML = args.filled[service.code] ?? '-';
                div.appendChild(div3);

                const div4 = document.createElement('div');
                div4.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-1', 'flex', 'items-center', 'justify-center');
                const serviceButton = document.createElement('button');
                // border border-gray-400 px-2 py-0.5 rounded bg-tableHeader/50 hover:bg-tableHeader
                serviceButton.classList.add('border', 'border-gray-400', 'px-2', 'py-0.5', 'rounded', 'bg-tableHeader/50', 'hover:bg-tableHeader');
                serviceButton.innerHTML = 'select';
                serviceButton.classList.add('serviceButton');
                serviceButton.setAttribute("data-mycode", service.code + '');

                div4.appendChild(serviceButton);
                div.appendChild(div4);

                serviceList.appendChild(div);
            });
            document.querySelectorAll('.serviceButton').forEach(item => {
                item.addEventListener('click', viewInstruments.bind(this, (<HTMLButtonElement>item).dataset.mycode));
            });
        });
    }
}


// View service instruments
const viewInstruments = function (code: string) {

    const filters = {
        institutionType,
        institution: code,
        region,
        dashboard: false,
    };

    // update filters in session storage
    sessionStorage.setItem('filters', JSON.stringify(filters));

    ipcRenderer.send('changeWindow', {
        'name': 'regionalViewInstrument',
        'instrument': '1',
        'filters': filters,
    });
};
