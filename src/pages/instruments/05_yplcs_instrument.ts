import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./05_yplcs_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler} from "../../libraries/validation_helpers";
import * as DI from "../../interfaces/database";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { KeyString, regions, districts, settlements, settlement_types } from "../../libraries/administrative";
import * as en from "../../locales/en.json";
import * as uz from "../../locales/uz.json";
import * as ru from "../../locales/ru.json";
const locales: { [key: string]: typeof en | typeof uz | typeof ru} = {
    'en': en,
    'uz': uz,
    'ru': ru
}

const lang = localStorage.getItem("language");
let services: {[key: string]: DI.Institution};

const regElements  = ["pi4b", "pi6r", "pi9c"];
const disElements  = ["pi4c", "pi6d", "pi9d"];
const setElements  = ["pi4d", "",     "pi9h"];
const typeElements = ["pi4e", "",     "pi9i"];

let regionCode = '';
let institutionType = '';

export const instrument5 = {
    init: async () => {

        const flatpickrConfig: {
            enableTime: boolean;
            dateFormat: string;
            minDate: string;
            maxDate: string;
            locale?: typeof Russian | typeof UzbekLatin
        } = {
            enableTime: false,
            dateFormat: "d/m/Y",
            minDate: "01/01/1990",
            maxDate: '30/04/2024'
        }

        if (lang == "uz") {
            flatpickrConfig.locale = UzbekLatin;
        }

        if (lang == "ru") {
            flatpickrConfig.locale = Russian;
        }

        flatpickr(util.htmlElement('pi3'), flatpickrConfig);
        flatpickrConfig.minDate = "01/01/2023";
        flatpickr(util.htmlElement('pi7'), flatpickrConfig);


        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);
            services = args.services;

            const pi6 = util.htmlElement("pi6");
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
                    if (regElements[x] == "pi6r") {
                        pi6.innerHTML = "";
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
                                    const dis_type = settlement_types[districts[selectedDistrict].type];
                                    util.setValue(typeElements[x], "" + dis_type[lang as keyof typeof dis_type]);
                                }
                                instrument.questions[setElements[x]].skip = true;
                                instrument.questions[setElements[x]].value = '-7';
                                util.htmlElement(setElements[x]).disabled = true;
                            }
                        } else {

                            pi6.innerHTML = "";
                            const serv = districts[selectedDistrict].services;
                            pi6.appendChild(option);

                            if (serv.length > 0) {
                                for (let i = 0; i < serv.length; i++) {
                                    if (services[serv[i]].type != "15") {
                                        const option = document.createElement("option");
                                        option.value = serv[i];
                                        option.text = serv[i] + ': ' + services[serv[i]].name;
                                        pi6.appendChild(option);
                                    }
                                }
                            }

                            const optgroup = document.createElement("optgroup");
                            const option999 = document.createElement("option");
                            option999.value = '999';
                            option999.text = '999: ' + locales[lang]['not_in_registry'];
                            optgroup.appendChild(option999);
                            pi6.appendChild(optgroup);

                        }
                    }
                })
            }

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.instrument && args.instrument.length > 0) {
                instrumentID = parseInt(args.instrument[0].id);

                for (const item of args.instrument) {

                    const index = [...regElements, ...disElements].indexOf(item.variable);
                    // regiunea este intotdeauna inaintea districtului
                    // un event de change pe regiune populeaza districtul, iar un event
                    // de change pe district populeaza settlement-ul
                                                                                // trigger change event
                    instrument.seteazaValoareElement(item.variable, item.value, index >= 0);
                }
            }

            // set default values, IRRESPECTIVE of the instrument

            if (args.institutionData) {

                if (Object.keys(regions).indexOf(args.institutionData.region) >= 0) {
                    util.setValue('reg', "" + (regions[args.institutionData.region] as KeyString)[lang]);
                }

                if (Object.keys(districts).indexOf(args.institutionData.district) >= 0) {
                    util.setValue('dis', "" + (districts[args.institutionData.district] as KeyString)[lang]);
                }

                util.setValue("omr9", args.institutionData.name);
                institutionType = args.institutionData.type;
            }

            // two digit day & month
            util.setValue("data", util.customDate());

            if (args.userData) {
                // set default values for user
                util.setValue("omr1", args.userData.name);
                util.setValue("omr2", args.userData.patronymics);
                util.setValue("omr3", args.userData.surname);
                util.setValue("omr4", args.userData.job_title);
                util.setValue("omr5", args.userData.profession);
                util.setValue("omr6", args.userData.phone);
                util.setValue("omr7", args.userData.email);
                util.setValue("omr9", args.userData.institution_name);
                regionCode = args.userData.region_code;
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.pi1.value == '-9' || _questions.pi1a.value == '-9' || _questions.pi1b.value == '-9' || _questions.pi1c.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: PI1, PI1A, PI1B, PI1C!" });
        const elPin = document.getElementById("pi1");
        elPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            elPin.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "yplcs";
    obj.extras = {
        region_code: regionCode,
        institution_type: institutionType,
    }
    ipcRenderer.send("saveInstrument", obj);
}


// validari custom

util.listen("pi3", "myChange", () => {
    if (instrument.questions.pi3.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.pi3.value),
            new Date(2024, 5, 1)
        )

        util.setValue("pi3a", age.toString());
    }
});

util.listen("pi4d", "change", () => {
    const value = util.htmlElement("pi4d").value;
    util.setValue("pi4e", "" + (settlement_types[settlements[value].type] as KeyString)[lang]);
})


for (let i = 0; i < setElements.length; i++) {
    if (typeElements[i] != "") {
        util.listen(setElements[i], "change", () => {
            const value = util.htmlElement(setElements[i]).value;
            const set_type = settlement_types[settlements[value].type];
            util.setValue(typeElements[i], "" + (set_type as KeyString)[lang]);
        })
    }
}

// Set service type
util.listen("pi6", "change", function () {
    util.setValue("pi6c", "-9");
    const value = util.htmlElement("pi6").value;
    const serv_codes = Object.keys(services);
    if (serv_codes.indexOf(value) >= 0) {
        const type = services[value].type;
        if (["11", "12", "13", "14", "21", "22", "23", "24", "25", "26"].indexOf(type) >= 0) {
            util.setValue("pi6c", type);
        }
    }
})

const pi10 = ['pi10a', 'pi10b'];
util.listen(pi10, "change", () => {
    const message = 'PI10b <= PI10a';
    errorHandler.removeError(pi10, message)
    if (util.getInputDecimalValue('pi10b') > util.getInputDecimalValue('pi10b')) {
        errorHandler.addError(pi10, message);
    }
})

const lv = ['lv2_2', 'lv2_3', 'lv2_4', 'lv2_5', 'lv2_6', 'lv2_7', 'lv2_8', 'lv2_9']
util.listen("lv2_1", "change", () => {
    if (util.htmlElement("lv2_1").checked) {
        lv.forEach((el) => {
            util.htmlElement(el).checked = false;
            instrument.questions[el].value = "0";
        })
    }
})

util.listen(lv, "change", () => {
    if (util.makeSumFromElements(lv) > 0) {
        util.htmlElement("lv2_1").checked = false;
        instrument.questions["lv2_1"].value = "0";
    }
});

const ls = ["ls2_1", "ls2_2", "ls2_3", "ls2_4", "ls2_5", "ls2_6", "ls2_7", "ls2_8", "ls2_9", "ls2_10"];
util.listen("ls2_11", "change", () => {
    if (util.htmlElement("ls2_11").checked) {
        ls.forEach((el) => {
            util.htmlElement(el).checked = false;
            instrument.questions[el].value = "0";
        })
    }
})

util.listen(ls, "change", () => {
    if (util.makeSumFromElements(ls) > 0) {
        util.htmlElement("ls2_11").checked = false;
        instrument.questions["ls2_11"].value = "0";
    }
});

util.listen("pi8", "myChange", () => {
    const message = "PI8 <= 230";
    errorHandler.removeError("pi8", message);
    if (Number(instrument.questions.pi8.value) > 230) {
        errorHandler.addError("pi8", message);
    }
})