import { ipcRenderer } from "electron"
import { StatusInterface } from "../../interfaces/database";
import * as DI from "../../interfaces/database/index";

const processDashStats = (args: any,) => {
    if (args.instrument1.length > 0) {
        const totalCompletedObj = args.instrument1.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument1.filter((el: StatusInterface) => el.status === 'partial');

        const toBefilled = Number(document.getElementById('t1c11').innerText);

        document.getElementById('t1c12').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c13').innerText = totalPartialObj[0]?.total || 0;


        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c13').innerText = percent + '%';
    } else {
        document.getElementById('t1c12').innerText = '0';
        document.getElementById('t1c13').innerText = '0%';
    }
    // =======
    if (args.instrument2.length > 0) {
        const totalCompletedObj = args.instrument2.filter((el: StatusInterface) => el.status === 'completed');

        const toBefilled = Number(document.getElementById('t1c21').innerText);

        document.getElementById('t1c22').innerText = totalCompletedObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c23').innerText = percent + '%';
    } else {
        document.getElementById('t1c22').innerText = '0';
        document.getElementById('t1c23').innerText = '0%';
    }
    // =======
    if (args.instrument3.length > 0) {
        const totalCompletedObj = args.instrument3.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument3.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c32').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c33').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c33').innerText = percent + '%';
    } else {
        document.getElementById('t1c32').innerText = '0';
        document.getElementById('t1c33').innerText = '0%';
    }
    // =======
    if (args.instrument4.length > 0) {
        const totalCompletedObj = args.instrument4.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument4.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c42').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c43').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c43').innerText = percent + '%';
    } else {
        document.getElementById('t1c42').innerText = '0';
        document.getElementById('t1c43').innerText = '0%';
    }
    // =======
    if (args.instrument5a.length > 0) {
        const totalCompletedObj = args.instrument5a.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument5a.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c52').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c53').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c53').innerText = percent + '%';
    } else {
        document.getElementById('t1c52').innerText = '0';
        document.getElementById('t1c53').innerText = '0%';
    }
    // =======
    if (args.instrument5.length > 0) {
        const totalCompletedObj = args.instrument5.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument5.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c62').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c63').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c63').innerText = percent + '%';
    } else {
        document.getElementById('t1c62').innerText = '0';
        document.getElementById('t1c63').innerText = '0%';
    }
    // =======
    if (args.instrument6.length > 0) {
        const totalCompletedObj = args.instrument6.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument6.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c72').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c73').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c73').innerText = percent + '%';
    } else {
        document.getElementById('t1c72').innerText = '0';
        document.getElementById('t1c73').innerText = '0%';
    }
    // =======
    if (args.instrument7.length > 0) {
        const totalCompletedObj = args.instrument7.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument7.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c82').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c83').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c83').innerText = percent + '%';
    } else {
        document.getElementById('t1c82').innerText = '0';
        document.getElementById('t1c83').innerText = '0%';
    }
    // =======
    if (args.instrument8.length > 0) {
        const totalCompletedObj = args.instrument8.filter((el: StatusInterface) => el.status === 'completed');
        const totalPartialObj = args.instrument8.filter((el: StatusInterface) => el.status === 'partial');
        const toBefilled = Number(document.getElementById('t1c31').innerText);

        document.getElementById('t1c92').innerText = totalCompletedObj[0]?.total || 0;
        document.getElementById('t1c93').innerText = totalPartialObj[0]?.total || 0;

        let percent = '0';
        if (totalCompletedObj.length > 0 && toBefilled) {
            percent = ((Number(totalCompletedObj[0].total) / toBefilled) * 100).toFixed(2);
        }
        document.getElementById('t1c93').innerText = percent + '%';
    } else {
        document.getElementById('t1c92').innerText = '0';
        document.getElementById('t1c93').innerText = '0%';
    }
}

let regionCode = '';
let lang = 'en';
export const regionalCoordinator = {
    init: async () => {


        ipcRenderer.on("appSession", (_event, args) => {
            const userData = args.userData as DI.User;
            lang = args.language;
            regionCode = userData.region_code;
            ipcRenderer.send('getRegionalDashStats', {
                region: regionCode
            });
        })

        ipcRenderer.on("dashStats", (_event, args) => {

            console.log(args);

            processDashStats(args);
        });

        const institutionType = (<HTMLSelectElement>document.getElementById('institutionType'))
        institutionType.addEventListener('change', () => {
            const value = institutionType.options[institutionType.selectedIndex].value;
            ipcRenderer.send('getInstitutionByTypeAndRegion', {
                region: regionCode,
                typeOfInstitution: value ?? null
            });
        });

        const inst = (<HTMLSelectElement>document.getElementById('institution'));
        ipcRenderer.on("institutions", (_event, args) => {
            console.log(args);
            inst.innerHTML = '';
            inst.innerHTML = `<option value="">---</option>`;
            if (args.length > 0) {
                args.forEach((el: DI.Institution) => {
                    if (lang === 'uz') {
                        inst.innerHTML += `<option value="${el.id}">${el.name_uz}</option>`;
                    } else if (lang === 'ru') {
                        inst.innerHTML += `<option value="${el.id}">${el.name_ru}</option>`;
                    } else {
                        inst.innerHTML += `<option value="${el.id}">${el.name_en}</option>`;
                    }
                });
            }
        })

        inst.addEventListener('change', () => {
            if (inst.value !== '') {
                ipcRenderer.send('getRegionalDashStats', {
                    region: regionCode
                });
            }
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
