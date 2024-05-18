import { ipcRenderer } from "electron";
import { questions, questionsOrder } from "./05_yplcs_variables";
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

import { KeyString, KeyStringNumber, regions, districts, settlements, settlement_types } from "../../libraries/administrative";
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

const regElements = ["reg", "pi4b", "pi6r", "pi9c"];
const disElements = ["dis", "pi4c", "pi6d", "pi9d"];
const setElements = ["", "pi4d", "", "pi9h"];
const typeElements = ["", "pi4e", "", "pi9i"];

let regionCode = '';
let userUUID = '';
let institutionType = '';
let institutionCode = '';
let userRole = '';
let filters: DI.FiltersInterface;


export const instrument5 = {
    init: async () => {

        $.datepicker.setDefaults($.datepicker.regional[lang]);
        const jQueryDatepickerConfig = {
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            minDate: "01/01/1990",
            maxDate: "30/04/2024",
            yearRange: "c-100:c+10",
            firstDay: 1,
            onSelect: function () {
                util.trigger(this.id, "change");
            }
        };

        ["pi3", "pi7"].forEach((el) => {
            const config = { ...jQueryDatepickerConfig };

            if (el == 'pi3') {
                config.minDate = "01/01/2023";
            }

            $("#" + el).datepicker(config); util.listen(el, "change", () => {
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
        })

        filters = JSON.parse(sessionStorage.getItem('filters'));

        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);
            services = args.services;
            insons = args.insons;

            userRole = args.userData.role_code;
            const institution_code = (filters && filters.institution) ? filters.institution : args.userData.institution_code;

            const inson_user = Object.keys(insons).indexOf(institution_code) >= 0;
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

                const set_el = util.htmlElement(setElements[x]);

                util.listen(regElements[x], "change", function () {
                    if (regElements[x] == "pi6r") {
                        util.resetSelect("pi6i", "-9", translations['t_choose']);
                        instrument.questions.pi6i.value = "-7";
                    }

                    if (setElements[x] != "") {
                        util.resetSelect(setElements[x], "-9", translations['t_choose']);
                        instrument.questions[setElements[x]].value = "-7";
                    }

                    const selectedRegion = util.htmlElement(regElements[x]).value;
                    if (Number(selectedRegion) > 0) {
                        const dis_codes = regions[selectedRegion].districts;

                        util.resetSelect(disElements[x], "-9", translations['t_choose']);
                        for (let i = 0; i < dis_codes.length; i++) {
                            util.addOption(
                                disElements[x],
                                dis_codes[i],
                                dis_codes[i] + ": " + (districts[dis_codes[i]] as KeyString)[lang]
                            );
                        }
                    }
                })

                util.listen(disElements[x], "change", function () {
                    const selectedDistrict = util.htmlElement(disElements[x]).value;

                    if (setElements[x] != "") {
                        instrument.questions[setElements[x]].skip = false;
                        util.htmlElement(setElements[x]).disabled = false;
                        set_el.innerHTML = "";

                        if (Number(selectedDistrict) > 0) {

                            const set_codes = districts[selectedDistrict].settlements;

                            if (set_codes.length > 0) {
                                const option = document.createElement("option");
                                option.value = "-9";
                                option.text = locales[lang]['t_choose'];
                                set_el.appendChild(option);

                                for (let i = 0; i < set_codes.length; i++) {
                                    util.addOption(
                                        setElements[x],
                                        set_codes[i],
                                        set_codes[i] + ": " + (settlements[set_codes[i]] as KeyString)[lang]
                                    );
                                }
                            } else {
                                util.resetSelect(setElements[x], "--", "--");
                                instrument.questions[setElements[x]].skip = true;
                                util.htmlElement(setElements[x]).disabled = true;
                            }
                        }
                    }

                    if (disElements[x] == "pi6d") {
                        util.resetSelect("pi6i", "-9", translations['t_choose']);

                        const serv = districts[selectedDistrict].services;
                        if (serv.length > 0) {
                            for (let i = 0; i < serv.length; i++) {
                                const type = Number(services[serv[i]].type);
                                if ((type >= 12 && type <= 15) || (type >= 21 && type <= 28)) {
                                    const serviciu = { ...services[serv[i]] } as KeyStringNumber;
                                    util.addOption(
                                        "pi6i",
                                        serv[i],
                                        serv[i] + ": " + serviciu['name_' + lang]
                                    )
                                }
                            }
                        }

                        const optgroup = document.createElement("optgroup");
                        const option999 = document.createElement("option");
                        option999.value = '999';
                        option999.text = '999: ' + locales[lang]['not_in_registry'];
                        optgroup.appendChild(option999);
                        util.htmlElement("pi6i").appendChild(optgroup);
                    }
                })
            }

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionsOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {

                    const index = [...regElements, ...disElements].indexOf(item.variable);
                    // regiunea este intotdeauna inaintea districtului
                    // un event de change pe regiune populeaza districtul, iar un event
                    // de change pe district populeaza settlement-ul
                    // trigger change event
                    instrument.seteazaValoareElement(item.variable, item.value, index >= 0);
                }
            }

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("data", util.customDate());

            if (args.userData) {
                let institution_name = "--";

                if (inson_user) {
                    const inson = { ...insons[args.userData.institution_code] } as KeyStringNumber;
                    institution_name = "" + inson['name_' + lang];
                    util.setValue("reg", insons[institution_code].region);
                    util.setValue("dis", insons[institution_code].district);
                } else {
                    const serviciu = { ...services[institution_code] } as KeyStringNumber;
                    institution_name = "" + serviciu['name_' + lang];
                    util.setValue("reg", services[institution_code].region);
                    util.setValue("dis", services[institution_code].district);
                }

                util.setValue("omr9", institution_name);
                // set default values for user
                util.setValue("omr1", args.userData.name ? args.userData.name : "--");
                util.setValue("omr2", args.userData.patronymics ? args.userData.patronymics : "--");
                util.setValue("omr3", args.userData.surname ? args.userData.surname : "--");
                util.setValue("omr4", args.userData.job_title ? args.userData.job_title : "--");
                util.setValue("omr5", args.userData.profession ? args.userData.profession : "--");
                util.setValue("omr6", args.userData.phone ? args.userData.phone : "--");
                util.setValue("omr7", args.userData.email ? args.userData.email : "--");
                regionCode = args.userData.region_code;
                userUUID = args.userData.uuid;
                institutionType = args.userData.service_type_code;
                institutionCode = args.userData.institution_code;
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


// validari custom

util.listen("pi3", "myChange", () => {
    if (instrument.questions.pi3.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.pi3.value),
            new Date("2024-05-01")
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
            util.setValue(typeElements[i], "" + settlement_types[settlements[value].type]);
        })
    }
}


const pi10 = ['pi10a', 'pi10b'];
util.listen(pi10, "change", () => {
    if (util.inputsHaveValue(pi10)) {
        const message = 'PI10b <= PI10a';
        errorHandler.removeError(pi10, message)
        if (util.getInputDecimalValue('pi10b') > util.getInputDecimalValue('pi10b')) {
            errorHandler.addError(pi10, message);
        }
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



const cmgtsa = ["pi3", "pi7"];
util.listen(cmgtsa, "myChange", () => {
    if (util.inputsHaveValue(cmgtsa)) {
        const pi7 = util.htmlElement("pi7").value;
        const pi3 = util.htmlElement("pi3").value;

        const message = translations['must_be_later'].replace("Y", "PI7").replace("X", "PI3");

        errorHandler.removeError(cmgtsa, message);

        if (util.standardDate(pi3) > util.standardDate(pi7)) {
            errorHandler.addError(cmgtsa, message);
        }
    }
})


const pi10ab = ['pi10a', 'pi10b'];
util.listen(pi10ab, 'change', () => {
    if (util.inputsHaveValue(pi10ab)) {
        const message = 'PI10b <= PI10a';

        errorHandler.removeError(pi10ab, message)
        if (util.getInputDecimalValue('pi10b') > util.getInputDecimalValue('pi10a')) {
            errorHandler.addError(pi10ab, message);
        }
    }
});
