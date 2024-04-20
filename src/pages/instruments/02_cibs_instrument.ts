import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./02_cibs_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { administrative, regions, districts, settlements, settlement_types } from "../../libraries/administrative";

import * as en from "../../locales/en.json";
import * as uz from "../../locales/uz.json";
import * as ru from "../../locales/ru.json";
const locales: { [key: string]: typeof en | typeof uz | typeof ru} = {
    'en': en,
    'uz': uz,
    'ru': ru
}

const lang = localStorage.getItem("language");

const general_dates = [
    'data', 'lk3', 'cm3', 'ct3', 'cg1c', 'cg3b', 'sa1', 'cmgt1a'
];

const sh3_start_dates = [
    'sh3_s1a', 'sh3_s2a', 'sh3_s3a', 'sh3_s4a', 'sh3_s5a', 'sh3_s6a', 'sh3_s7a', 'sh3_s8a', 'sh3_s9a', 'sh3_s10a', 'sh3_csa'
];

const sh3_end_dates = [
    'sh3_s1d', 'sh3_s2d', 'sh3_s3d', 'sh3_s4d', 'sh3_s5d', 'sh3_s6d', 'sh3_s7d', 'sh3_s8d', 'sh3_s9d', 'sh3_s10d', 'sh3_csd'
];

let institutionDetails;

const regElements = ["lk14b", "cm3b", "cm10c", "cm11c", "ct3b", "ct10c", "ct11c", "cg10c", "cg11c", "sa3a"];
const disElements = ["lk14c", "cm3c", "cm10d", "cm11d", "ct3c", "ct10d", "ct11d", "cg10d", "cg11d", "sa3b"];
const setElements = ["lk14d", "cm3d", "cm10e", "cm11e", "ct3d", "ct10e", "ct11e", "cg10e", "cg11e", "sa3c"];
const typeElements = ["lk14e", "cm3e", "cm10f", "cm11f", "ct3e", "ct10f", "ct11f", "cg10f", "cg11f", "sa3d"];

export const instrument2 = {
    init: async () => {

        const appSessionStorage = sessionStorage.getItem('appSession');
        if (appSessionStorage !== null) {
            const parsed = JSON.parse(appSessionStorage);
            institutionDetails = parsed.institutionDetails;
            console.log(institutionDetails);
            // prepopulate the institution details
        }

        const flatpickrConfig: {
            enableTime: boolean;
            dateFormat: string;
            maxDate: string;
            locale?: typeof Russian | typeof UzbekLatin
        } = {
            enableTime: false,
            dateFormat: "d/m/Y",
            maxDate: "30/04/2024"
        }

        if (lang == "uz") {
            flatpickrConfig.locale = UzbekLatin;
        }

        if (lang == "ru") {
            flatpickrConfig.locale = Russian;
        }

        const date_elements = [...general_dates, ...sh3_start_dates, ...sh3_end_dates];

        const flatpickr_elements = date_elements.map((el) => {
            const element = document.getElementById(el) as HTMLInputElement;
            let config;
            if (el == "data") {
                config = { ...flatpickrConfig, minDate: "01/04/2024" };
                config.maxDate = "31/12/2025";
            } else if (el == "cm3") {
                config = { ...flatpickrConfig, minDate: "01/01/1950" };
                config.maxDate = "31/12/2023";
            } else if (el == "ct3" || el == "cg3b") {
                config = { ...flatpickrConfig, minDate: "01/01/1930" };
                config.maxDate = "31/12/2023";
            } else if (el == "cmgt1a") {
                config = { ...flatpickrConfig, minDate: "01/01/2000" };
                config.dateFormat = "m/Y";
            } else if (el == "lk3" || el == "cg1c") {
                config = { ...flatpickrConfig, minDate: "01/01/1990" };
            } else {
                config = { ...flatpickrConfig, minDate: "01/01/2000" };
            }
            return flatpickr(element, config);
        });

        const today = new Date();
        flatpickr_elements[date_elements.indexOf('data')].setDate(today);
        util.trigger("data", "change");

        // TODO: de modificat activatorii pentru district si localitate, implicit -7
        // iar la localitate, daca districtul nu are localitati, sa ramana dezactivat


        const reg_codes = Object.keys(administrative);
        for (let x = 0; x < regElements.length; x++) {
            const reg_el = util.htmlElement(regElements[x]);

            reg_el.innerHTML = "";
            const option = document.createElement("option");
            option.value = "-9";
            option.text = locales[lang]['t_choose'];
            reg_el.appendChild(option);

            for (let i = 0; i < reg_codes.length; i++) {
                const option = document.createElement("option");
                option.value = reg_codes[i];
                const reg = regions[reg_codes[i]];
                option.text = reg[lang as keyof typeof reg];
                reg_el.appendChild(option);
            }

            const dis_el = util.htmlElement(disElements[x]);
            const set_el = util.htmlElement(setElements[x]);

            util.listen(regElements[x], "change", function () {
                const selectedRegion = reg_el.value;
                if (selectedRegion != "-9") {
                    const regdist = administrative[selectedRegion].districts;
                    const dis_codes = Object.keys(regdist);

                    const option = document.createElement("option");
                    option.value = "-9";
                    option.text = locales[lang]['t_choose'];
                    dis_el.innerHTML = "";
                    dis_el.appendChild(option);

                    const option2 = document.createElement("option");
                    option2.value = "-9";
                    option2.text = locales[lang]['t_choose'];
                    set_el.innerHTML = "";
                    set_el.appendChild(option2);

                    for (let i = 0; i < dis_codes.length; i++) {
                        const option = document.createElement("option");
                        option.value = dis_codes[i];
                        const dis = districts[dis_codes[i]];
                        option.text = dis[lang as keyof typeof dis];
                        dis_el.appendChild(option);
                    }
                }
            })

            util.listen(disElements[x], "change", function () {
                const selectedRegion = reg_el.value;
                const selectedDistrict = dis_el.value;
                if (selectedRegion != "-9" && selectedDistrict != "-9") {
                    const regdisset = administrative[selectedRegion].districts[selectedDistrict].settlements;
                    if (regdisset) {
                        const settlements = Object.keys(regdisset);
                        set_el.innerHTML = "";
                        const option = document.createElement("option");
                        option.value = "-9";
                        option.text = locales[lang]['t_choose'];
                        set_el.appendChild(option);

                        for (let i = 0; i < settlements.length; i++) {
                            const option = document.createElement("option");
                            option.value = settlements[i];
                            option.text = (regdisset[settlements[i]] as { [key: string]: string })[lang];
                            set_el.appendChild(option);
                        }
                    }
                    else {
                        // dezactiveaza select-ul pentru settlement
                    }
                }
            })
        }

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                    const ireg = regElements.indexOf(item.variable);
                    if (ireg > -1) {
                        const reg_el = document.getElementById(regElements[ireg]);
                        reg_el.dispatchEvent(new Event("change"));
                    }
                    const idis = disElements.indexOf(item.variable);
                    if (idis > -1) {
                        const disel = document.getElementById(disElements[idis]);
                        disel.dispatchEvent(new Event("change"));
                    }

                    // seteaza valorile pentru elementele de tip data
                    for (let i = 0; i < date_elements.length; i++) {
                        if (item.variable == date_elements[i]) {
                            if (item.value != "-9" && item.value != "-7") {
                                flatpickr_elements[i].setDate(item.value);
                            }
                        }
                    }
                }
            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
            document.getElementById("omr1").focus();
            document.getElementById("omr1").blur();
        });
    }
}

// const lk22_2 = ['lk22_2_1', 'lk22_2_2', 'lk22_2_3', 'lk22_2_4', 'lk22_2_5'];

const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.pin.value == '-9' || _questions.lk1a.value == '-9' || _questions.lk1b.value == '-9' || _questions.lk1c.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: PIN, LK1a, LK1b, LK1c!" });
        const elPin = document.getElementById("pin");
        elPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            elPin.focus();
        }, 1000);
        return false;
    }

    // if (_questions.lk22_1.value == "1" && !check_lk22_2()) {
    //     return false;
    // }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "cibs";
    ipcRenderer.send("saveInstrument", obj);
}


// for (let i = 0; i < setElements.length; i++) {
//     util.listen(setElements[i], "change", () => {
//         const index = setElements.indexOf(setElements[i]);
//         const value = util.htmlElement(setElements[i]).value;
//         const setype = settlement_types[settlements[value].type];
//         util.setValue(typeElements[index], setype[lang as keyof typeof setype]);
//         util.trigger(typeElements[index], "change");
//     })
// }


// function check_lk22_2(): boolean {
//     const lk22_2_1 = util.htmlElement("lk22_2_1");
//     const lk22_2_7_1 = util.htmlElement("lk22_2_7-1");
//     const lk22_2_7_0 = util.htmlElement("lk22_2_7-0");

//     const suma = util.makeSumFromElements(lk22_2);

//     const error = locales[lang]['At_least_one_disability'];
//     errorHandler.removeArrayError(lk22_2, error);

//     if (suma == 0) {
//         errorHandler.addArrayError(lk22_2, error);
//         lk22_2_1.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
//     }
//     else {
//         if (suma > 1) {
//             lk22_2_7_1.checked = true;
//             lk22_2_7_0.checked = false;
//         } else {
//             lk22_2_7_1.checked = false;
//             lk22_2_7_0.checked = true;
//         }

//         instrument.questions["lk22_2_7"].value = Number(suma > 1).toString();
//     }

//     return(suma > 0);
// }

// util.listenArray(lk22_2, "myChange", check_lk22_2);


// util.radioIDs("cm1a").forEach((elem) => {
//     util.listen(elem, "myChange", () => {
//         const val = util.htmlElement(elem).value;

//         if (val == "1") {
//             const cm1c1 = util.htmlElement("cm1c-1-disabled");
//             if (cm1c1) {
//                 cm1c1.removeAttribute("disabled");
//                 cm1c1.id = "cm1c-1";
//             }
//         }
//         else if (val == "2") {
//             const cm1c1 = util.htmlElement("cm1c-1");
//             cm1c1.setAttribute("disabled", "true");
//             if (cm1c1.checked) {
//                 cm1c1.checked = false;
//                 instrument.questions["cm1c"].value = "-9";
//             }

//             cm1c1.id = "cm1c-1-disabled";
//         }
//         else {
//             const cm1c1 = util.htmlElement("cm1c-1");
//             const cm1c2 = util.htmlElement("cm1c-2");
//             const cm1c3 = util.htmlElement("cm1c-3");
//             cm1c1.checked = false;
//             cm1c2.checked = false;
//             cm1c3.checked = true;
//             instrument.questions["cm1c"].value = "3";
//         }
//     });
// });


// util.radioIDs("ct1a").forEach((elem) => {
//     util.listen(elem, "myChange", () => {
//         const val = util.htmlElement(elem).value;

//         if (val == "1") {
//             const ct1c1 = util.htmlElement("ct1c-1-disabled");
//             if (ct1c1) {
//                 ct1c1.removeAttribute("disabled");
//                 ct1c1.id = "ct1c-1";
//             }
//         }
//         else if (val == "2" || val == "4") {
//             const ct1c1 = util.htmlElement("ct1c-1");
//             ct1c1.setAttribute("disabled", "true");
//             if (ct1c1.checked) {
//                 ct1c1.checked = false;
//                 instrument.questions["ct1c"].value = "-9";
//             }

//             ct1c1.id = "ct1c-1-disabled";
//         }
//         else {
//             const ct1c1 = util.htmlElement("ct1c-1");
//             const ct1c2 = util.htmlElement("ct1c-2");
//             const ct1c3 = util.htmlElement("ct1c-3");
//             ct1c1.checked = false;
//             ct1c2.checked = false;
//             ct1c3.checked = true;
//             instrument.questions["ct1c"].value = "3";
//         }
//     });
// });


// util.listen("lk3", "myChange", () => {
//     if (instrument.questions.lk3.value != "-9") {
//         const age = util.diffDates(
//             util.standardDate(instrument.questions.lk3.value),
//             new Date(2024, 5, 1)
//         )

//         util.setValue("lk13a", age.toString());
//         util.trigger("lk13a", "change");

//         util.trigger("sa1", "myChange");
//     }
// });


// util.listen("sa1", "myChange", () => {
//     if (instrument.questions.lk3.value != "-9" && instrument.questions.sa1.value != "-9") {
//         const age = util.diffDates(
//             util.standardDate(instrument.questions.lk3.value),
//             util.standardDate(instrument.questions.sa1.value)
//         )

//         if (!Number.isNaN(age)) {
//             util.setValue("sa1a", age.toString());
//             util.trigger("sa1a", "change");
//         }
//     }
// });

// util.listen("sa1a", "myChange", () => {
//     const qeduc21 = util.htmlElement('qeduc2-1');
//     const qeduc22 = util.htmlElement('qeduc2-2');
//     const qeduc27disabled = util.htmlElement("qeduc2-7-disabled");
//     const age = Number(instrument.questions["sa1a"].value);

//     if (age < 7) {
//         qeduc21.checked = false;
//         qeduc22.checked = false;
//         qeduc27disabled.checked = true;
//         instrument.questions["qeduc2"].value = "7";
//     }
//     else {
//         if (qeduc27disabled.checked) {
//             instrument.questions["qeduc2"].value = "-9";
//             qeduc27disabled.checked = false;
//         }
//     }
// })


// util.listenArray(['qhouse4a', 'qhouse4b'], "myChange", () => {
//     if (instrument.questions.qhouse4a.value != "-9" && instrument.questions.qhouse4b.value != "-9") {
//         const value = (
//             Number(instrument.questions.qhouse4a.value) +
//             Number(instrument.questions.qhouse4b.value)
//         ).toString();

//         util.setValue("qhouse4", value);
//         util.trigger("qhouse4", "change");
//     }
// });


// //qhouse4 = qhouse4a + qhouse4b
// const qhouse4Array = ['qhouse4a', 'qhouse4b'];
// const qhouse4ArrayFull = [...qhouse4Array, 'qhouse4'];
// util.listenArray(qhouse4ArrayFull, "change", () => {
//     if (util.inputsHaveValue(qhouse4ArrayFull)) {
//         const qhouse4 = util.getInputNumericValue('qhouse4');

//         errorHandler.removeArrayError(qhouse4Array, '4 = 4a + 4b')
//         if (qhouse4 != util.makeSumFromElements(qhouse4Array)) {
//             errorHandler.addArrayError(qhouse4Array, '4 = 4a + 4b')
//         }
//     }
// });

// util.listen("sh1", "myChange", () => {
//     const sh1value = util.getInputDecimalValue('sh1');

//     const error = locales[lang]['Value_up_to_ten'];
//     errorHandler.removeError('sh1', error);

//     if (sh1value > 10) {
//         instrument.questions["sh1"].value = '-9';
//         errorHandler.addError('sh1', error);
//     }
//     else {
//         instrument.questions["sh1"].value = sh1value.toString();
//     }

//     // dupa ce dispare eroarea, mai trebuie facut un dispatch change pe orice element
//     // ca sa treaca prin activatorii de la tabelul sh3
//     util.trigger('sh2-1', 'change');
//     util.focus('sh2-1');
//     util.blur('sh2-1');
//     document.getElementsByName('sh2')[0].scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
// });


// sh3_start_dates.forEach((startel) => {
//     const index = sh3_start_dates.indexOf(startel);
//     const endel = sh3_end_dates[index]
//     const start = document.getElementById(startel) as HTMLInputElement;
//     const end = document.getElementById(endel) as HTMLInputElement;

//     const check = function() {
//         if (util.inputsHaveValue([startel, endel])) {

//             const startdate = util.standardDate(start.value);
//             const enddate = util.standardDate(end.value);
//             const timespent = document.getElementById(startel.replace("a", "f")) as HTMLInputElement;
//             const sh4 = document.getElementById("sh4") as HTMLInputElement;

//             const error = locales[lang]['Start_before_end'];
//             errorHandler.removeArrayError([startel, endel], error);

//             if (startdate > enddate) {
//                 errorHandler.addArrayError([startel, endel], error);
//                 instrument.questions[startel].value = '-9';
//                 instrument.questions[endel].value = '-9';
//                 timespent.value = "";
//                 instrument.questions[startel.replace("a", "f")].value = "-7";
//             }
//             else {
//                 instrument.questions[startel].value = start.value;
//                 instrument.questions[endel].value = end.value;

//                 timespent.value = util.diffDates(startdate, enddate, "months").toString();

//                 instrument.questions[startel].value = start.value;
//                 instrument.questions[endel].value = end.value;
//                 instrument.questions[startel.replace("a", "f")].value = timespent.value;

//                 let totalmonths = 0;
//                 sh3_start_dates.forEach((item) => {
//                     const nofmonths = Number(instrument.questions[item.replace("a", "f")].value);
//                     if (nofmonths > 0) {
//                         totalmonths += nofmonths;
//                     }
//                 });

//                 sh4.value = totalmonths.toString();
//                 instrument.questions["sh4"].value = sh4.value;
//             }
//         }
//     }

//     start.addEventListener("myChange", check);
//     end.addEventListener("myChange", check);
// });


// const ewm = ['ewm1', 'ewm2', 'ewm3', 'ewm4'];
// ewm.forEach((el) => {
//     document.querySelectorAll('input[name="' + el + '"]').forEach((elem) => {
//         elem.addEventListener("myChange", function() {
//             let suma = 0;
//             ewm.forEach((item) => {
//                 const valoare = Number(instrument.questions[item].value);
//                 if (valoare > 0) {
//                     suma += valoare;
//                 }
//             });

//             const ewm5_0 = document.getElementById("ewm5-0") as HTMLInputElement;
//             const ewm5_1 = document.getElementById("ewm5-1") as HTMLInputElement;

//             if (suma > 0) {
//                 ewm5_1.checked = true;
//                 ewm5_0.checked = false;
//             }
//             else {
//                 ewm5_1.checked = false;
//                 ewm5_0.checked = true;
//             }

//             instrument.questions["ewm5"].value = Number(suma > 0).toString();
//         });
//     });
// });

// const cmgt1a = document.getElementById('cmgt1a') as HTMLInputElement;
// cmgt1a.addEventListener("myChange", function() {

//     const start = document.getElementById("data") as HTMLInputElement;
//     const end = document.getElementById("cmgt1a") as HTMLInputElement;
//     const cmgt1b = document.getElementById("cmgt1b") as HTMLInputElement;

//     const startdate = new Date(start.value.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));
//     const enddate = new Date(end.value.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));


//     let monthDiff = (enddate.getFullYear() - startdate.getFullYear()) * 12 + enddate.getMonth() - startdate.getMonth();
//     if (monthDiff > 0 && enddate.getDate() < startdate.getDate()) {
//         monthDiff--;
//     }

//     cmgt1b.value = monthDiff.toString();
//     instrument.questions["cmgt1b"].value = cmgt1b.value;
//     cmgt1b.dispatchEvent(new Event('change'));

// });

// const sk3 = ["sk3_1", "sk3_2"]
// sk3.forEach(item => {
//     (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
//         if (util.inputsHaveValue(sk3)) {
//             const suma = Number(util.makeInputSumDecimal(sk3));
//             const error = locales[lang]['At_least_one_brother_or_sister'];
//             const sk3_1 = document.getElementById("sk3_1") as HTMLInputElement;
//             const sk3_2 = document.getElementById("sk3_2") as HTMLInputElement;
//             errorHandler.removeArrayError(sk3, error);

//             if (suma == 0) {
//                 errorHandler.addArrayError(sk3, error);
//                 instrument.questions["sk3_1"].value = "-9";
//                 instrument.questions["sk3_2"].value = "-9";
//             } else {
//                 instrument.questions["sk3_1"].value = sk3_1.value;
//                 instrument.questions["sk3_2"].value = sk3_2.value;
//             }
//         }
//     })
// });
