import { ipcRenderer } from "electron";
import { questions, questionsOrder } from "./05a_tqyp_variables";
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
let insons: { [key: string]: DI.INSON };


const general_dates = [
    'ptr4', 'ptr6' // 'data',
];
const regElements =  ["str3a", "ptr5b", "ptr8e"];
const disElements =  ["str3b", "ptr5c", "ptr8f"];
const setElements =  ["str3c", "ptr5d", "ptr8g"];
const mahElements =  ["",      "ptr5m", "ptr8m"];
const typeElements = ["str3e", "ptr5e", "ptr8h"];

// regiunea este intotdeauna inaintea districtului
// un event de change pe regiune populeaza districtul, iar un event
// de change pe district populeaza settlement-ul, etc.
const validate = [...regElements, ...disElements, ...setElements];

let regionCode = '';
let userUUID = '';
let institutionType = '';
let institutionCode = '';
let userRole = '';
let filters: DI.FiltersInterface;

export const instrument5a = {
    init: async () => {

        $.datepicker.setDefaults($.datepicker.regional[lang]);
        const jQueryDatepickerConfig = {
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            minDate: "01/01/2001",
            maxDate: "31/12/2007",
            yearRange: "c-100:c+10",
            firstDay: 1,
            onSelect: function () {
                util.trigger(this.id, "change");
            }
        };

        general_dates.forEach((el) => {
            const config = { ...jQueryDatepickerConfig };

            // if (el == 'ptr4') { // default anyway in jQueryDatepickerConfig
            //     config.minDate = "01/01/2001";
            //     config.maxDate = "31/12/2007";
            // }

            if (el == 'ptr6') {
                config.minDate = "01/05/2019";
                config.maxDate = "30/04/2024";
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
        })


        filters = JSON.parse(sessionStorage.getItem('filters'));

        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);
            services = args.services;
            insons = args.insons;

            userRole = args.userData.role_code;
            const institution_code = (filters && filters.institution) ? filters.institution : args.userData.institution_code;

            const inson_user = Object.keys(insons).indexOf(institution_code) >= 0;


            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionsOrder);
            let instrumentID = null;

            if (args.instrument && args.instrument.length > 0) {
                // console.log(args.instrument);

                instrumentID = parseInt(args.instrument[0].id);

                for (const item of args.instrument) {
                    instrument.seteazaValoareElement(item.variable, item.value);

                    if (validate.indexOf(item.variable) >= 0) {
                        util.trigger(item.variable, "change");
                    }

                    if (item.variable == "ptr8") {
                        util.trigger("ptr8-1", "myChange");
                    }
                }
            }

            // two digit day & month
            util.setValue("data", util.customDate());

            if (args.userData) {
                // set default values, if new instrument
                if (!args.questions) {
                    let institution_name = "--";

                    util.setValue("str1", institution_code);
                    // util.setValue("str3c", "--");

                    if (inson_user) {
                        const inson = { ...insons[args.userData.institution_code] } as KeyStringNumber;
                        institution_name = "" + inson['name_' + lang];
                        util.setValue("str3a", insons[institution_code].region);
                        util.setValue("str3b", insons[institution_code].district);
                        if (insons[institution_code].settlement) {
                            util.setValue("str3c", insons[institution_code].settlement);
                        } else {
                            util.resetSelect("str3c", "--", "--");
                            util.setValue("str3c", "--");
                            util.setValue("str3e", districts[insons[institution_code].district].type);
                        }
                    } else {
                        const serviciu = { ...services[institution_code] } as KeyStringNumber;
                        institution_name = '' + serviciu['name_' + lang];
                        util.setValue("str3a", services[institution_code].region);
                        util.setValue("str3b", services[institution_code].district);

                        if (services[institution_code].settlement) {
                            util.setValue("str3c", services[institution_code].settlement);
                        } else {
                            util.resetSelect("str3c", "--", "--");
                            util.setValue("str3c", "--");
                            util.setValue("str3e", districts[services[institution_code].district].type);
                        }
                    }

                    util.setValue("str2", institution_name);
                    util.setValue("omr1", args.userData.name ? args.userData.name : "--");
                    util.setValue("omr2", args.userData.patronymics ? args.userData.patronymics : "--");
                    util.setValue("omr3", args.userData.surname ? args.userData.surname : "--");
                    util.setValue("omr4", args.userData.job_title ? args.userData.job_title : "--");
                    util.setValue("omr5", args.userData.profession ? args.userData.profession : "--");
                    util.setValue("omr6", args.userData.phone ? args.userData.phone : "--");
                    util.setValue("omr7", args.userData.email ? args.userData.email : "--");
                }

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

    if (_questions.ptr1.value == '-9' || _questions.ptr2a.value == '-9' || _questions.ptr2b.value == '-9' || _questions.ptr2c.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: PTR1, PTR2A, PTR2B, PTR2C!" });
        const elPin = document.getElementById("ptr1");
        elPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            elPin.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "tqyp";
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

            if (!instrument.questions[setElements[x]].readonly) {
                instrument.questions[setElements[x]].skip = false;
                set_el.disabled = false;
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
                    if (typeElements[x] != "") {
                        util.setValue(typeElements[x], districts[selectedDistrict].type);
                    }

                    instrument.questions[setElements[x]].skip = true;
                    set_el.disabled = true;

                    util.resetSelect(setElements[x], "--", "--");
                    util.setValue(setElements[x], "--");
                }
            }
        }

        if (mahElements[x] != "") {
            util.resetSelect(mahElements[x], "-9", translations['t_choose']);
            instrument.questions[mahElements[x]].value = "-7";
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



util.listen("ptr4", "myChange", () => {
    if (instrument.questions.ptr4.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.ptr4.value),
            new Date("2024-05-01")
        )

        util.setValue("ptr4a", age.toString());
    }
});

const ptr8 = util.radioIDs("ptr8");
ptr8.forEach((el) => {
    util.listen(el, "myChange", () => {
        instrument.questions.ptr9.skip = false;
        instrument.questions.ptr10.skip = false;

        const value = util.htmlElement(el).value;
        if (["1", "2", "5", "8"].indexOf(value) >= 0) {
            instrument.questions.ptr9.skip = true;
            instrument.questions.ptr10.skip = true;
        }
    })
});


const ptr46 = ["ptr4", "ptr6"];
util.listen(ptr46, "myChange", () => {
    if (util.inputsHaveValue(ptr46)) {
        const ptr6 = util.htmlElement("ptr6").value;
        const ptr4 = util.htmlElement("ptr4").value;

        const message = translations['must_be_later_or_equal'].replace("Y", "PTR6").replace("X", "PTR4");

        errorHandler.removeError(ptr46, message);

        if (util.standardDate(ptr4) > util.standardDate(ptr6)) {
            errorHandler.addError(ptr46, message);
        }
    }
})
