/* eslint-disable @typescript-eslint/no-explicit-any */
import { ipcRenderer } from "electron";
import * as DI from "../../interfaces/database";
import { KeyString, KeyStringNumber, regions, districts, settlements } from "../../libraries/administrative";

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
    capacity: 0,
    children: 0,
    leavers: 0,
    employees: 0,
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
            console.log(args);
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

            // const settlement = document.getElementById('settlement');

            // const set_codes = districts[selectedDistrict].settlements;





            // add settlements
            const settlement = document.getElementById('settlement');
            district.addEventListener('change', () => {
                if (district.options[district.selectedIndex].value === '') {
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
                settlement.innerHTML = '';
                const option = document.createElement('option');
                option.value = '';

            });
        });




        // save data
        document.getElementById('saveForm').addEventListener('click', async () => {

            // saved based on current user language
            if (lang === 'uz') {
                addObject.name_uz = (<HTMLInputElement>document.getElementById('name')).value;
            } else if (lang === 'ru') {
                addObject.name_ru = (<HTMLInputElement>document.getElementById('name')).value;
            } else {
                addObject.name_en = (<HTMLInputElement>document.getElementById('name')).value;
            }

            addObject.address = (<HTMLSelectElement>document.getElementById('address')).value;
            addObject.district = (<HTMLSelectElement>document.getElementById('district')).value;
            addObject.settlement = (<HTMLSelectElement>document.getElementById('settlement')).value;

            addObject.settlement_type = (<HTMLInputElement>document.getElementById('settlement_type')).value;

            addObject.capacity = parseInt((<HTMLInputElement>document.getElementById('capacity')).value);
            addObject.children = parseInt((<HTMLInputElement>document.getElementById('children')).value);
            addObject.leavers = parseInt((<HTMLInputElement>document.getElementById('leavers')).value);
            addObject.employees = parseInt((<HTMLInputElement>document.getElementById('employees')).value);

            ipcRenderer.send('saveInsonService', addObject);
        })


    }
}

