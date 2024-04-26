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
import { KeyString, services, regions, districts, settlements, settlement_types } from "../../libraries/administrative";

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
    'data', 'lk3', 'cm3', 'ct3', 'cg1c', 'cg3b', 'sa1'
];


const regElements  = ["lk14b", "sa3a", "cm3b", "cm11c", "ct11c", "cg11c"];
const disElements  = ["lk14c", "sa3b", "cm3c", "cm11d", "ct11d", "cg11d"];
const setElements  = ["lk14d", "", "cm3d", "cm11e", "ct11e", "cg11e"];
const typeElements = ["lk14e", "", "cm3e", "cm11f", "ct11f", "cg11f"];

export const instrument2 = {
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

        general_dates.forEach((el) => {
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

            flatpickr(element, config);
        });

        const sa5a = util.htmlElement("sa5a");
        const reg_codes = Object.keys(regions);
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
                option.text = reg_codes[i] + ": " + (regions[reg_codes[i]] as KeyString)[lang];
                reg_el.appendChild(option);
            }

            const dis_el = util.htmlElement(disElements[x]);
            const set_el = util.htmlElement(setElements[x]);

            util.listen(regElements[x], "change", function () {
                if (regElements[x] == "sa3a") {
                    sa5a.innerHTML = "";
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
                    option.text = locales[lang]['t_choose'];
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
                if (typeElements[x] != "") {
                    util.htmlElement(typeElements[x]).value = "";
                }
                const selectedDistrict = dis_el.value;

                if (setElements[x] != "") {
                    instrument.questions[setElements[x]].skip = false;
                    util.htmlElement(setElements[x]).disabled = false;
                    set_el.innerHTML = "";
                }

                if (Number(selectedDistrict) > 0) {
                    const option = document.createElement("option");
                    option.value = "-9";
                    option.text = locales[lang]['t_choose'];

                    if (setElements[x] != "") {
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
                                const dis_type = districts[selectedDistrict].type;
                                util.setValue(typeElements[x], "" + dis_type[lang as keyof typeof dis_type]);
                            }
                            instrument.questions[setElements[x]].skip = true;
                            instrument.questions[setElements[x]].value = '-7';
                            util.htmlElement(setElements[x]).disabled = true;
                        }
                    } else {
                        sa5a.innerHTML = "";
                        const serv = districts[selectedDistrict].services;
                        sa5a.appendChild(option);

                        if (serv.length > 0) {
                            for (let i = 0; i < serv.length; i++) {
                                if (services[serv[i]].type != "") {
                                    const option = document.createElement("option");
                                    option.value = serv[i];
                                    option.text = serv[i] + ': ' + services[serv[i]].name;
                                    sa5a.appendChild(option);
                                }
                            }
                        }

                        const optgroup = document.createElement("optgroup");
                        const option999 = document.createElement("option");
                        option999.value = '999';
                        option999.text = '999: ' + locales[lang]['not_in_registry'];
                        optgroup.appendChild(option999);
                        sa5a.appendChild(optgroup);

                    }
                }
            })
        }

        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);

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
                }
            }

            // set default values for user, IRRESPECTIVE of the instrument

            if (args.institutionData) {

                if (Object.keys(regions).indexOf(args.institutionData.region) >= 0) {
                    util.setValue('reg', "" + (regions[args.institutionData.region] as KeyString)[lang]);
                }

                if (Object.keys(districts).indexOf(args.institutionData.district) >= 0) {
                    util.setValue('dis', "" + (districts[args.institutionData.district] as KeyString)[lang]);
                }
            }

            util.setValue("data", util.customDate());

            if (args.userData) {
                util.setValue('omr1', args.userData.first_name);
                util.setValue('omr2', args.userData.patronymics);
                util.setValue('omr3', args.userData.last_name);
                util.setValue('omr4', args.userData.position);
                util.setValue('omr5', args.userData.profession);
                util.setValue('omr6', args.userData.phone);
                util.setValue('omr7', args.userData.email);
                // TODO: de adaugat astea trei in userData
                // util.setValue('omr8', args.userData.work);
                // util.setValue('omr9', args.userData.institution);
                // util.setValue('omr10', args.userData.type);
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

    // if (_questions.lk22_1.value == "1" && !check_lk22_2()) {
    //     return false;
    // }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "cibs";
    ipcRenderer.send("saveInstrument", obj);
}


// settlement type
for (let i = 0; i < setElements.length; i++) {
    if (setElements[i] != "") {
        util.listen(setElements[i], "change", () => {
            const value = util.htmlElement(setElements[i]).value;
            const set_type = settlement_types[settlements[value].type];
            util.setValue(typeElements[i], (set_type as KeyString)[lang].toString());
        })
    }
}


util.listen("lk3", "myChange", () => {
    if (instrument.questions.lk3.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.lk3.value),
            new Date(2024, 5, 1)
        )

        util.setValue("lk13a", age.toString());
        util.trigger("sa1", "change");
    }
});



util.listen("sa1", "myChange", () => {
    if (Number(instrument.questions.lk3.value) > 0 && Number(instrument.questions.sa1.value) > 0) {
        const age = util.diffDates(
            util.standardDate(instrument.questions.lk3.value),
            util.standardDate(instrument.questions.sa1.value)
        )

        if (!Number.isNaN(age)) {
            util.setValue("sa1a", age.toString());
        }

    }

    const years = util.diffDates(
        util.standardDate(instrument.questions.sa1.value),
        new Date(2024, 5, 1),
        "years"
    )

    const months = util.diffDates(
        util.standardDate(instrument.questions.sa1.value),
        new Date(2024, 5, 1),
        "months"
    )

    util.setValue('sa1y', years.toString());
    util.setValue('sa1m', months.toString());
});

util.listen("sa1a", "myChange", () => {
    const qeduc21 = util.htmlElement('qeduc2-1');
    const qeduc22 = util.htmlElement('qeduc2-2');
    const qeduc27disabled = util.htmlElement("qeduc2-7-disabled");
    const age = Number(instrument.questions["sa1a"].value);

    if (age < 7) {
        qeduc21.checked = false;
        qeduc22.checked = false;
        qeduc27disabled.checked = true;
        instrument.questions["qeduc2"].value = "7";
    }
    else {
        if (qeduc27disabled.checked) {
            instrument.questions["qeduc2"].value = "-9";
            qeduc27disabled.checked = false;
        }
    }
})



util.listen("sa5a", "change", function () {
    util.setValue("sa5c", "-9");
    const value = util.htmlElement("sa5a").value;
    const serv_codes = Object.keys(services);
    if (serv_codes.indexOf(value) >= 0) {
        const type = services[value].type;
        console.log(type, services[value].name);
        if (["11", "12", "13", "14", "15"].indexOf(type) >= 0) {
            util.setValue("sa5c", type);
        }
    }
})


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
    const lk22_2_7_1 = util.htmlElement("lk22_2_7-1");
    const lk22_2_7_0 = util.htmlElement("lk22_2_7-0");

    const suma = util.makeSumFromElements(lk22_2);

    const message = locales[lang]['At_least_one_disability'];
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

    return(suma > 0);
}

util.listen(lk22_2, "myChange", check_lk22_2);


const sk3 = ["sk3_1", "sk3_2"]
util.listen(sk3, "change", () => {
    if (util.inputsHaveValue(sk3)) {
        const suma = Number(util.makeInputSumDecimal(sk3));
        const message = locales[lang]['At_least_one_brother_or_sister'];
        const sk3_1 = util.htmlElement("sk3_1");
        const sk3_2 = util.htmlElement("sk3_2");
        errorHandler.removeError(sk3, message);

        if (suma == 0) {
            errorHandler.addError(sk3, message);
            instrument.questions["sk3_1"].value = "-9";
            instrument.questions["sk3_2"].value = "-9";
        } else {
            instrument.questions["sk3_1"].value = sk3_1.value;
            instrument.questions["sk3_2"].value = sk3_2.value;
        }
    }
});
