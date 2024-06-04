import { ipcRenderer } from "electron";
import { questions, questionsOrder } from "./01_cpis_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";
import * as DI from "../../interfaces/database";
import constant from "../../libraries/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalAny: any = global;
window.require('jquery');
globalAny.jQuery = window.require('jquery');
globalAny.$ = window.require('jquery');
window.require('jquery-ui-dist/jquery-ui');
// window.require('jquery-ui');
import "jquery-ui/ui/i18n/datepicker-ru";
import "jquery-ui/ui/i18n/datepicker-uz";

import { KeyString, regions, districts, settlements, mahallas } from "../../libraries/administrative";

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
let servicesCodes: string[] = [];
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


const regElements =  ["reg", "lk14b", "cm3b", "cm10c", "cm11c", "ct3b", "ct10c", "ct11c", "cg10c", "cg11c", "sa3a", "sa5r"];
const disElements =  ["dis", "lk14c", "cm3c", "cm10d", "cm11d", "ct3c", "ct10d", "ct11d", "cg10d", "cg11d", "sa3b", "sa5d"];
const setElements =  ["",    "lk14d", "cm3d", "cm10e", "cm11e", "ct3d", "ct10e", "ct11e", "cg10e", "cg11e", "sa3c", ""    ];
const mahElements =  ["",    "lk14m", "cm3m", "cm10m", "cm11m", "ct3m", "ct10m", "ct11m", "cg10m", "cg11m", "sa3m", ""    ];
const typeElements = ["",    "lk14e", "cm3e", "cm10f", "cm11f", "ct3e", "ct10f", "ct11f", "cg10f", "cg11f", "sa3d", ""];

// variabile cu reguli de validare
const lk22_2 = ['lk22_2_1', 'lk22_2_2', 'lk22_2_3', 'lk22_2_4', 'lk22_2_5'];
const lk3cg1 = ["lk3", "cg1c"];
const cg1cg3 = ["cg3b", "cg1c"];
const cg3blk3 = ["cg3b", "lk3"];
const qhouse4Array = ['qhouse4a', 'qhouse4b'];
const qhouse4ArrayFull = [...qhouse4Array, 'qhouse4'];
const ewm1 = util.radioIDs("ewm1");
const ewm2 = util.radioIDs("ewm2");
const ewm3 = util.radioIDs("ewm3");
const ewm4 = util.radioIDs("ewm4");
const cmgtsa = ["cmgt1a", "sa1"];
const sk3 = ["sk3_1", "sk3_2"];
const qfam2 = [
    'qfam2_1', 'qfam2_2', 'qfam2_3', 'qfam2_4', 'qfam2_5',
    'qfam2_6', 'qfam2_7', 'qfam2_8', 'qfam2_9'
];
const qfam3 = [
    'qfam3_1', 'qfam3_2', 'qfam3_3', 'qfam3_4', 'qfam3_5'
];
const lk3cm3 = ["lk3", "cm3"];
const lk3ct3 = ["lk3", "ct3"];

const cm1a = util.radioIDs("cm1a");
const cm1c = util.radioIDs("cm1c");
const ct1a = util.radioIDs("ct1a");
const ct1c = util.radioIDs("ct1c");


const nonemptysets: string[] = [];
for (let i = 0; i < setElements.length; i++) {
    if (setElements[i] != "") {
        nonemptysets.push(setElements[i]);
    }
}

// regiunea este intotdeauna inaintea districtului
// un event de change pe regiune populeaza districtul, iar un event
// de change pe district populeaza settlement-ul
const validate = [
    ...regElements, ...disElements, ...nonemptysets,
    ...sh3_start_dates, ...sh3_end_dates,
    ...lk22_2, ...lk3cg1, ...cg1cg3, ...qhouse4ArrayFull, ...ewm1, ...ewm2, ...ewm3, ...ewm4,
    ...cmgtsa, ...sk3, ...qfam2, ...qfam3, ...lk3cm3, ...lk3ct3, ...cm1a, ...cm1c,
    ...ct1a, ...ct1c,
    "sa5i", "sa1a", "sh1", "qfam2_90", "qfam3_6", "qfam3_9", "sh5",
    "lk14a_out", "lk14a_dk", "cm3a_out", "cm3a_dk", "ct3a_out", "ct3a_dk"
]

let regionCode = '';
let userUUID = '';
let institutionType = '';
let institutionCode = '';
let institution_code = '';
let serviceCode = ''; // filter by service code INSON
let userRole = '';
let filters: DI.FiltersInterface;


function check_sa1a(sa1a: number) {

    const elem = util.htmlElement("qeduc2-3");
    if (sa1a < 7) {
        elem.checked = true;
        instrument.questions["qeduc2"].value = "7";

    } else {
        elem.checked = false;

        if (instrument.questions.qeduc2.value == "7") {
            instrument.questions.qeduc2.value = "-9";
        }
    }
}


function check_cm1(value: string) {
    instrument.questions["cm1c"].readonly = false;
    cm1c.forEach((item) => {
        const elem = util.htmlElement(item);
        elem.disabled = false;
        elem.dataset['skip'] = 'false';
    })

    if (Number(value) == 2) {
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


function check_ct1(value: string) {
    ct1c.forEach((item) => {
        const elem = util.htmlElement(item);
        elem.disabled = false;
        elem.dataset['skip'] = 'false';
    })

    const ct1c1 = util.htmlElement("ct1c-1");
    const ct1c4 = util.htmlElement("ct1c-4");

    if (value == "2") {
        ct1c1.checked = false;
        ct1c1.disabled = true;
        ct1c1.dataset['skip'] = 'true';

        ct1c4.checked = false;
        ct1c4.disabled = true;
        ct1c4.dataset['skip'] = 'true';

    } else if (value == "3") {
        ct1c.forEach((item) => {
            const elem = util.htmlElement(item);
            elem.checked = false;
            elem.disabled = true;
            elem.dataset['skip'] = 'true';
        })

        util.htmlElement("ct1c-3").checked = true;
        instrument.questions["ct1c"].value = "3";

    } else if (value == "4") {
        ct1c1.checked = false;
        ct1c1.disabled = true;
        ct1c1.dataset['skip'] = 'true';
    }
}

$.datepicker.setDefaults($.datepicker.regional[lang]);
const jQueryDatepickerConfig = {
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd/mm/yy",
    minDate: "01/01/1990",
    maxDate: "30/04/2024",
    yearRange: "c-100:c+100",
    firstDay: 1,
    onSelect: function () {
        util.trigger(this.id, "change");
    }
};


export const instrument1 = {
    init: async () => {


        const date_elements = [...general_dates, ...sh3_start_dates, ...sh3_end_dates];
        date_elements.forEach((el) => {
            const config = { ...jQueryDatepickerConfig };
            if (el == "data") {
                config.minDate = "01/05/2024";
                config.maxDate = "31/12/2025";
            } else if (el == "cm3") {
                config.minDate = "01/01/1950";
                config.maxDate = "31/12/2023";
            } else if (el == "ct3" || el == "cg3b") {
                config.minDate = "01/01/1930";
                config.maxDate = "31/12/2023";
            } else if (el == "cmgt1a") {
                config.minDate = "01/01/2000";
            }

            $("#" + el).datepicker(config);

            util.listen(el, "change", () => {
                errorHandler.removeError(el, translations['invalid_date']);
                try {
                    $.datepicker.parseDate(
                        jQueryDatepickerConfig.dateFormat,
                        util.htmlElement(el).value
                    )
                } catch (error) {
                    errorHandler.addError(el, translations['invalid_date']);
                    instrument.questions[el].value = "-9";
                }
            });
        });

        filters = JSON.parse(sessionStorage.getItem('filters'));

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            services = args.services;
            servicesCodes = Object.keys(services);
            insons = args.insons;
            userRole = args.userData.role_code;
            institution_code = (filters && filters.institution) ? filters.institution : args.userData.institution_code;

            if (args.institution_code) {
                serviceCode = args.institution_code;
            } else if(filters && filters.service_code) {
                serviceCode = filters.service_code;
            }

            const inson_user = constant.INSON.includes(args.userData.service_type_code);

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionsOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);

                    if (validate.indexOf(item.variable) >= 0) {
                        util.trigger(item.variable, "change");
                    }

                    if (item.variable == "qeduc2") {
                        check_sa1a(Number(instrument.questions.sa1a.value));
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

            if (args.userData) {
                // set default values, if new instrument
                if (!args.questions) {
                    let institution_name;

                    if (inson_user) {
                        const inson = insons[args.userData.institution_code];
                        institution_name = inson['name_' + lang as keyof DI.INSON];
                        util.setValue("reg", inson.region);
                        util.setValue("dis", inson.district);
                        util.setValue("sh5", serviceCode);
                        util.setValue("sh5s", "--");
                        util.setValue('omr8a', "2");
                    }
                    else {
                        const serviciu = services[institution_code];
                        institution_name = serviciu['name_' + lang as keyof DI.Institution];
                        util.setValue("reg", serviciu.region);
                        util.setValue("dis", serviciu.district);
                        util.setValue("sh5", institution_code);
                        util.setValue("sh5s", serviciu.settlement);
                        util.setValue('omr8a', "1");
                        serviceCode = institution_code;
                    }

                    util.setValue("omr8", institution_name ? institution_name : "--");
                    util.setValue('omr1', args.userData.name ? args.userData.name : "--");
                    util.setValue('omr2', args.userData.patronymics ? args.userData.patronymics : "--");
                    util.setValue('omr3', args.userData.surname ? args.userData.surname : "--");
                    util.setValue('omr4', args.userData.job_title ? args.userData.job_title : "--");
                    util.setValue('omr5', args.userData.profession ? args.userData.profession : "--");
                    util.setValue('omr6', args.userData.phone ? args.userData.phone : "--");
                    util.setValue('omr7', args.userData.email ? args.userData.email : "--");
                }

                regionCode = args.userData.region_code;
                userUUID = args.userData.uuid;
                institutionType = args.userData.service_type_code;
                institutionCode = args.userData.institution_code;
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
            util.focus("omr1");
            util.blur("omr1");
        });
    }
}



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
    if (userRole != constant.ROLE_REGIONAL && userRole != constant.ROLE_NATIONAL) {
        obj.extras = {
            region_code: regionCode,
            user_uuid: userUUID,
            institution_type: institutionType,
            institution_code: institutionCode,
            service_code: serviceCode,
        }
    }
    ipcRenderer.send("saveInstrument", obj);
}

const reg_codes = Object.keys(regions);
for (let x = 0; x < regElements.length; x++) {

    util.resetSelect(regElements[x], "-9", translations['t_choose']);
    for (let i = 0; i < reg_codes.length; i++) {
        util.addOption(
            regElements[x],
            reg_codes[i],
            reg_codes[i] + ": " + (regions[reg_codes[i]] as KeyString)[lang]
        );
    }

    util.listen(regElements[x], "change", function () {

        util.resetSelect(disElements[x], "-9", translations['t_choose']);

        const selectedRegion = util.htmlElement(regElements[x]).value;
        if (Number(selectedRegion) > 0) {
            const dis_codes = regions[selectedRegion].districts;

            for (let i = 0; i < dis_codes.length; i++) {
                util.addOption(
                    disElements[x],
                    dis_codes[i],
                    dis_codes[i] + ": " + (districts[dis_codes[i]] as KeyString)[lang]
                );
            }
        }

        if (regElements[x] == "sa5r") {
            util.resetSelect("sa5i", "-9", translations['t_choose']);
        }

        if (regElements[x] == "reg") {
            util.resetSelect("sh5", "-9", translations['t_choose']);
        }

        if (setElements[x] != "") {
            if (instrument.questions[setElements[x]].readonly) {
                util.resetSelect(setElements[x], "--", "--");
            } else {
                util.resetSelect(setElements[x], "-9", translations['t_choose']);
            }
            instrument.questions[setElements[x]].value = "-7";
        }

        if (mahElements[x] != "") {
            util.resetSelect(mahElements[x], "-9", translations['t_choose']);
            instrument.questions[mahElements[x]].value = "-7";
        }
    });

    util.listen(disElements[x], "change", function () {

        const selectedDistrict = util.htmlElement(disElements[x]).value;

        if (setElements[x] != "") {

            if (instrument.questions[setElements[x]].readonly) {
                util.resetSelect(setElements[x], "--", "--");
                instrument.questions[setElements[x]].value = "--";
            } else {
                util.resetSelect(setElements[x], "-9", translations['t_choose']);
                instrument.questions[setElements[x]].value = "-9";
            }

            if (!instrument.questions[setElements[x]].readonly) {
                instrument.questions[setElements[x]].skip = false;
                util.htmlElement(setElements[x]).disabled = false;
            }

            if (Number(selectedDistrict) > 0) {

                const set_codes = districts[selectedDistrict].settlements;

                if (set_codes.length > 0) {
                    for (let i = 0; i < set_codes.length; i++) {
                        util.addOption(
                            setElements[x],
                            set_codes[i],
                            set_codes[i] + ": " + (settlements[set_codes[i]] as KeyString)[lang]
                        );
                    }
                } else {
                    // redundant, acum toate districtele au settlements, chiar daca sunt
                    // unele cu 000 in coada
                    if (typeElements[x] != "") {
                        util.setValue(typeElements[x], districts[selectedDistrict].type);
                    }
                    instrument.questions[setElements[x]].skip = true;
                    instrument.questions[setElements[x]].value = '-7';
                    util.htmlElement(setElements[x]).disabled = true;
                }
            }
        }

        if (mahElements[x] != "") {
            util.resetSelect(mahElements[x], "-9", translations['t_choose']);
            instrument.questions[mahElements[x]].value = "-7";
        }

        if (["dis", "sa5d"].indexOf(disElements[x]) >= 0) {
            const institutie = disElements[x] == "dis" ? "sh5" : "sa5i";
            util.resetSelect(institutie, "-9", translations['t_choose']);

            if (Number(selectedDistrict) > 0) {
                for (let i = 0; i < servicesCodes.length; i++) {
                    const code = servicesCodes[i];
                    if (services[code].district == selectedDistrict) {
                        const name = 'name_' + lang as keyof DI.Institution;
                        util.addOption(
                            institutie,
                            code,
                            code + ": " + services[code][name]
                        )
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


    if (setElements[x] != "") {
        util.listen(setElements[x], "change", () => {
            const selectedSettlement = util.htmlElement(setElements[x]).value;

            if (Number(selectedSettlement) > 0 && typeElements[x] != "") {
                // settlement type
                util.setValue(typeElements[x], settlements[selectedSettlement].type);
            }

            if (mahElements[x] != "") {
                util.resetSelect(mahElements[x], "-9", translations['t_choose']);
                instrument.questions[mahElements[x]].value = "-9";

                if (Number(selectedSettlement) > 0) {
                    const mah_codes = settlements[selectedSettlement].mahallas;

                    if (mah_codes.length > 0) {
                        for (let i = 0; i < mah_codes.length; i++) {
                            util.addOption(
                                mahElements[x],
                                mah_codes[i],
                                mah_codes[i] + ": " + mahallas[mah_codes[i]]
                            );
                        }
                    }
                }
            }
        })
    }
}


// Set service type
util.listen("sa5i", "change", function () {
    const service = util.htmlElement("sa5i").value;

    // check for 999 not in registry
    if (servicesCodes.indexOf(service) >= 0) {
        const type = services[service].type;
        // In principiu ar trebui sa pun acest if, insa sa5i contine
        // TOATE tipurile deci este irelevant
        // if (util.selectValues("sa5t").indexOf(type) >= 0) {
            util.setValue("sa5t", type);
        // }
    }
})


function check_lk22_2(): boolean {
    const lk22_2_1 = util.htmlElement("lk22_2_1");
    let suma = 0;
    for (let i = 0; i < lk22_2.length; i++) {
        if (util.htmlElement(lk22_2[i]).checked) {
            suma += 1;
        }
    }

    const message = translations['At_least_one_disability'];
    errorHandler.removeError(lk22_2, message);

    if (suma == 0) {
        errorHandler.addError(lk22_2, message);
        lk22_2_1.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    } else {
        const value = suma > 1 ? "1" : "0"
        util.setValue("lk22_2_7", value);
        instrument.questions["lk22_2_7"].value = value;
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


util.listen(lk3cg1, "myChange", () => {
    if (util.inputsHaveValue(lk3cg1)) {
        const startdate = util.standardDate(util.htmlElement("lk3").value);
        const enddate = util.standardDate(util.htmlElement("cg1c").value);

        const message = translations['must_be_later_or_equal'].
            replace("X", "LK3").
            replace("Y", "CG1c");

        errorHandler.removeError(lk3cg1, message);
        if (startdate > enddate) {
            errorHandler.addError(lk3cg1, message);
        }
    }
})


util.listen(cg1cg3, "myChange", () => {
    if (util.inputsHaveValue(cg1cg3)) {
        const startdate = util.standardDate(util.htmlElement("cg3b").value);
        const enddate = util.standardDate(util.htmlElement("cg1c").value);

        const message = translations['must_be_earlier'].
            replace("X", "CG3b").
            replace("Y", "CG1c");

        errorHandler.removeError(cg1cg3, message);
        if (startdate > enddate) {
            errorHandler.addError(cg1cg3, message);
        }
    }
});


util.listen(cg3blk3, "myChange", () => {
    if (util.inputsHaveValue(cg3blk3)) {
        const startdate = util.standardDate(util.htmlElement("cg3b").value);
        const enddate = util.standardDate(util.htmlElement("lk3").value);

        const message = translations['must_be_earlier'].
            replace("X", "CG3b").
            replace("Y", "LK3");

        errorHandler.removeError(cg3blk3, message);
        if (startdate > enddate) {
            errorHandler.addError(cg3blk3, message);
        }
    }
});


util.listen("sa1", "myChange", () => {

    const lk3 = util.htmlElement("lk3").value;
    const sh1 = Number(util.htmlElement("sh1").value);

    const sa1 = util.htmlElement("sa1").value;
    let good = true;
    try {
        $.datepicker.parseDate(
            jQueryDatepickerConfig.dateFormat,
            sa1
        )
    } catch (error) {
        good = false;
    }

    if (good && lk3 != "-9" && sa1 != "-9") {
        const age = util.diffDates(
            util.standardDate(lk3),
            util.standardDate(sa1)
        )

        if (!Number.isNaN(age)) {
            const message = translations['must_be_later_or_equal'].
                replace("X", "LK3").
                replace("Y", "SA1");

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

    if (sh1 > 0) {
        if (good) {
            util.htmlElement("sh3_s1a").value = sa1;
            instrument.questions.sh3_s1a.value = sa1;
        } else {
            util.htmlElement("sh3_s1a").value = ""
            instrument.questions.sh3_s1a.value = "-7";
        }

        util.trigger("sh3_s1a", "change");
    } else {
        util.trigger("sh3_csa", "change");
    }

    util.trigger("sa1a", "change");
});


util.listen("sa1a", "myChange", () => {
    check_sa1a(Number(instrument.questions.sa1a.value));
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
    const sh1value = Number(util.htmlElement('sh1').value);

    const message = translations['Value_up_to_ten'];
    errorHandler.removeError('sh1', message);

    if (sh1value > 10) {
        errorHandler.addError('sh1', message);
    }
    else {
        instrument.questions["sh1"].value = sh1value.toString();
        if (sh1value == 0) {
            util.setValue("sh3_csa", util.htmlElement("sa1").value);
            util.htmlElement("sh3_s1a").value = "";
            instrument.questions.sh3_s1a.value = "-7";
        } else {
            util.setValue("sh3_s1a", util.htmlElement("sa1").value);
            if (util.htmlElement("sa1").value == util.htmlElement("sh3_csa").value) {
                util.htmlElement("sh3_csa").value = "";
                util.htmlElement("sh3_csf").value = "";
                instrument.questions.sh3_csa.value = "-9";
                instrument.questions.sh3_csf.value = "-7"; // camp auto
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
                    util.htmlElement(timespent).value = "";
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

            if (monthdiff != "NaN") {
                util.htmlElement("sh3_csf").value = monthdiff;
                instrument.questions.sh3_csf.value = monthdiff;
            }

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

    const check = function () {
        const sh1 = Number(util.htmlElement("sh1").value);
        let endel = sh3_start_dates[index + 1];
        if (index + 1 == sh1) {
            endel = "sh3_csa";
        }
        const end = util.htmlElement(endel);
        if (util.inputsHaveValue([startel, endel])) {
            const startdate = util.standardDate(start.value);
            const enddate = util.standardDate(end.value);

            const message = translations['must_be_later_or_equal'].
                replace("X", startel.toUpperCase()).
                replace("Y", endel.toUpperCase());

            errorHandler.removeError([startel, endel], message);

            if (startdate > enddate) {
                errorHandler.addError([startel, endel], message);
            }
        }
    }

    util.listen(startel, "myChange", check);
    util.listen(sh3_start_dates[index + 1], "myChange", check);
});

util.listen("sh3_csa", "myChange", () => {
    const sh1 = Number(util.htmlElement("sh1").value);
    const startel = sh3_end_dates[sh1 - 1];
    const endel = "sh3_csa";
    if (sh1 > 0 && util.inputsHaveValue([startel, endel])) {
        const startdate = util.standardDate(util.htmlElement(startel).value);
        const enddate = util.standardDate((util.htmlElement(endel).value));

        const message = translations['must_be_later_or_equal'].
            replace("X", startel.toUpperCase()).
            replace("Y", endel.toUpperCase());

        errorHandler.removeError([startel, endel], message);

        if (startdate > enddate) {
            errorHandler.addError([startel, endel], message);
        }
    }
})


util.listen("cmgt1a", "myChange", () => {
    const months = util.diffDates(
        util.standardDate(instrument.questions.cmgt1a.value),
        new Date("2024-05-01"),
        "months"
    )

    util.setValue("cmgt1b", months.toString());
})


util.listen(cmgtsa, "myChange", () => {
    if (util.inputsHaveValue(cmgtsa)) {
        const cmgt1a = util.htmlElement("cmgt1a").value;
        const sa1 = util.htmlElement("sa1").value;

        const message = translations['must_be_later_or_equal'].replace("X", "SA1").replace("Y", "CMGT1A");

        errorHandler.removeError(cmgtsa, message);

        if (util.standardDate(sa1) > util.standardDate(cmgt1a)) {
            errorHandler.addError(cmgtsa, message);
        }
    }
})


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


util.listen("qfam3_6", "change", () => {
    if (util.htmlElement("qfam3_6").checked) {
        util.htmlElement("qfam3_9").checked = false;
        instrument.questions["qfam3_9"].value = "0";
        qfam3.forEach((el) => {
            util.htmlElement(el).checked = false;
            instrument.questions[el].value = "0";
        })
    }
})

util.listen("qfam3_9", "change", () => {
    if (util.htmlElement("qfam3_9").checked) {
        util.htmlElement("qfam3_6").checked = false;
        instrument.questions["qfam3_6"].value = "0";
        qfam3.forEach((el) => {
            util.htmlElement(el).checked = false;
            instrument.questions[el].value = "0";
        })
    }
})

util.listen(qfam3, "change", () => {
    if (util.makeSumFromElements(qfam3) > 0) {
        util.htmlElement("qfam3_9").checked = false;
        util.htmlElement("qfam3_6").checked = false;
        instrument.questions["qfam3_6"].value = "0";
        instrument.questions["qfam3_9"].value = "0";
    }
});


util.listen("sh5", "change", () => {
    const sh3_csb_values = util.selectValues("sh3_csb");
    // sh3_csb este camp de tip auto, deci nu se poate -9 Choose
    if (sh3_csb_values.indexOf("--") < 0) {
        util.addOption("sh3_csb", "--", "--");
    }

    util.setValue("sh3_csb", "--");
    const value = util.htmlElement("sh5").value;
    if (servicesCodes.indexOf(value) >= 0) {
        const type = services[value].type;
        if (util.selectValues("sh3_csb").indexOf(type) >= 0) {
            util.setValue("sh3_csb", type);
        }
    }
})

util.listen(lk3cm3, "myChange", () => {
    if (util.inputsHaveValue(lk3cm3)) {
        const mother = util.htmlElement("cm3").value;
        const child = util.htmlElement("lk3").value;

        const message = translations['must_be_later_or_equal'].replace("X", "CM3").replace("Y", "LK3");

        errorHandler.removeError(lk3cm3, message);
        if (util.standardDate(mother) >= util.standardDate(child)) {
            errorHandler.addError(lk3cm3, message);
        }
    }
})

util.listen(lk3ct3, "myChange", () => {
    if (util.inputsHaveValue(lk3ct3)) {
        const father = util.htmlElement("ct3").value;
        const child = util.htmlElement("lk3").value;

        const message = translations['must_be_later_or_equal'].replace("X", "CT3").replace("Y", "LK3");

        errorHandler.removeError(lk3ct3, message);
        if (util.standardDate(father) >= util.standardDate(child)) {
            errorHandler.addError(lk3ct3, message);
        }
    }
})

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

util.listen("cm3a_out", "myChange", () => {
    if (Number(instrument.questions.cm3a_out.value) > 0) {
        util.htmlElement("cm3a_dk").checked = false;
        instrument.questions.cm3a_dk.value = "0";
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




util.listen([...ewm1, ...ewm2, ...ewm3, ...ewm4], "myChange", () => {
    let suma = 0;
    ["ewm1", "ewm2", "ewm3", "ewm4"].forEach((item) => {
        const value = Number(instrument.questions[item].value);
        if (value > 0) {
            suma += value;
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