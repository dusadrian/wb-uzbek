/* eslint-disable @typescript-eslint/no-explicit-any */
import { ipcRenderer } from "electron";
import * as path from "path";
import constant from "../../libraries/constants";
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
const sessionFilters = JSON.parse(sessionStorage.getItem('filters'));


const getNumber = (instrument: string, service: any) => {
    if (instrument === '1' || instrument === '2' || instrument === '7') {
        return service.children ?? '-';
    } else if (instrument === '3') {
        return service.employees ?? '-';
    } else if (instrument === '4' || instrument === '6') {
        return '1';
    } else if (instrument === '5' || instrument === '5a') {
        return service.leavers ?? '-';
    } else if (instrument === '8') {
        return service.pf ?? '-';
    }
    return '-';
};

export const institutions = {
    init: async () => {

        ipcRenderer.on('institutions', (event, args) => {
            console.log(args);

            const serviceList = document.getElementById('service_list') as HTMLDivElement;
            if (args.institutions.length === 0) {
                serviceList.innerHTML = '<h1>No institutions available</h1>';
            }

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
                div2.innerHTML = getNumber(sessionFilters.instrument, service);
                div.appendChild(div2);

                const div3 = document.createElement('div');
                div3.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-1', 'flex', 'items-center', 'justify-center');
                div3.innerHTML = args.filled[service.code] ?? '-';
                div.appendChild(div3);

                const div4 = document.createElement('div');
                div4.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-1', 'flex', 'items-center', 'justify-center');
                const serviceButton = document.createElement('button');
                // border border-gray-400 px-2 py-0.5 rounded bg-tableHeader/50 hover:bg-tableHeader
                serviceButton.classList.add('border', 'border-gray-400', 'px-2', 'py-0.5', 'rounded', 'bg-tableHeader/50', 'hover:bg-tableHeader');
                serviceButton.innerHTML = 'select';
                serviceButton.classList.add('serviceButton');
                serviceButton.setAttribute("data-code", service.code + '');
                serviceButton.setAttribute("data-inson", service.inson ?? '' + '');
                serviceButton.setAttribute("data-type", service.type ?? '' + '');

                div4.appendChild(serviceButton);
                div.appendChild(div4);

                serviceList.appendChild(div);
            });
            document.querySelectorAll('.serviceButton').forEach(item => {
                item.addEventListener('click', viewInstruments.bind(this, (<HTMLButtonElement>item).dataset.code, (<HTMLButtonElement>item).dataset.inson, (<HTMLButtonElement>item).dataset.type));
            });
        });
    }
}


// View service instruments
const viewInstruments = function (code: string, inson: string, type: string) {

    let institutionType = sessionFilters.institutionType;
    if (institutionType == '') {
        if (constant.CHILD_CARE.includes(type)) {
            institutionType = '10';
        }
        if (constant.SPECIALIZED.includes(type)) {
            institutionType = '20';
        }
        if (constant.INSON_SERVICE.includes(type) || sessionFilters.instrument == '8') {
            institutionType = '91';
        }
    }    

    const filters = {
        institutionType: institutionType,
        instrument: sessionFilters.instrument,
        institution: inson ? inson : code,
        service_code: inson ? code : (sessionFilters.instrument == '8' ? code : ''),
        region: sessionFilters.region,
        dashboard: false,
    };

    if (sessionFilters.instrument == '1') {
        sessionStorage.setItem('instrument1_service', code);
    }
    if (sessionFilters.instrument == '7') {
        sessionStorage.setItem('instrument7_service', code);
    }

    // update filters in session storage    
    sessionStorage.setItem('filters', JSON.stringify(filters));

    ipcRenderer.send('changeWindow', {
        'name': 'regionalViewInstrument',
        'instrument': '1',
        'filters': filters,
    });
};
