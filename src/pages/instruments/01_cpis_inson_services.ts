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

const appSession = JSON.parse(sessionStorage.getItem('appSession'));

export const cpis_services = {
    init: async () => {

        ipcRenderer.on('services', (event, args) => {
            
            const serviceList = document.getElementById('service_list') as HTMLDivElement;
            if(args.services.length === 0) {
                serviceList.innerHTML = '<h1>No services available</h1>';
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            args.services.forEach((service: any) => {
                const div = document.createElement('div');
                // grid-cols-7 w-full mt-0.5 px-5 gap-0.5
                div.classList.add('grid', 'grid-cols-5', 'w-full' ,'mt-0.5', 'gap-0.5');
                const div1 = document.createElement('div');
                // bg-tableRow text-gray-600 px-3 py-1.5 font-medium col-span-2 flex items-center
                div1.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-2', 'flex', 'items-center', 'col-span-2');
                
                let serviceName = service.name_en;
                if(appSession.language === 'uz'){
                    serviceName = service.name_uz;
                } else if(appSession.language === 'ru'){
                    serviceName = service.name_ru;
                }
                
                div1.innerHTML = serviceName;
                div.appendChild(div1);
                
                const div2 = document.createElement('div');
                div2.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-1', 'flex', 'items-center', 'justify-center');
                div2.innerHTML = service.children;
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
                serviceButton.setAttribute("data-mycode", service.code + '');
                
                div4.appendChild(serviceButton);
                div.appendChild(div4);

                serviceList.appendChild(div);
            });

            document.querySelectorAll('.serviceButton').forEach(item => {
                item.addEventListener('click', goNext.bind(this, (<HTMLButtonElement>item).dataset.mycode));
            });
        });
    }
}

// sterge eveniment
const goNext = function (code: string) {
    
    sessionStorage.setItem('instrument1_service', code);
    
    ipcRenderer.send('goToCPISList', {
        'code': code,
    });
};