import { ipcRenderer } from "electron";

export const institutionDetails = {
    init: async () => {


        let institutionId: string = null;
        let institutionUUID: string = null;

        ipcRenderer.on('institutionDetails', (_event, args) => {
            console.log(args);
            institutionId = args.id
            institutionUUID = args.uuid;
            (document.getElementById('institution_name') as HTMLInputElement).value = args.name;
            (document.getElementById('institution_code') as HTMLInputElement).value = args.code;
            (document.getElementById('institution_address') as HTMLInputElement).value = args.address;
            (document.getElementById('institution_region') as HTMLInputElement).value = args.region;
            (document.getElementById('institution_district') as HTMLInputElement).value = args.district;
            setSelectValue('institution_type', args.type);
            (document.getElementById('no_children') as HTMLInputElement).value = args.staffCount;
            (document.getElementById('no_staff') as HTMLInputElement).value = args.childrenCount;
            (document.getElementById('no_young_left') as HTMLInputElement).value = args.youngAdultCount;

        });

        // uzbekistan administrative teritorial unit code length is 12
        const atuCode = (<HTMLButtonElement>document.getElementById('institution_atu_code'));
        if (atuCode !== null) {
            atuCode.addEventListener('blur', () => {
                if (atuCode.value.length !== 12) {
                    ipcRenderer.send('showDialogMessage', {
                        type: 'warning',
                        message: 'ATU code must be 12 characters long'
                    });
                } else {
                    ipcRenderer.send('getRegionDistrict', {
                        'atuCode': atuCode.value
                    });
                }
            });
        }

        ipcRenderer.on('regionDistrict', (_event, args) => {
            console.log(args);
            (document.getElementById('institution_region') as HTMLInputElement).value = args.region;
            (document.getElementById('institution_district') as HTMLInputElement).value = args.district;
        });


        // ipcRenderer.send('institutionDetails', {
        //     'name': 'institutionDetails'
        // });
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
                'id': institutionId,
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


