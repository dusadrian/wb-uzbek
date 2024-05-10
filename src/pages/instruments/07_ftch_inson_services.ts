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

export const ftch_services = {
    init: async () => {

        ipcRenderer.on('services', (event, services) => {
            console.log(services);

            const serviceList = document.getElementById('service_list') as HTMLDivElement;
            if(services.length === 0) {
                serviceList.innerHTML = '<h1>No services available</h1>';
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            services.forEach((service: any) => {
                const div = document.createElement('div');
                // grid-cols-7 w-full mt-0.5 px-5 gap-0.5
                div.classList.add('grid', 'grid-cols-4', 'w-full' ,'mt-0.5', 'gap-0.5');
                const div1 = document.createElement('div');
                // bg-tableRow text-gray-600 px-3 py-1.5 font-medium col-span-2 flex items-center
                div1.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-2', 'flex', 'items-center', 'col-span-2');
                div1.innerHTML = service.name;
                div.appendChild(div1);
                
                const div2 = document.createElement('div');
                div2.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-1', 'flex', 'items-center', 'justify-center');
                div2.innerHTML = service.children;
                div.appendChild(div2);
                
                const div3 = document.createElement('div');
                div3.classList.add('bg-tableRow', 'text-gray-600', 'px-3', 'py-1.5', 'font-medium', 'col-span-1', 'flex', 'items-center', 'justify-center');
                const serviceButton = document.createElement('button');
                // border border-gray-400 px-2 py-0.5 rounded bg-tableHeader/50 hover:bg-tableHeader
                serviceButton.classList.add('border', 'border-gray-400', 'px-2', 'py-0.5', 'rounded', 'bg-tableHeader/50', 'hover:bg-tableHeader');
                serviceButton.innerHTML = 'select';
                serviceButton.classList.add('serviceButton');
                serviceButton.setAttribute("data-mycode", service.code + '');
                
                div3.appendChild(serviceButton);
                div.appendChild(div3);

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
    
    sessionStorage.setItem('instrument7_service', code);
    
    ipcRenderer.send('goToFTCHList', {
        'code': code,
    });
};