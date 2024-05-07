import { ipcRenderer } from "electron";

export const institutionDetails = {
    init: async () => {

        let institution_id: string = null;
        let institutionUUID: string = null;

        ipcRenderer.on('institutionDetails', (_event, args) => {
            institution_id = args.id
            institutionUUID = args.uuid;
            (document.getElementById('institution_name') as HTMLInputElement).value = args.name;
            (document.getElementById('institution_code') as HTMLInputElement).value = args.code;
            (document.getElementById('institution_address') as HTMLInputElement).value = args.address;
            (document.getElementById('institution_region') as HTMLInputElement).value = args.region;
            (document.getElementById('institution_district') as HTMLInputElement).value = args.district;
            setSelectValue('institution_type', args.type);
            (document.getElementById('capacity') as HTMLInputElement).value = args.capacity;
            (document.getElementById('children') as HTMLInputElement).value = args.children;
            (document.getElementById('employees') as HTMLInputElement).value = args.employees;
            (document.getElementById('leavers') as HTMLInputElement).value = args.leavers;

        });

        (<HTMLButtonElement>document.getElementById('saveForm')).addEventListener('click', () => {

            // validate all data
            if ((document.getElementById('institution_name') as HTMLInputElement).value === '' ||
                (document.getElementById('institution_code') as HTMLInputElement).value === '' ||
                (document.getElementById('institution_address') as HTMLInputElement).value === '' ||
                (document.getElementById('institution_atu_code') as HTMLInputElement).value === '' ||
                (document.getElementById('institution_type') as HTMLSelectElement).value === '' ||
                (document.getElementById('no_children') as HTMLInputElement).value === '' ||
                (document.getElementById('no_staff') as HTMLInputElement).value === '' ||
                (document.getElementById('no_young_left') as HTMLInputElement).value === '') {
                ipcRenderer.send('showDialogMessage', {
                    type: 'warning',
                    message: 'Please fill all fields'
                });
                return;
            }

            ipcRenderer.send('saveInstitutionDetails', {
                'id': institution_id,
                'uuid': institutionUUID,
                'name': (document.getElementById('institution_name') as HTMLInputElement).value,
                'code': (document.getElementById('institution_code') as HTMLInputElement).value,
                'address': (document.getElementById('institution_address') as HTMLInputElement).value,
                'atuCode': (document.getElementById('institution_atu_code') as HTMLInputElement).value,
                'region': (document.getElementById('institution_region') as HTMLInputElement).value,
                'district': (document.getElementById('institution_district') as HTMLInputElement).value,
                'type': (document.getElementById('institution_type') as HTMLSelectElement).value,
                'staffCount': (document.getElementById('no_children') as HTMLInputElement).value,
                'childrenCount': (document.getElementById('no_staff') as HTMLInputElement).value,
                'youngAdultCount': (document.getElementById('no_young_left') as HTMLInputElement).value,
            });
        });
    }
}

const setSelectValue = (selectId: string, value: string) => {
    const select = document.getElementById(selectId) as HTMLSelectElement;
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === value) {
            select.selectedIndex = i;
            break;
        }
    }
}


