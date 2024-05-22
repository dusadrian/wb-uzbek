import { ipcRenderer } from "electron";
import { questions, questionsOrder } from "./07_ftch_variables";
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
import * as select2 from 'select2';
select2(window, $);

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
    'ifp2', 'ifm4', 'ift4' // 'data' completat automat
]

const admission_dates = [
    'fc4_c1c', 'fc4_c2c', 'fc4_c3c', 'fc4_c4c', 'fc4_c5c', 'fc4_c6c', 'fc4_c7c', 'fc4_c8c', 'fc4_c9c', 'fc4_c10c'
]

const regElements = ["reg", "ifp1a"];
const disElements = ["dis", "ifp1b"];
const setElements = ["", "ifp1c"];
const typeElements = ["", "ifp1d"];

let regionCode = '';
let userUUID = '';
let institutionType = '';
let institutionCode = '';
let serviceCode = ''; // filter by service code INSON
let userRole = '';
let filters: DI.FiltersInterface;

export const instrument7 = {
    init: async () => {

        $("#fc4_c1d").select2({
            width: '80%',
            multiple: true,
        });

        $('#fc4_c1d').on('select2:select', function() {
            console.log(util.htmlElement('fc4_c1d').value);
            util.trigger('fc4_c1d', 'change');
        });

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

        [...general_dates, ...admission_dates].forEach(el => {
            const config = { ...jQueryDatepickerConfig };

            if (el == 'ifp2') {
                config.dateFormat = "mm/yy";
                config.minDate = "01/01/1950";
            } else if (admission_dates.indexOf(el) < 0) {
                config.minDate = "01/01/1930";
            }

            $("#" + el).datepicker(config);

            util.listen(el, "change", () => {
                errorHandler.removeError(el, translations['invalid_date']);
                try {
                    $.datepicker.parseDate(
                        el == "ifp2" ? "mm/yy" : "dd/mm/yy",
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

            services = args.services;
            insons = args.insons;

            userRole = args.userData.role_code;
            let institution_code = args.userData.institution_code;
            if (args.institution_code) {
                institution_code = args.institution_code;
            }
            if (filters && filters.institution) {
                institution_code = filters.institution;
            }

            serviceCode = args.institution_code ?? '';
            console.log(args);

            const inson_user = Object.keys(insons).indexOf(institution_code) >= 0;

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
                    const selectedDistrict = dis_el.value;

                    if (setElements[x] != "") {
                        instrument.questions[setElements[x]].skip = false;
                        util.htmlElement(setElements[x]).disabled = false;
                        set_el.innerHTML = "";
                    }

                    if (Number(selectedDistrict) > 0) {
                        const option = document.createElement("option");
                        option.value = "-9";
                        option.text = translations['t_choose'];

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
                                    util.setValue(typeElements[x], districts[selectedDistrict].type);
                                }
                                instrument.questions[setElements[x]].skip = true;
                                instrument.questions[setElements[x]].value = '-7';
                                util.htmlElement(setElements[x]).disabled = true;
                            }
                        }
                    }
                })
            }

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionsOrder);
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

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("data", util.customDate());
            if (args.userData) {
                if (inson_user) {
                    util.setValue('reg', "" + insons[institution_code].region);
                    util.setValue('dis', "" + insons[institution_code].district);
                }
                else {
                    util.setValue('reg', "" + services[institution_code].region);
                    util.setValue('dis', "" + services[institution_code].district);
                }

                util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                util.setValue('q3', args.userData.job_title ? args.userData.job_title : "--");
                util.setValue('q4', args.userData.profession ? args.userData.profession : "--");
                util.setValue('inst', args.userData.institution_name ? args.userData.institution_name : "--");
                util.setValue('q5', args.userData.phone ? args.userData.phone : "--");
                util.setValue('q6', args.userData.email ? args.userData.email : "--");
                regionCode = args.userData.region_code;
                userUUID = args.userData.uuid;
                institutionType = args.userData.service_type_code;
                institutionCode = args.userData.institution_code;
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}


const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.ifm1.value == '-9' || _questions.ifm2.value == '-9' || _questions.ifm3.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: IFM1, IFM2, IFM3!" });
        const el = util.htmlElement("ifm1");
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            el.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "ftch";
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



// validari custom

// settlement type
for (let i = 0; i < setElements.length; i++) {
    if (setElements[i] != "" && typeElements[i] != "") {
        util.listen(setElements[i], "change", () => {
            const value = util.htmlElement(setElements[i]).value;
            if (value != "--") {
                util.setValue(typeElements[i], settlements[value].type);
            }
        })
    }
}


util.listen("ifp2", "myChange", () => {
    if (instrument.questions.ifp2.value != "-9") {

        const years = util.diffDates(
            util.standardDate("01/" + instrument.questions.ifp2.value),
            new Date("2024-05-01"),
            "years"
        )

        const months = util.diffDates(
            util.standardDate("01/" + instrument.questions.ifp2.value),
            new Date("2024-05-01"),
            "months"
        )

        util.setValue('ifp2am', (months % 12).toString());
        util.setValue('ifp2ay', years.toString());
    }
});


util.listen("ifm4", "myChange", () => {
    if (instrument.questions.ifm4.value != "-9") {

        const age = util.diffDates(
            util.standardDate(instrument.questions.ifm4.value),
            new Date("2024-05-01"),
            "years"
        )

        util.setValue('ifm4_age', age.toString());

    }
});


util.listen("ift4", "myChange", () => {
    if (instrument.questions.ift4.value != "-9") {

        const age = util.diffDates(
            util.standardDate(instrument.questions.ift4.value),
            new Date("2024-05-01"),
            "years"
        )

        util.setValue('ift4_age', age.toString());
    }
});


const ifp2t4 = ["ifp2", "ift4"];
util.listen(ifp2t4, "myChange", () => {
    if (util.inputsHaveValue(ifp2t4)) {
        const message = translations["must_be_before"].replace("X", "IFT4").replace("Y", "IFP2");

        errorHandler.removeError(ifp2t4, message);
        if (util.standardDate(instrument.questions.ift4.value) > util.standardDate("01/" + instrument.questions.ifp2.value)) {
            errorHandler.addError(ifp2t4, message);
        }
    }
});

const ifp2m4 = ["ifp2", "ifm4"];
util.listen(ifp2m4, "myChange", () => {
    if (util.inputsHaveValue(ifp2m4)) {
        const message = translations["must_be_before"].replace("X", "IFM4").replace("Y", "IFP2");

        errorHandler.removeError(ifp2m4, message);
        if (util.standardDate(instrument.questions.ifm4.value) > util.standardDate("01/" + instrument.questions.ifp2.value)) {
            errorHandler.addError(ifp2m4, message);
        }
    }
});



const ifp4 = ['ifp4a', 'ifp4b'];
const ifp = [...ifp4, 'ifp5'];

util.listen(ifp, "myChange", () => {
    if (util.inputsHaveValue(ifp)) {
        const message = "IFP5 <= IFP4a + IFP4b";
        const error = util.getInputNumericValue('ifp5') > util.makeSumFromElements(ifp4);

        errorHandler.removeError(ifp, message);
        if (error) {
            errorHandler.addError(ifp, message);
        }

        return error;
    }
});


const fc = ['fc1', 'fc3'];
util.listen(fc, "myChange", () => {
    if (util.inputsHaveValue(fc)) {
        const message = "FC3 <= FC1";
        const error = util.getInputDecimalValue('fc3') > util.getInputDecimalValue('fc1');
        errorHandler.removeError(fc, message);
        if (error) {
            errorHandler.addError(fc, message);
        }
    }
});



util.listen("ex2", "change", () => {
    const message = "EX2 <= 10";
    errorHandler.removeError("ex2", message);
    if (Number(util.htmlElement("ex2").value) > 10) {
        errorHandler.addError("ex2", message);
        setTimeout(() => {
            util.trigger("ex1-1", "change");
        }, 100);
    }
})



util.listen("fc3", "change", () => {
    const message = "FC3 <= 10";
    errorHandler.removeError("fc3", message);
    if (Number(util.htmlElement("fc3").value) > 10) {
        errorHandler.addError("fc3", message);
        setTimeout(() => {
            util.trigger("fc2g-1", "change");
        }, 100);
    }
})