import { ipcRenderer } from "electron";
import { showByPermissions } from "../../libraries/showBasedOnPermissions";


declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        require: any;
    }
}
const $ = window.require('jquery');
const dt = window.require('datatables.net-dt');
dt(window, $);

export const cpis_services = {
    init: async () => {

        ipcRenderer.on('services', (event, services) => {
            console.log(services);

            const serviceList = document.getElementById('service_list') as HTMLDivElement;
            if(services.length === 0) {
                serviceList.innerHTML = '<h1>No services available</h1>';
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            services.forEach((service: any) => {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                td1.innerHTML = service.name;
                const td2 = document.createElement('td');
                td2.innerHTML = service.children;
                tr.appendChild(tr);
                const td3 = document.createElement('td');
                const serviceButton = document.createElement('button');
                serviceButton.classList.add('p-2', 'bg-gray-200', 'block', 'my-2', 'rounded-md', 'hover:bg-gray-300', 'focus:outline-none', 'focus:ring-2', 'focus:ring-gray-500', 'focus:ring-offset-2', 'focus:ring-offset-gray-200', 'w-full');
                serviceButton.innerHTML = service.name + ' (' + service.children + ')';
                serviceButton.classList.add('serviceButton');
                serviceButton.setAttribute("data-mycode", service.code + '');
                tr.appendChild(td3);
                serviceList.appendChild();
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