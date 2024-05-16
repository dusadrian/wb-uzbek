import { INSON } from './../../interfaces/database/index';
import { ipcRenderer } from "electron"
import { StatusInterface } from "../../interfaces/database";
import * as DI from "../../interfaces/database/index";
import constant from "../../libraries/constants";

type toBeFilledType = {
    instrument1: number;
    instrument2: number;
    instrument3: number;
    instrument4: number;
    instrument5: number;
    instrument5a: number;
    instrument6: number;
    instrument7: number;
    instrument8: number;
    instrument9: number;
}

type instrumentsType = {
    instrument1: StatusInterface[];
    instrument2: StatusInterface[];
    instrument3: StatusInterface[];
    instrument4: StatusInterface[];
    instrument5: StatusInterface[];
    instrument5a: StatusInterface[];
    instrument6: StatusInterface[];
    instrument7: StatusInterface[];
    instrument8: StatusInterface[];
    instrument9: StatusInterface[];
}

let user: DI.User;
let serviceType: string = null;
let regionCode = '';
let lang = 'en';
export const regionalCoordinator = {
    init: async () => {

        ipcRenderer.on("appSession", (_event, args) => {
            user = args.userData as DI.User;
            lang = args.language;
            regionCode = user.region_code;
            ipcRenderer.send('getRegionalDashStats', {
                region: regionCode
            });
        })

        ipcRenderer.on("dashStats", (_event, args) => {

            console.log(args);

            processDashStats(args.instruments, args.toBeFilled);
        });

        const institutionType = (<HTMLSelectElement>document.getElementById('institutionType'))
        institutionType.addEventListener('change', () => {
            const value = institutionType.options[institutionType.selectedIndex].value;
            serviceType = value ?? null;
            ipcRenderer.send('getInstitutionByTypeAndRegion', {
                region: regionCode,
                typeOfInstitution: value ?? null,
            });
            // show data for this type of institution
            ipcRenderer.send('getRegionalDashStats', {
                region: regionCode,
                typeOfInstitution: value,
                institution: null
            });
        });


        const inst = (<HTMLSelectElement>document.getElementById('institution'));
        // fill institution list
        ipcRenderer.on("institutions", (_event, args) => {
            inst.innerHTML = '';
            inst.innerHTML = `<option value="">---</option>`;
            if (args.length > 0) {
                args.forEach((el: DI.Institution) => {
                    if (lang === 'uz') {
                        inst.innerHTML += `<option value="${el.code}">${el.name_uz}</option>`;
                    } else if (lang === 'ru') {
                        inst.innerHTML += `<option value="${el.code}">${el.name_ru}</option>`;
                    } else {
                        inst.innerHTML += `<option value="${el.code}">${el.name_en}</option>`;
                    }
                });
            }
        })

        inst.addEventListener('change', () => {
            const value = inst.options[inst.selectedIndex].value;
            // show data for this institution
            ipcRenderer.send('getRegionalDashStats', {
                region: regionCode,
                typeOfInstitution: institutionType.options[institutionType.selectedIndex].value,
                institution: value
            });
        });

        // Export data
        (<HTMLButtonElement>document.getElementById('exportData')).addEventListener('click', () => {
            ipcRenderer.send('exportData', {
                'userRoleCode': user.role_code,
                'userServiceTypeCode': user.service_type_code,
            });
        });
        // Import data
        (<HTMLButtonElement>document.getElementById('importData')).addEventListener('click', () => {
            ipcRenderer.send('importData', {
                'userRoleCode': user.role_code,
                'userServiceTypeCode': user.service_type_code,
            });
        });

        // (<HTMLButtonElement>document.getElementById('sec3')).addEventListener('click', () => {
        //     ipcRenderer.send('changeWindow', {
        //         'name': 'plan_di1/03_section_3'
        //     });
        // });
        // ipcRenderer.on("instrumentDataReady", (_event, args) => {

        //     console.log(args);

        //     getStatus(args.sections.section1, 'section1', 4);
        //     getStatus(args.sections.section2, 'section2', 6);
        //     getStatus(args.sections.section3, 'section3', 4);
        // })
    }
}

const processDashStats = (instruments: instrumentsType, toBeFilled: toBeFilledType) => {

    // I1
    let i1total = toBeFilled.instrument1;
    if (serviceType && (serviceType != '10' && serviceType != '91')) {
        i1total = 0;
    }
    if (instruments.instrument1.length > 0) {
        const totalCompletedObj = instruments.instrument1.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c11').innerText = String(i1total);
        document.getElementById('t1c12').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i1total) {
            percent = ((Number(totalCompletedObj[0].total) / i1total) * 100).toFixed(2);
        }
        document.getElementById('t1c13').innerText = percent + '%';
    } else {
        document.getElementById('t1c11').innerText = String(i1total);
        document.getElementById('t1c12').innerText = '0';
        document.getElementById('t1c13').innerText = '0%';
    }

    // I2
    let i2total = toBeFilled.instrument2;
    if (serviceType && serviceType != '20') {
        i2total = 0;
    }
    if (instruments.instrument2.length > 0) {
        const totalCompletedObj = instruments.instrument2.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c21').innerText = String(i2total);
        document.getElementById('t1c22').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i2total) {
            percent = ((Number(totalCompletedObj[0].total) / i2total) * 100).toFixed(2);
        }
        document.getElementById('t1c23').innerText = percent + '%';
    } else {
        document.getElementById('t1c21').innerText = String(i2total);
        document.getElementById('t1c22').innerText = '0';
        document.getElementById('t1c23').innerText = '0%';
    }

    // I3
    let i3total = toBeFilled.instrument3;
    if (serviceType && (serviceType != '10' && serviceType != '20')) {
        i3total = 0;
    }
    if (instruments.instrument3.length > 0) {
        const totalCompletedObj = instruments.instrument3.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c31').innerText = String(i3total);
        document.getElementById('t1c32').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i3total) {
            percent = ((Number(totalCompletedObj[0].total) / i3total) * 100).toFixed(2);
        }
        document.getElementById('t1c33').innerText = percent + '%';
    } else {
        document.getElementById('t1c31').innerText = String(i3total);
        document.getElementById('t1c32').innerText = '0';
        document.getElementById('t1c33').innerText = '0%';
    }

    // I4
    let i4total = toBeFilled.instrument4;
    if (serviceType && (serviceType != '10' && serviceType != '20')) {
        i4total = 0;
    }
    if (instruments.instrument4.length > 0) {
        const totalCompletedObj = instruments.instrument4.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c41').innerText = String(i4total);
        document.getElementById('t1c42').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i4total) {
            percent = ((Number(totalCompletedObj[0].total) / i4total) * 100).toFixed(2);
        }
        document.getElementById('t1c43').innerText = percent + '%';
    } else {
        document.getElementById('t1c41').innerText = String(i4total);
        document.getElementById('t1c42').innerText = '0';
        document.getElementById('t1c43').innerText = '0%';
    }

    // I5a
    if (instruments.instrument5a.length > 0) {
        const totalCompletedObj = instruments.instrument5a.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c51').innerText = String(toBeFilled.instrument5a);
        document.getElementById('t1c52').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBeFilled.instrument5a) {
            percent = ((Number(totalCompletedObj[0].total) / toBeFilled.instrument5a) * 100).toFixed(2);
        }
        document.getElementById('t1c53').innerText = percent + '%';
    } else {
        document.getElementById('t1c51').innerText = String(toBeFilled.instrument5a);
        document.getElementById('t1c52').innerText = '0';
        document.getElementById('t1c53').innerText = '0%';
    }

    // I5
    let i5total = toBeFilled.instrument5;
    if (serviceType && serviceType != '91') {
        i5total = 0;
    }
    if (instruments.instrument5.length > 0) {
        const totalCompletedObj = instruments.instrument5.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c61').innerText = String(i5total);
        document.getElementById('t1c62').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i5total) {
            percent = ((Number(totalCompletedObj[0].total) / i5total) * 100).toFixed(2);
        }
        document.getElementById('t1c63').innerText = percent + '%';
    } else {
        document.getElementById('t1c61').innerText = String(i5total);
        document.getElementById('t1c62').innerText = '0';
        document.getElementById('t1c63').innerText = '0%';
    }

    // I6
    let i6total = toBeFilled.instrument6;
    if (serviceType && (serviceType != '10' && serviceType != '20')) {
        i6total = 0;
    }
    if (instruments.instrument6.length > 0) {
        const totalCompletedObj = instruments.instrument6.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c71').innerText = String(i6total);
        document.getElementById('t1c72').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i6total) {
            percent = ((Number(totalCompletedObj[0].total) / i6total) * 100).toFixed(2);
        }
        document.getElementById('t1c73').innerText = percent + '%';
    } else {
        document.getElementById('t1c71').innerText = String(i6total);
        document.getElementById('t1c72').innerText = '0';
        document.getElementById('t1c73').innerText = '0%';
    }

    // I7
    let i7total = toBeFilled.instrument7;
    if (serviceType && serviceType != '91') {
        i7total = 0;
    }
    if (instruments.instrument7.length > 0) {
        const totalCompletedObj = instruments.instrument7.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c81').innerText = String(i7total);
        document.getElementById('t1c82').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i7total) {
            percent = ((Number(totalCompletedObj[0].total) / i7total) * 100).toFixed(2);
        }
        document.getElementById('t1c83').innerText = percent + '%';
    } else {
        document.getElementById('t1c81').innerText = String(i7total);
        document.getElementById('t1c82').innerText = '0';
        document.getElementById('t1c83').innerText = '0%';
    }

    // I8
    let i8total = toBeFilled.instrument8;
    if (serviceType && serviceType != '91') {
        i8total = 0;
    }
    if (instruments.instrument8.length > 0) {
        const totalCompletedObj = instruments.instrument8.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c91').innerText = String(i8total);
        document.getElementById('t1c92').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i8total) {
            percent = ((Number(totalCompletedObj[0].total) / i8total) * 100).toFixed(2);
        }
        document.getElementById('t1c93').innerText = percent + '%';
    } else {
        document.getElementById('t1c91').innerText = String(i8total);
        document.getElementById('t1c92').innerText = '0';
        document.getElementById('t1c93').innerText = '0%';
    }

    // I9
    let i9total = toBeFilled.instrument9;
    if (serviceType) {
        i9total = 0;
    }
    if (instruments.instrument9.length > 0) {
        const totalCompletedObj = instruments.instrument9.filter((el: StatusInterface) => el.status === 'completed');

        document.getElementById('t1c101').innerText = String(i9total);
        document.getElementById('t1c102').innerText = String(totalCompletedObj[0]?.total || 0);

        let percent = '0';
        if (totalCompletedObj.length > 0 && i9total) {
            percent = ((Number(totalCompletedObj[0].total) / i9total) * 100).toFixed(2);
        }
        document.getElementById('t1c103').innerText = percent + '%';
    } else {
        document.getElementById('t1c101').innerText = String(i9total);
        document.getElementById('t1c102').innerText = '0';
        document.getElementById('t1c103').innerText = '0%';
    }
}
