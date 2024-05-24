/* eslint-disable @typescript-eslint/no-explicit-any */
import { ipcRenderer } from "electron";
import * as DI from "../../interfaces/database";
import { regions, districts, settlements } from "../../libraries/administrative";

const lang = localStorage.getItem("language");
const addObject: DI.AddInsonServiceObjInterface = {
    code: '',
    name_en: '',
    name_uz: '',
    name_ru: '',
    type: '15',
    shorttype: '10',
    address: '',
    region: '',
    district: '',
    settlement: '',
    settlement_type: '',
    capacity: '',
    children: '',
    leavers: '',
    employees: '0',
    inson: '',
    activcode1: null,
    activcode2: null,
    activcode3: null,
    activcode4: null,
    activcode5: null,
}

export const addInson = {
    init: async () => {

        // set inson code
        ipcRenderer.on('inson', (_event, args) => {
            addObject.inson = args.code;
            addObject.region = args.region;

            document.getElementById('institution_name').innerText = args.code + ' | ' + args.name;

            // Districts
            const district_codes = regions[addObject.region].districts;
            const district = document.getElementById('district') as HTMLSelectElement;
            district.innerHTML = '';
            const option = document.createElement('option');
            option.value = '';
            option.innerText = '---';
            district.appendChild(option);
            for (const dist of district_codes) {
                const option = document.createElement('option');
                option.value = dist;
                option.innerText = districts[dist][lang as 'en' | 'uz' | 'ru'];
                district.appendChild(option);
            }

            // add settlements
            const settlement = document.getElementById('settlement') as HTMLSelectElement;
            district.addEventListener('change', () => {
                addObject.district = district.options[district.selectedIndex].value;
                
                if (addObject.district != '') {
                    settlement.innerHTML = '';
                    const option = document.createElement('option');
                    option.value = '';
                    option.innerText = '---';
                    settlement.appendChild(option);
                    const settlement_codes = districts[addObject.district].settlements;
                    for (const set of settlement_codes) {                        
                        const option = document.createElement('option');
                        option.value = set;
                        option.innerText = settlements[set][lang as 'en' | 'uz' | 'ru'];
                        settlement.appendChild(option);
                    }
                } else {
                    // clear settlements
                    settlement.innerHTML = '';
                    const option = document.createElement('option');
                    option.value = '';
                    option.innerText = '---';
                    settlement.appendChild(option);
                }
            });

            settlement.addEventListener('change', () => {
                addObject.settlement = settlement.options[settlement.selectedIndex].value;
                addObject.settlement_type = settlements[addObject.settlement].type;
            });
        });




        // save data
        document.getElementById('saveForm').addEventListener('click', async () => {
            
            addObject.code = (<HTMLSelectElement>document.getElementById('code')).value.trim();

            // saved based on current user language
            if (lang === 'uz') {
                addObject.name_uz = (<HTMLInputElement>document.getElementById('name')).value.trim();
            } else if (lang === 'ru') {
                addObject.name_ru = (<HTMLInputElement>document.getElementById('name')).value.trim();
            } else {
                addObject.name_en = (<HTMLInputElement>document.getElementById('name')).value.trim();
            }

            addObject.address = (<HTMLSelectElement>document.getElementById('address')).value.trim();
            addObject.district = (<HTMLSelectElement>document.getElementById('district')).value.trim();
            addObject.settlement = (<HTMLSelectElement>document.getElementById('settlement')).value.trim();


            addObject.capacity = (<HTMLInputElement>document.getElementById('capacity')).value.trim();
            addObject.children = (<HTMLInputElement>document.getElementById('children')).value.trim();
            addObject.leavers = (<HTMLInputElement>document.getElementById('leavers')).value.trim();


            if(addObject.code === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('code').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('code').focus();
                return;
            }

            if(addObject.name_en === '' && addObject.name_uz === '' && addObject.name_ru === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('name').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('name').focus();
                return;
            }

            if(addObject.address === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('address').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('address').focus();
                return;
            }
            if(addObject.district === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('district').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('district').focus();
                return;
            }
            if(addObject.settlement === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('settlement').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('settlement').focus();
                return;
            }
            if(addObject.capacity == '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('capacity').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('capacity').focus();
                return;
            }
            if(addObject.children === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('children').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('children').focus();
                return;
            }
            if(addObject.leavers === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                // scroll into view auth_code
                document.getElementById('leavers').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                document.getElementById('leavers').focus();
                return;
            }



            ipcRenderer.send('saveInsonService', addObject);
        })


    }
}

