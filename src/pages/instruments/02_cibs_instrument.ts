import { ipcRenderer } from "electron";
import { questions, questionsOrder } from "./02_cibs_variables";
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

import { KeyString, KeyStringNumber, regions, districts, settlements, mahallas } from "../../libraries/administrative";

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
// let regionCode = '';

const general_dates = [
    'data', 'lk3', 'cm3', 'ct3', 'cg3b', 'sa1'
];


const regElements =  ["reg", "lk14b", "sa3a", "sa5r", "cm3b", "cm11c", "ct3b", "ct11c", "cg11c", "qeduc1ar", "qeduc2ar"];
const disElements =  ["dis", "lk14c", "sa3b", "sa5d", "cm3c", "cm11d", "ct3c", "ct11d", "cg11d", "qeduc1ad", "qeduc2ad"];
const setElements =  ["",    "lk14d", "sa3c", "",     "cm3d", "cm11e", "ct3d", "ct11e", "cg11e", "",         ""        ];
const mahElements =  ["",    "lk14m", "sa3m", "",     "cm3m", "cm11m", "ct3m", "ct11m", "cg11m", "",         ""        ];
const typeElements = ["",    "lk14e", "sa3d", "",     "cm3e", "cm11f", "ct3e", "ct11f", "cg11f", "",         ""        ];

const nonemptysets: string[] = [];
for (let i = 0; i < setElements.length; i++) {
    if (setElements[i] != "") {
        nonemptysets.push(setElements[i]);
    }
}

// regiunea este intotdeauna inaintea districtului
// un event de change pe regiune populeaza districtul, iar un event
// de change pe district populeaza settlement-ul
const validate = [...regElements, ...disElements, ...nonemptysets];

let regionCode = '';
let userUUID = '';
let userRole = '';
let institutionType = '';
let institutionCode = '';
let institution_code = '';
let filters: {
    institutionType: string;
    institution: string;
    region: string;
};

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



export const instrument2 = {
    init: async () => {

        $.datepicker.setDefaults($.datepicker.regional[lang]);
        const jQueryDatepickerConfig = {
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            minDate: "01/01/2000",
            maxDate: "30/04/2024",
            yearRange: "c-100:c+10",
            firstDay: 1,
            onSelect: function () {
                util.trigger(this.id, "change");
            }
        };

        general_dates.forEach((el) => {
            const config = { ...jQueryDatepickerConfig };
            if (el == "data") {
                config.minDate = "01/04/2024";
                config.maxDate = "31/12/2025";
            } else if (el == "cm3") {
                config.minDate = "01/01/1950";
                config.maxDate = "31/12/2023";
            } else if (el == "ct3" || el == "cg3b") {
                config.minDate = "01/01/1930";
                config.maxDate = "31/12/2023";
            } else if (el == "lk3") {
                config.minDate = "01/01/1990";
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
                    instrument.questions[el].value = '-9';
                    errorHandler.addError(el, translations['invalid_date']);
                }
            });
        });

        filters = JSON.parse(sessionStorage.getItem('filters'));

        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);
            services = args.services;
            servicesCodes = Object.keys(services);
            insons = args.insons;

            userRole = args.userData.role_code;
            institution_code = (filters && filters.institution) ? filters.institution : args.userData.institution_code;
            const inson_user = Object.keys(insons).indexOf(institution_code) >= 0;

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

                    if (item.variable == "cmnt2") {
                        util.trigger("cmnt2-1", "myChange");
                    }

                    if (item.variable == "qeduc2") {
                        check_sa1a(Number(instrument.questions.sa1a.value));
                    }

                    if (item.variable == "qeduc1ad") {
                        if (Number(instrument.questions.qeduc1a.value) > 0 && Number(instrument.questions.qeduc1ad.value) > 0) {
                            util.trigger("qeduc1ad", "myChange");
                        }
                    }

                    if (item.variable == "qeduc2ad") {
                        if (Number(instrument.questions.qeduc2a.value) > 0 && Number(instrument.questions.qeduc2ad.value) > 0) {
                            util.trigger("qeduc2ad", "myChange");
                        }
                    }
                }
            }

            util.setValue("data", util.customDate());

            if (args.userData) {
                // set default values, if new instrument
                if (!args.questions) {
                    let institution_name = "--";
                    if (inson_user) {
                        const inson = { ...insons[args.userData.institution_code] } as KeyStringNumber;
                        institution_name = inson['name_' + lang].toString();
                        util.setValue("reg", inson['region'].toString());
                        util.setValue("dis", inson['district'].toString());
                    }
                    else {
                        const serviciu = { ...services[institution_code] } as KeyStringNumber;
                        institution_name = serviciu['name_' + lang].toString();
                        util.setValue("reg", serviciu['region'].toString());
                        util.setValue("dis", serviciu['district'].toString());
                    }
                    util.setValue("omr8", institution_name);
                    util.setValue("omr9", institution_code);

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
                institutionCode = institution_code;
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
            util.focus("omr1");
            util.blur("omr1");
        });
    }
}

const lk22_2 = ['lk22_2_1', 'lk22_2_2', 'lk22_2_3', 'lk22_2_4', 'lk22_2_5'];

const validateChestionar = (_questions: QuestionObjectType) => {

    util.trigger("cmnt2-1", "myChange");

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
    if (userRole != constant.ROLE_REGIONAL && userRole != constant.ROLE_NATIONAL) {
        obj.extras = {
            region_code: regionCode,
            user_uuid: userUUID,
            institution_type: institutionType,
            institution_code: institutionCode,
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

        if (regElements[x] == "qeduc1ar") {
            util.resetSelect("qeduc1a1", "-9", translations['t_choose']);
        }

        if (regElements[x] == "qeduc2ar") {
            util.resetSelect("qeduc2a1", "-9", translations['t_choose']);
        }

        if (setElements[x] != "") {
            util.resetSelect(setElements[x], "-9", translations['t_choose']);
            instrument.questions[setElements[x]].value = "-7";
        }

        if (mahElements[x] != "") {
            util.resetSelect(mahElements[x], "-9", translations['t_choose']);
            instrument.questions[mahElements[x]].value = "-7";
        }
    })

    util.listen(disElements[x], "change", function () {

        const selectedDistrict = util.htmlElement(disElements[x]).value;

        if (setElements[x] != "") {
            util.resetSelect(setElements[x], "-9", translations['t_choose']);
            instrument.questions[setElements[x]].value = "-9";

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

        if (disElements[x] == "sa5d") {
            const institutie = "sa5i";
            util.resetSelect(institutie, "-9", translations['t_choose']);

            if (Number(selectedDistrict) > 0) {

                for (let i = 0; i < servicesCodes.length; i++) {
                    const code = servicesCodes[i];
                    if (services[code].district == selectedDistrict) {
                        if (Number(services[code].type) < 20) {
                            let service_included = true;
                            if (insons[institution_code]) {
                                service_included = insons[institution_code].services.includes(code);
                            }

                            if (service_included) {
                                const serviciu = { ...services[code] } as KeyStringNumber;
                                util.addOption(
                                    institutie,
                                    code,
                                    code + ": " + serviciu['name_' + lang]
                                )
                            }
                        }
                    }
                }
            }

            const optgroup = document.createElement("optgroup");
            const option999 = document.createElement("option");
            option999.value = '999';
            option999.text = '999: ' + translations['not_in_registry'];
            optgroup.appendChild(option999);
            util.htmlElement(institutie).appendChild(optgroup);
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


util.listen("lk3", "myChange", () => {
    if (instrument.questions.lk3.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.lk3.value),
            new Date("2024-05-01")
        )

        util.setValue("lk13a", age.toString());
    }
});



util.listen("sa1", "myChange", () => {
    const sa1 = util.standardDate(instrument.questions.sa1.value);
    const years = util.diffDates(sa1, new Date("2024-05-01"), "years")
    const months = util.diffDates(sa1, new Date("2024-05-01"), "months")

    util.setValue('sa1y', years.toString());
    util.setValue('sa1m', (months % 12).toString());

    if (util.inputsHaveValue(["sa1", "lk3"])) {
        const age = util.diffDates(
            util.standardDate(instrument.questions.lk3.value),
            sa1
        )

        if (!Number.isNaN(age)) {
            util.setValue("sa1a", age.toString());
        }
    }
});

util.listen("sa1a", "myChange", () => {
    check_sa1a(Number(instrument.questions.sa1a.value));
});


const qfam = [
    'qfam2_1', 'qfam2_2', 'qfam2_3', 'qfam2_4', 'qfam2_5',
    'qfam2_6', 'qfam2_7', 'qfam2_8', 'qfam2_9'
]

util.listen("qfam2_90", "change", () => {
    if (util.htmlElement("qfam2_90").checked) {
        qfam.forEach((el) => {
            util.htmlElement(el).checked = false;
            instrument.questions[el].value = "0";
        })
    }
})

util.listen(qfam, "change", () => {
    if (util.makeSumFromElements(qfam) > 0) {
        util.htmlElement("qfam2_90").checked = false;
        instrument.questions["qfam2_90"].value = "0";
    }
});



const prehealth = [
    "prehealth5a1", "prehealth5a2", "prehealth5a3", "prehealth5a4", "prehealth5a5",
    "prehealth5a6", "prehealth5a7", "prehealth5a8", "prehealth5a9"
]

util.listen("prehealth5a90", "change", () => {
    if (util.htmlElement("prehealth5a90").checked) {
        prehealth.forEach((el) => {
            util.htmlElement(el).checked = false;
            instrument.questions[el].value = "0";
        })
    }
})

util.listen(prehealth, "change", () => {
    if (util.makeSumFromElements(prehealth) > 0) {
        util.htmlElement("prehealth5a90").checked = false;
        instrument.questions["prehealth5a90"].value = "0";
    }
});



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


const sk3 = ["sk3_1", "sk3_2"]
util.listen(sk3, "myChange", () => {
    if (util.inputsHaveValue(sk3)) {
        const sk3_1 = util.htmlElement("sk3_1");
        const sk3_2 = util.htmlElement("sk3_2");

        instrument.questions["sk3_1"].value = sk3_1.value;
        instrument.questions["sk3_2"].value = sk3_2.value;

        const message = translations['At_least_one_brother_or_sister'];
        errorHandler.removeError(sk3, message);

        if (Number(util.makeInputSumDecimal(sk3)) == 0) {
            errorHandler.addError(sk3, message);
        }
    }
});



const lk3cm3 = ["lk3", "cm3"];
util.listen(lk3cm3, "myChange", () => {
    if (util.inputsHaveValue(lk3cm3)) {
        const mother = util.htmlElement("cm3").value;
        const child = util.htmlElement("lk3").value;

        instrument.questions["cm3"].value = mother;
        instrument.questions["lk3"].value = child;

        const message = translations['must_be_earlier'].replace("X", "CM3").replace("Y", "LK3");
        errorHandler.removeError(lk3cm3, message);

        if (util.standardDate(mother) >= util.standardDate(child)) {
            errorHandler.addError(lk3cm3, message);
        }
    }
})


const lk3ct3 = ["lk3", "ct3"];
util.listen(lk3ct3, "myChange", () => {
    if (util.inputsHaveValue(lk3ct3)) {
        const father = util.htmlElement("ct3").value;
        const child = util.htmlElement("lk3").value;

        instrument.questions["ct3"].value = father;
        instrument.questions["lk3"].value = child;

        const message = translations['must_be_earlier'].replace("X", "CT3").replace("Y", "LK3");
        errorHandler.removeError(lk3ct3, message);

        if (util.standardDate(father) >= util.standardDate(child)) {
            errorHandler.addError(lk3ct3, message);
        }
    }
})





const lk3cg3b = ["lk3", "cg3b"];
util.listen(lk3cg3b, "myChange", () => {
    if (util.inputsHaveValue(lk3cg3b)) {
        const mother = util.htmlElement("cg3b").value;
        const child = util.htmlElement("lk3").value;

        instrument.questions["cg3b"].value = mother;
        instrument.questions["lk3"].value = child;

        const message = translations['must_be_earlier'].replace("X", "CG3b").replace("Y", "LK3");
        errorHandler.removeError(lk3cg3b, message);

        if (util.standardDate(mother) >= util.standardDate(child)) {
            errorHandler.addError(lk3cg3b, message);
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


const lk3sa1 = ["lk3", "sa1"];
util.listen(lk3sa1, "myChange", () => {
    if (util.inputsHaveValue(lk3sa1)) {
        const lk3 = util.htmlElement("lk3").value;
        const sa1 = util.htmlElement("sa1").value;

        const message = translations['must_be_later_or_equal'].replace("X", "LK3").replace("Y", "SA1");

        errorHandler.removeError(lk3sa1, message);

        if (util.standardDate(lk3) > util.standardDate(sa1)) {
            errorHandler.addError(lk3sa1, message);
        }
    }
})

util.listen("sch2", "myChange", () => {
    const sch2 = util.htmlElement("sch2").value;
    const message = "SCH2 <= 9";
    errorHandler.removeError("sch2", message);
    if (Number(sch2) > 9) {
        errorHandler.addError("sch2", message);
        instrument.questions["sch2"].value = "-9";
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



// util.listen("sa5d", "myChange", () => {
//     const selectedDistrict = util.htmlElement("sa5d").value;
//     const institutie = util.htmlElement("qeduc1a1");

//     util.resetSelect("qeduc1a1", "-9", translations['t_choose']);

//     const serv: string[] = [];
//     for (let i = 0; i < servicesCodes.length; i++) {
//         if (services[servicesCodes[i]].district == selectedDistrict) {
//             serv.push(services[servicesCodes[i]].code);
//         }
//     }

//     if (serv.length > 0) {
//         for (let i = 0; i < serv.length; i++) {
//             if (Number(services[serv[i]].type) < 20) {
//                 let service_included = true;
//                 if (insons[institutionCode]) {
//                     service_included = insons[institutionCode].services.includes(serv[i]);
//                 }

//                 if (service_included) {
//                     const option = document.createElement("option");
//                     option.value = serv[i];
//                     const serviciu = { ...services[serv[i]] } as KeyStringNumber;
//                     option.text = serv[i] + ': ' + serviciu['name_' + lang];
//                     institutie.appendChild(option);
//                 }
//             }
//         }
//     }

//     const optgroup = document.createElement("optgroup");
//     const option999 = document.createElement("option");
//     option999.value = '999';
//     option999.text = '999: ' + translations['not_in_registry'];
//     optgroup.appendChild(option999);
//     institutie.appendChild(optgroup);
// })

const qeduc1a = util.radioIDs("qeduc1a");
util.listen(qeduc1a, "myChange", () => {
    if (Number(instrument.questions.qeduc1ad.value) > 0) {
        util.trigger("qeduc1ad", "myChange");
    }
})

util.listen("qeduc1ad", "myChange", () => {
    const qeduc1a = Number(instrument.questions.qeduc1a.value);
    const selectedDistrict = util.htmlElement("qeduc1ad").value;

    util.resetSelect("qeduc1a1", "-9", translations['t_choose']);

    const serv: string[] = [];
    for (let i = 0; i < servicesCodes.length; i++) {
        if (services[servicesCodes[i]].district == selectedDistrict) {
            serv.push(services[servicesCodes[i]].code);
        }
    }

    if (serv.length > 0) {
        for (let i = 0; i < serv.length; i++) {
            const type = Number(services[serv[i]].type);
            let service_included = true;

            if (qeduc1a == 2 && type != 31) {
                service_included = false;
            }

            if (service_included) {
                const serviciu = { ...services[serv[i]] } as KeyStringNumber;
                util.addOption(
                    "qeduc1a1",
                    serv[i],
                    serv[i] + ': ' + serviciu['name_' + lang]
                );
            }
        }
    }

    const optgroup = document.createElement("optgroup");
    const option999 = document.createElement("option");
    option999.value = '999';
    option999.text = '999: ' + translations['not_in_registry'];
    optgroup.appendChild(option999);
    util.htmlElement("qeduc1a1").appendChild(optgroup);
})


const qeduc2a = util.radioIDs("qeduc2a");
util.listen(qeduc2a, "myChange", () => {
    if (Number(instrument.questions.qeduc2ad.value) > 0) {
        util.trigger("qeduc2ad", "myChange");
    }
})

util.listen("qeduc2ad", "myChange", () => {
    const qeduc2a = Number(instrument.questions.qeduc2a.value);
    const selectedDistrict = util.htmlElement("qeduc2ad").value;

    util.resetSelect("qeduc2a1", "-9", translations['t_choose']);

    const serv: string[] = [];
    for (let i = 0; i < servicesCodes.length; i++) {
        if (services[servicesCodes[i]].district == selectedDistrict) {
            serv.push(services[servicesCodes[i]].code);
        }
    }

    if (serv.length > 0) {
        for (let i = 0; i < serv.length; i++) {
            const type = Number(services[serv[i]].type);
            let service_included = true;

            if (qeduc2a == 2 && type != 32) {
                service_included = false;
            }

            if (qeduc2a == 3 && (type < 21 || type > 28)) {
                service_included = false;
            }

            if (qeduc2a == 4 && type != 33) {
                service_included = false;
            }

            if (qeduc2a == 5 && type != 34) {
                service_included = false;
            }

            if (service_included) {
                const serviciu = { ...services[serv[i]] } as KeyStringNumber;
                util.addOption(
                    "qeduc2a1",
                    serv[i],
                    serv[i] + ': ' + serviciu['name_' + lang]
                );
            }
        }
    }

    const optgroup = document.createElement("optgroup");
    const option999 = document.createElement("option");
    option999.value = '999';
    option999.text = '999: ' + translations['not_in_registry'];
    optgroup.appendChild(option999);
    util.htmlElement("qeduc2a1").appendChild(optgroup);
})

util.radioIDs("cmnt2").forEach((item) => {
    util.listen(item, "myChange", () => {
        instrument.questions.cmnt2a2.skip = false;
        instrument.questions.cmnt2a3.skip = false;
        if (instrument.questions.cmnt2.value == "1") {
            instrument.questions.cmnt2a2.skip = true;
            instrument.questions.cmnt2a3.skip = true;
        }
    })
})
