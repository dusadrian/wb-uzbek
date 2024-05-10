import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./01_cpis_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";
import * as DI from "../../interfaces/database";
import constant from "../../libraries/constants";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { KeyString, regions, districts, settlements } from "../../libraries/administrative";

import * as en from "../../locales/en.json";
import * as uz from "../../locales/uz.json";
import * as ru from "../../locales/ru.json";
const locales: { [key: string]: typeof en | typeof uz | typeof ru } = {
    'en': en,
    'uz': uz,
    'ru': ru
}

const lang = localStorage.getItem("language");
const translations = locales[lang as keyof typeof locales] as Record<string, string>;
let services: { [key: string]: DI.Institution };
let insons: { [key: string]: DI.INSON };

const general_dates = [
    'lk3', 'cm3', 'ct3', 'cg1c', 'cg3b', 'sa1', 'cmgt1a'
];

const sh3_start_dates = [
    'sh3_s1a', 'sh3_s2a', 'sh3_s3a', 'sh3_s4a', 'sh3_s5a', 'sh3_s6a', 'sh3_s7a', 'sh3_s8a', 'sh3_s9a', 'sh3_s10a',
    'sh3_csa'
];

const sh3_end_dates = [
    'sh3_s1d', 'sh3_s2d', 'sh3_s3d', 'sh3_s4d', 'sh3_s5d', 'sh3_s6d', 'sh3_s7d', 'sh3_s8d', 'sh3_s9d', 'sh3_s10d'
];

const regElements  = ["reg",  "lk14b", "cm3b", "cm10c", "cm11c", "ct3b", "ct10c", "ct11c", "cg10c", "cg11c", "sa3a", "sa5r"];
const disElements  = ["dis",  "lk14c", "cm3c", "cm10d", "cm11d", "ct3c", "ct10d", "ct11d", "cg10d", "cg11d", "sa3b", "sa5d"];
const setElements  = ["",     "lk14d", "cm3d", "cm10e", "cm11e", "ct3d", "ct10e", "ct11e", "cg10e", "cg11e", "sa3c", "",   ];
const typeElements = ["",     "lk14e", "cm3e", "cm10f", "cm11f", "ct3e", "ct10f", "ct11f", "cg10f", "cg11f", "sa3d", "",   ];

let regionCode = '';
let userUUID = '';
let institutionType = '';
let institutionCode = '';
let serviceCode = ''; // filter by service code INSON

const qeduc2 = util.radioIDs("qeduc2");

function check_sa1a(value: string) {
    instrument.questions["qeduc2"].readonly = false;
    qeduc2.forEach((item) => {
        const elem = util.htmlElement(item);
        elem.disabled = false;
        elem.dataset['skip'] = 'false';
        if (Number(value) > 7 && item == "qeduc2-3") {
            elem.checked = false;
        }
    })

    if (Number(value) >= 3 && Number(value) < 7) {

        qeduc2.forEach((item) => {
            const elem = util.htmlElement(item);
            elem.disabled = true;
            elem.dataset['skip'] = 'true';
        })
        util.htmlElement("qeduc2-3").checked = true;

        instrument.questions["qeduc2"].value = "3";
        instrument.questions["qeduc2"].readonly = true;

    } else if (Number(value) >= 7) {
        const elem = util.htmlElement("qeduc2-3");
        elem.checked = false;
        elem.dataset['skip'] = "true";
        elem.disabled = true;

        if (instrument.questions.qeduc2.value == "7") {
            instrument.questions.qeduc2.value = "-9";
        }
    }
}

const cm1a = util.radioIDs("cm1a");
const cm1c = util.radioIDs("cm1c");

function check_cm1(value: string) {
    instrument.questions["cm1c"].readonly = false;
    cm1c.forEach((item) => {
        const elem = util.htmlElement(item);
        elem.disabled = false;
        elem.dataset['skip'] = 'false';
    })

    if (Number(value) == 1 || Number(value) == 2) {
        const elem = util.htmlElement("cm1c-1");
        elem.checked = false;
        elem.disabled = true;
        elem.dataset['skip'] = 'true';
    } else if (Number(value) == 3) {
        cm1c.forEach((item) => {
            const elem = util.htmlElement(item);
            elem.disabled = true;
            elem.dataset['skip'] = 'true';
        })
        util.htmlElement("cm1c-3").checked = true;

        instrument.questions["cm1c"].value = "3";
        instrument.questions["cm1c"].readonly = true;
    }
}


const ct1a = util.radioIDs("ct1a");
const ct1c = util.radioIDs("ct1c");

function check_ct1(value: string) {
    instrument.questions["ct1c"].readonly = false;
    ct1c.forEach((item) => {
        const elem = util.htmlElement(item);
        elem.disabled = false;
        elem.dataset['skip'] = 'false';
    })

    if (value == "2" || value == "4") {
        const elem = util.htmlElement("ct1c-1");
        elem.checked = false;
        elem.disabled = true;
        elem.dataset['skip'] = 'true';
    } else if (instrument.questions["ct1a"].value == "3") {
        ct1c.forEach((item) => {
            const elem = util.htmlElement(item);
            elem.disabled = true;
            elem.dataset['skip'] = 'true';
        })
        util.htmlElement("ct1c-3").checked = true;

        instrument.questions["ct1c"].value = "3";
        instrument.questions["ct1c"].readonly = true;
    }
}


export const instrument1 = {
    init: async () => {

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

        date_elements.forEach((el) => {
            const element = util.htmlElement(el);
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
            } else {
                config = { ...flatpickrConfig, minDate: "01/01/1990" };
            }

            flatpickr(element, config);
        });


        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);

            services = args.services;
            insons = args.insons;
            const institution_code = args.institution_code ?? args.userData.institution_code;
            serviceCode = institution_code;
            const inson_user = constant.INSON.includes(args.userData.service_type_code);

            const sa5i = util.htmlElement("sa5i");
            const sh5 = util.htmlElement("sh5");
            const reg_codes = Object.keys(regions);
            for (let x = 0; x < regElements.length; x++) {
                const reg_el = util.htmlElement(regElements[x]);

                reg_el.innerHTML = "";
                const option = document.createElement("option");
                option.value = "-9";
                option.text = translations['t_choose'];
                reg_el.appendChild(option);

                for (let i = 0; i < reg_codes.length; i++) {
                    const option = document.createElement("option");
                    option.value = reg_codes[i];
                    option.text = reg_codes[i] + ": " + (regions[reg_codes[i]] as KeyString)[lang];
                    reg_el.appendChild(option);
                }

                const dis_el = util.htmlElement(disElements[x]);
                const set_el = util.htmlElement(setElements[x]);

                util.listen(regElements[x], "change", function () {
                    if (regElements[x] == "sa5r") {
                        sa5i.innerHTML = "";
                    }

                    if (regElements[x] == "reg") {
                        sh5.innerHTML = "";
                    }

                    if (typeElements[x] != "") {
                        util.htmlElement(typeElements[x]).value = "";
                    }

                    if (setElements[x] != "") {
                        set_el.innerHTML = "";
                    }

                    const selectedRegion = reg_el.value;
                    if (Number(selectedRegion) > 0) {
                        const dis_codes = regions[selectedRegion].districts;

                        const option = document.createElement("option");
                        option.value = "-9";
                        option.text = translations['t_choose'];
                        dis_el.innerHTML = "";
                        dis_el.appendChild(option);

                        for (let i = 0; i < dis_codes.length; i++) {
                            const option = document.createElement("option");
                            option.value = dis_codes[i];
                            option.text = dis_codes[i] + ": " + (districts[dis_codes[i]] as KeyString)[lang];
                            dis_el.appendChild(option);
                        }
                    }
                })

                util.listen(disElements[x], "change", function () {
                    if (regElements[x] == "sa5r") {
                        sa5i.innerHTML = "";
                    }

                    if (regElements[x] == "reg") {
                        sh5.innerHTML = "";
                    }

                    if (typeElements[x] != "") {
                        util.htmlElement(typeElements[x]).value = "";
                    }

                    const selectedDistrict = dis_el.value;

                    if (setElements[x] != "") {
                        if (!instrument.questions[setElements[x]].readonly) {
                            instrument.questions[setElements[x]].skip = false;
                            util.htmlElement(setElements[x]).disabled = false;
                            set_el.innerHTML = "";
                        }

                        if (Number(selectedDistrict) > 0) {
                            const option = document.createElement("option");
                            // if (setElements[x] == "sh5s") {
                            //     option.value = "--";
                            //     option.text = "--";
                            // } else {
                                option.value = "-9";
                                option.text = translations['t_choose'];
                            // }

                            set_el.appendChild(option);
                            const set_codes = districts[selectedDistrict].settlements;

                            if (set_codes.length > 0) {
                                set_el.appendChild(option);

                                for (let i = 0; i < set_codes.length; i++) {
                                    const option = document.createElement("option");
                                    option.value = set_codes[i];
                                    option.text = set_codes[i] + ": " + (settlements[set_codes[i]] as KeyString)[lang];
                                    set_el.appendChild(option);
                                }
                            }
                            else {
                                if (typeElements[x] != "") {
                                    util.setValue(typeElements[x], "" + districts[selectedDistrict].type);
                                }
                                instrument.questions[setElements[x]].skip = true;
                                instrument.questions[setElements[x]].value = '-7';
                                util.htmlElement(setElements[x]).disabled = true;
                            }
                        }
                    }

                    if (["reg", "sa5r"].indexOf(regElements[x]) >= 0) {
                        const institutie = regElements[x] == "reg" ? "sh5" : "sa5i";
                        const option = document.createElement("option");
                        option.value = "-9";
                        option.text = translations['t_choose'];

                        util.htmlElement(institutie).innerHTML = "";
                        util.htmlElement(institutie).appendChild(option);

                        const serv = districts[selectedDistrict].services;
                        if (serv.length > 0) {
                            for (let i = 0; i < serv.length; i++) {
                                if (services[serv[i]].type != "") {
                                    let service_included = true;
                                    if (insons[institution_code]) {
                                        service_included = insons[institution_code].services.includes(serv[i]);
                                    }
                                    if (service_included) {
                                        const option = document.createElement("option");
                                        option.value = serv[i];
                                        option.text = serv[i] + ': ' + services[serv[i]].name;
                                        util.htmlElement(institutie).appendChild(option);
                                    }
                                }
                            }
                        }

                        if (institutie == "sa5i") {
                            const optgroup = document.createElement("optgroup");
                            const option999 = document.createElement("option");
                            option999.value = '999';
                            option999.text = '999: ' + translations['not_in_registry'];
                            optgroup.appendChild(option999);
                            util.htmlElement(institutie).appendChild(optgroup);
                        }
                    }
                })
            }

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {

                    const index = [...regElements, ...disElements].indexOf(item.variable)
                    // regiunea este intotdeauna inaintea districtului
                    // un event de change pe regiune populeaza districtul, iar un event
                    // de change pe district populeaza settlement-ul
                    // trigger change event
                    instrument.seteazaValoareElement(item.variable, item.value, index >= 0);

                    if (item.variable == "qeduc2") {
                        check_sa1a(instrument.questions.sa1a.value);
                    }

                    if (item.variable == "cm1c") {
                        check_cm1(instrument.questions.cm1a.value);
                    }

                    if (item.variable == "ct1c") {
                        check_ct1(instrument.questions.ct1a.value);
                    }
                }
            }

            util.setValue("data", util.customDate());

            // set default values for user, IRRESPECTIVE of the instrument
            if (args.userData) {
                let institution_name = "";
                util.setValue("sh5s", "--");
                if (inson_user) {
                    institution_name = insons[args.userData.institution_code].name;
                    util.setValue('reg', insons[args.userData.institution_code].region);
                    util.setValue('dis', insons[args.userData.institution_code].district);
                    util.setValue('omr8a', "2");
                    util.setValue("omr8", insons[args.userData.institution_code].name ? insons[args.userData.institution_code].name : "--");
                    
                    if (services[institution_code].settlement) {
                        util.setValue("sh5s", services[institution_code].settlement);
                    }
                    util.setValue("sh5", institution_code);
                }
                else {
                    institution_name = services[institution_code].name;
                    util.setValue('reg', "" + services[institution_code].region);
                    util.setValue('dis', services[institution_code].district);
                    if (services[institution_code].settlement) {
                        util.setValue("sh5s", services[institution_code].settlement);
                    }
                    util.setValue("sh5", institution_code);
                    util.setValue('omr8a', "1");
                    util.setValue("omr8", institution_name);
                }

                util.setValue('omr1', args.userData.name ? args.userData.name : "--");
                util.setValue('omr2', args.userData.patronymics ? args.userData.patronymics : "--");
                util.setValue('omr3', args.userData.surname ? args.userData.surname : "--");
                util.setValue('omr4', args.userData.job_title ? args.userData.job_title : "--");
                util.setValue('omr5', args.userData.profession ? args.userData.profession : "--");
                util.setValue('omr6', args.userData.phone ? args.userData.phone : "--");
                util.setValue('omr7', args.userData.email ? args.userData.email : "--");
                regionCode = args.userData.region_code;
                userUUID = args.userData.uuid;
                institutionType = args.userData.service_type_code;
                institutionCode = args.userData.institution_code;


                // if (args.userData.service_type_code === '9') {
                //     institutionType = args.insons[args.userData.institution_code].type;
                //     institutionCode = args.userData.institution_code; // TODO -- THIS IS NOT OK, need to be fixed
                // } else {
                // }

                // util.setValue("sh5", institution_code);
                // util.setValue("sh5a", institution_name);
                // util.setValue("sh5b", location);
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
            util.focus("omr1");
            util.blur("omr1");
        });
    }
}

const lk22_2 = ['lk22_2_1', 'lk22_2_2', 'lk22_2_3', 'lk22_2_4', 'lk22_2_5'];

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

    if (_questions.lk22_1.value == "1" && !check_lk22_2()) {
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "cpis";
    obj.extras = {
        region_code: regionCode,
        user_uuid: userUUID,
        institution_type: institutionType,
        institution_code: institutionCode,
        service_code: serviceCode,
    }
    obj.service_code = serviceCode;
    ipcRenderer.send("saveInstrument", obj);
}


// Set service type
util.listen("sa5i", "change", function () {
    util.setValue("sa5t", "-9");
    const value = util.htmlElement("sa5i").value;
    const serv_codes = Object.keys(services);
    if (serv_codes.indexOf(value) >= 0) {
        const type = services[value].type;
        if (["11", "12", "13", "14", "15", "16", "17"].indexOf(type) >= 0) {
            util.setValue("sa5t", type);
        }
    }
})

// settlement type
for (let i = 0; i < setElements.length; i++) {
    if (setElements[i] != "" && typeElements[i] != "") {
        util.listen(setElements[i], "change", () => {
            const value = util.htmlElement(setElements[i]).value;
            util.setValue(typeElements[i], settlements[value].type);
        })
    }
}


function check_lk22_2(): boolean {
    const lk22_2_1 = util.htmlElement("lk22_2_1");
    const lk22_2_7_1 = util.htmlElement("lk22_2_7-1");
    const lk22_2_7_0 = util.htmlElement("lk22_2_7-0");


    let suma = 0;
    for (let i = 0; i < lk22_2.length; i++) {
        if (util.htmlElement(lk22_2[i]).checked) {
            suma++;
        }
    }

    const message = translations['At_least_one_disability'];
    errorHandler.removeError(lk22_2, message);

    if (suma == 0) {
        errorHandler.addError(lk22_2, message);
        lk22_2_1.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }
    else {
        if (suma > 1) {
            lk22_2_7_1.checked = true;
            lk22_2_7_0.checked = false;
        } else {
            lk22_2_7_1.checked = false;
            lk22_2_7_0.checked = true;
        }

        instrument.questions["lk22_2_7"].value = Number(suma > 1).toString();
    }

    return (suma > 0);
}

util.listen(lk22_2, "myChange", check_lk22_2);



util.listen(cm1a, "myChange", () => {
    check_cm1(instrument.questions["cm1a"].value);
    util.trigger("cm1b-1", "change");
})



util.listen(ct1a, "myChange", () => {
    check_ct1(instrument.questions["ct1a"].value);
    util.trigger("ct1b-1", "change");
})


util.listen("lk3", "myChange", () => {
    if (instrument.questions.lk3.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.lk3.value),
            new Date("2024-05-01")
        )

        util.setValue("lk13a", age.toString());
        util.trigger("sa1", "change");
        util.focus("lk14a_dk");
        util.blur("lk14a_dk");
    }
});

const lk3cg1 = ["lk3", "cg1c"];
util.listen(lk3cg1, "myChange", () => {
    if (util.inputsHaveValue(lk3cg1)) {
        const startdate = util.standardDate(util.htmlElement("lk3").value);
        const enddate = util.standardDate(util.htmlElement("cg1c").value);
        const message = "CG1c >= LK3";
        errorHandler.removeError(lk3cg1, message);
        if (startdate > enddate) {
            errorHandler.addError(lk3cg1, message);
        }
    }
})


const cg1cg3 = ["cg3b", "cg1c"];
util.listen(cg1cg3, "myChange", () => {
    if (util.inputsHaveValue(cg1cg3)) {
        const startdate = util.standardDate(util.htmlElement("cg3b").value);
        const enddate = util.standardDate(util.htmlElement("cg1c").value);
        const message = "CG1c >= CG3b";
        errorHandler.removeError(cg1cg3, message);
        if (startdate > enddate) {
            errorHandler.addError(cg1cg3, message);
        }
    }
});


util.listen("sa1", "myChange", () => {
    if (instrument.questions.lk3.value != "-9" && instrument.questions.sa1.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.lk3.value),
            util.standardDate(instrument.questions.sa1.value)
        )

        if (!Number.isNaN(age)) {
            const message = "SA1 must be later than or equal to LK3";
            errorHandler.removeError("sa1", message);

            if (age >= 0) {
                util.setValue("sa1a", age.toString());
            } else if (age < 0) {
                if (age < 0) {
                    util.htmlElement("sa1a").value = "";
                    instrument.questions.sa1a.value = "-9";
                    errorHandler.addError("sa1", message);
                }
            }
        }
    }
});

util.listen("sa1a", "myChange", () => {
    check_sa1a(instrument.questions["sa1a"].value);
});


// util.listen(['qhouse4a', 'qhouse4b'], "myChange", () => {
//     if (instrument.questions.qhouse4a.value != "-9" && instrument.questions.qhouse4b.value != "-9") {
//         const value = (
//             Number(instrument.questions.qhouse4a.value) +
//             Number(instrument.questions.qhouse4b.value)
//         ).toString();

//         util.setValue("qhouse4", value);
//     }
// });


//qhouse4 = qhouse4a + qhouse4b
const qhouse4Array = ['qhouse4a', 'qhouse4b'];
const qhouse4ArrayFull = [...qhouse4Array, 'qhouse4'];
util.listen(qhouse4ArrayFull, "change", () => {
    if (util.inputsHaveValue(qhouse4ArrayFull)) {
        const qhouse4 = util.getInputNumericValue('qhouse4');
        const message = '4 = 4a + 4b';
        errorHandler.removeError(qhouse4ArrayFull, message)
        if (qhouse4 != util.makeSumFromElements(qhouse4Array)) {
            errorHandler.addError(qhouse4ArrayFull, message)
        }
    }
});

util.listen("sh1", "myChange", () => {
    const sh1value = util.getInputDecimalValue('sh1');

    const message = translations['Value_up_to_ten'];
    errorHandler.removeError('sh1', message);

    if (sh1value > 10) {
        instrument.questions["sh1"].value = '-9';
        errorHandler.addError('sh1', message);
    }
    else {
        instrument.questions["sh1"].value = sh1value.toString();
        if (sh1value == 0) {
            util.setValue("sh3_csa", util.htmlElement("sa1").value);
            util.htmlElement("sh3_s1a").value = "";
        } else {
            util.setValue("sh3_s1a", util.htmlElement("sa1").value);
            if (util.htmlElement("sa1").value == util.htmlElement("sh3_csa").value) {
                util.htmlElement("sh3_csa").value = "";
                util.htmlElement("sh3_csf").value = "";
                instrument.questions.sh3_csa.value = "-9";
                instrument.questions.sh3_csf.value = "-9";
            }
        }
    }

    // dupa ce dispare eroarea, mai trebuie facut un dispatch change pe orice element
    // ca sa treaca prin activatorii de la tabelul sh3
    util.trigger('sh2-1', 'change');
    util.focus('sh2-1');
    util.blur('sh2-1');
});


sh3_start_dates.forEach((startel) => {
    const index = sh3_start_dates.indexOf(startel);
    const start = util.htmlElement(startel);
    if (index < sh3_start_dates.length - 1) {
        const endel = sh3_end_dates[index];
        const end = util.htmlElement(endel);

        const check = function () {
            const startdate = util.standardDate(start.value);
            if (util.inputsHaveValue([startel, endel])) {
                const enddate = util.standardDate(end.value);
                const timespent = startel.replace("a", "f");

                const message = translations['Start_before_end'];
                errorHandler.removeError([startel, endel], message);

                if (startdate > enddate) {
                    errorHandler.addError([startel, endel], message);
                    instrument.questions[startel].value = '-9';
                    instrument.questions[endel].value = '-9';
                    util.htmlElement(timespent).value = "";
                    instrument.questions[timespent].value = "-9";
                }
                else {
                    instrument.questions[startel].value = start.value;
                    instrument.questions[endel].value = end.value;
                    const monthdiff = util.diffDates(
                        startdate,
                        enddate,
                        "months"
                    ).toString();

                    util.htmlElement(timespent).value = monthdiff;
                    instrument.questions[timespent].value = monthdiff;

                    let totalmonths = 0;
                    sh3_start_dates.forEach((item) => {
                        const nofmonths = Number(instrument.questions[item.replace("a", "f")].value);
                        if (nofmonths > 0) {
                            console.log(nofmonths)
                            totalmonths += nofmonths;
                        }
                    });

                    // util.setValue("sh4", totalmonths.toString());
                    util.htmlElement("sh4").value = totalmonths.toString();
                    instrument.questions.sh4.value = totalmonths.toString();
                }
            }
        }

        util.listen(startel, "myChange", check);
        util.listen(endel, "myChange", check);
    } else {
        util.listen(startel, "myChange", () => {
            const startdate = util.standardDate(start.value);
            const monthdiff = util.diffDates(
                startdate,
                util.standardDate("01/05/2024"),
                "months"
            ).toString();

            util.htmlElement("sh3_csf").value = monthdiff;
            instrument.questions.sh3_csf.value = monthdiff;

            let totalmonths = 0;
            [...sh3_start_dates].forEach((item) => {
                const nofmonths = Number(instrument.questions[item.replace("a", "f")].value);
                if (nofmonths > 0) {
                    totalmonths += nofmonths;
                }
            });

            util.setValue("sh4", totalmonths.toString());
        });
    }

});

sh3_end_dates.forEach((startel) => {
    const index = sh3_end_dates.indexOf(startel);
    const start = util.htmlElement(startel);

    const endel = sh3_start_dates[index + 1];
    const end = util.htmlElement(endel);

    const check = function () {
        const startdate = util.standardDate(start.value);
        if (util.inputsHaveValue([startel, endel])) {
            const enddate = util.standardDate(end.value);

            const message = translations['must_be_earlier'].
                replace("X", startel.toUpperCase()).
                replace("Y", endel.toUpperCase());

            errorHandler.removeError([startel, endel], message);

            if (startdate > enddate) {
                errorHandler.addError([startel, endel], message);
                instrument.questions[startel].value = '-9';
                instrument.questions[endel].value = '-9';
            }
            else {
                instrument.questions[startel].value = start.value;
                instrument.questions[endel].value = end.value;
            }
        }
    }

    util.listen(startel, "myChange", check);
    util.listen(endel, "myChange", check);


});


const ewm = ['ewm1', 'ewm2', 'ewm3', 'ewm4'];
ewm.forEach((el) => {
    document.querySelectorAll('input[name="' + el + '"]').forEach((elem) => {
        elem.addEventListener("myChange", function () {
            let suma = 0;
            ewm.forEach((item) => {
                const valoare = Number(instrument.questions[item].value);
                if (valoare > 0) {
                    suma += valoare;
                }
            });

            const ewm5_0 = util.htmlElement("ewm5-0");
            const ewm5_1 = util.htmlElement("ewm5-1");

            if (suma > 0) {
                ewm5_1.checked = true;
                ewm5_0.checked = false;
            }
            else {
                ewm5_1.checked = false;
                ewm5_0.checked = true;
            }

            instrument.questions["ewm5"].value = Number(suma > 0).toString();
        });
    });
});


util.listen("cmgt1a", "myChange", () => {
    const months = util.diffDates(
        util.standardDate("01/" + instrument.questions.cmgt1a.value),
        new Date("2024-05-01"),
        "months"
    )

    util.setValue("cmgt1b", months.toString());
})

const cmgtsa = ["cmgt1a", "sa1"];
util.listen(cmgtsa, "myChange", () => {
    if (util.inputsHaveValue(cmgtsa)) {
        const cmgt1a = util.htmlElement("cmgt1a").value;
        const sa1 = util.htmlElement("sa1").value;
        instrument.questions['cmgt1a'].value = cmgt1a;
        instrument.questions['sa1'].value = sa1;

        const message = translations['must_be_earlier'].replace("X", "SA1").replace("Y", "CMGT1A");

        errorHandler.removeError(cmgtsa, message);

        if (util.standardDate(cmgt1a) > util.standardDate(sa1)) {
            errorHandler.addError(cmgtsa, message);
            instrument.questions['cmgt1a'].value = '-9';
            instrument.questions['sa1'].value = '-9';
        }
    }
})


const sk3 = ["sk3_1", "sk3_2"]
util.listen(sk3, "change", () => {
    if (util.inputsHaveValue(sk3)) {
        const suma = Number(util.makeInputSumDecimal(sk3));
        const message = translations['At_least_one_brother_or_sister'];

        errorHandler.removeError(sk3, message);
        if (suma == 0) {
            errorHandler.addError(sk3, message);
        }
    }
});


const qfam2 = [
    'qfam2_1', 'qfam2_2', 'qfam2_3', 'qfam2_4', 'qfam2_5',
    'qfam2_6', 'qfam2_7', 'qfam2_8', 'qfam2_9'
]

util.listen("qfam2_90", "change", () => {
    if (util.htmlElement("qfam2_90").checked) {
        qfam2.forEach((el) => {
            util.htmlElement(el).checked = false;
            instrument.questions[el].value = "0";
        })
    }
})

util.listen(qfam2, "change", () => {
    if (util.makeSumFromElements(qfam2) > 0) {
        util.htmlElement("qfam2_90").checked = false;
        instrument.questions["qfam2_90"].value = "0";
    }
});


const qfam3 = [
    'qfam3_1', 'qfam3_2', 'qfam3_3', 'qfam3_4', 'qfam3_5'
]

util.listen("qfam3_9", "change", () => {
    if (util.htmlElement("qfam3_9").checked) {
        qfam3.forEach((el) => {
            util.htmlElement(el).checked = false;
            instrument.questions[el].value = "0";
        })
    }
})

util.listen(qfam3, "change", () => {
    if (util.makeSumFromElements(qfam3) > 0) {
        util.htmlElement("qfam3_9").checked = false;
        instrument.questions["qfam3_9"].value = "0";
    }
});


util.listen("edk3", "change", () => {
    const message = "EDK3 <= 11"
    errorHandler.removeError("edk3", message);
    if (Number(util.htmlElement("edk3").value) > 11) {
        errorHandler.addError("edk3", message);
    }
});


util.listen("qeduc2b", "change", () => {
    const message = "QEDUC2b <= 11"
    errorHandler.removeError("qeduc2b", message);
    if (Number(util.htmlElement("qeduc2b").value) > 11) {
        errorHandler.addError("qeduc2b", message);
    }
});

util.listen("sh5", "change", () => {
    util.setValue("sh3_csb", "--");
    const value = util.htmlElement("sh5").value;
    if (Number(value) > 0) {
        const type = services[value].type;
        if (["11", "12", "13", "14", "15", "16", "17"].indexOf(type) >= 0) {
            util.setValue("sh3_csb", type);
        }
    }
})

const lk3cm3 = ["lk3", "cm3"];
util.listen(lk3cm3, "change", () => {
    if (util.inputsHaveValue(lk3cm3)) {
        const mother = util.standardDate(util.htmlElement("cm3").value);
        const child = util.standardDate(util.htmlElement("lk3").value);
        const message = "CM3 < LK3";

        errorHandler.removeError(lk3cm3, message);
        if (mother >= child) {
            errorHandler.addError(lk3cm3, message);

        }
    }
})

const lk3ct3 = ["lk3", "ct3"];
util.listen(lk3ct3, "change", () => {
    if (util.inputsHaveValue(lk3ct3)) {
        const mother = util.standardDate(util.htmlElement("ct3").value);
        const child = util.standardDate(util.htmlElement("lk3").value);
        const message = "CT3 < LK3";

        errorHandler.removeError(lk3ct3, message);
        if (mother >= child) {
            errorHandler.addError(lk3ct3, message);

        }
    }
})

util.listen("cm3a_out", "myChange", () => {
    if (Number(instrument.questions.cm3a_out.value) > 0) {
        util.htmlElement("cm3a_dk").checked = false;
        instrument.questions.cm3a_dk.value = "0";
    }
});

util.listen("lk14a_out", "myChange", () => {
    if (Number(instrument.questions.lk14a_out.value) > 0) {
        util.htmlElement("lk14a_dk").checked = false;
        instrument.questions.lk14a_dk.value = "0";
    }
});

util.listen("lk14a_dk", "myChange", () => {
    if (Number(instrument.questions.lk14a_dk.value) > 0) {
        util.htmlElement("lk14a_out").checked = false;
        instrument.questions.lk14a_out.value = "0";
    }
});

util.listen("cm3a_dk", "myChange", () => {
    if (Number(instrument.questions.cm3a_dk.value) > 0) {
        util.htmlElement("cm3a_out").checked = false;
        instrument.questions.cm3a_out.value = "0";
    }
});

util.listen("ct3a_out", "myChange", () => {
    if (Number(instrument.questions.ct3a_out.value) > 0) {
        util.htmlElement("ct3a_dk").checked = false;
        instrument.questions.ct3a_dk.value = "0";
    }
});

util.listen("ct3a_dk", "myChange", () => {
    if (Number(instrument.questions.ct3a_dk.value) > 0) {
        util.htmlElement("ct3a_out").checked = false;
        instrument.questions.ct3a_out.value = "0";
    }
});

const ewm1 = util.radioIDs("ewm1");
const ewm2 = util.radioIDs("ewm2");
const ewm3 = util.radioIDs("ewm3");
const ewm4 = util.radioIDs("ewm4");



util. listen([...ewm1, ...ewm2, ...ewm3, ...ewm4], "myChange", () => {
    let suma = 0;
    ["ewm1", "ewm2", "ewm3", "ewm4"].forEach((item) => {
        if (Number(instrument.questions[item].value) > 0) {
            suma += Number(instrument.questions[item].value);
        }
    });
    const ewm5_0 = util.htmlElement("ewm5-0");
    const ewm5_1 = util.htmlElement("ewm5-1");

    if (suma > 0) {
        ewm5_1.checked = true;
        ewm5_0.checked = false;
    }
    else {
        ewm5_1.checked = false;
        ewm5_0.checked = true;
    }

    instrument.questions["ewm5"].value = Number(suma > 0).toString();
})