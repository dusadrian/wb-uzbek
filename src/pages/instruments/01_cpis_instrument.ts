import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./01_cpis_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";
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
let insons: {[key: string]: DI.INSON};

const general_dates = [
    'data', 'lk3', 'cm3', 'ct3', 'cg1c', 'cg3b', 'sa1', 'cmgt1a'
];

const sh3_start_dates = [
    'sh3_s1a', 'sh3_s2a', 'sh3_s3a', 'sh3_s4a', 'sh3_s5a', 'sh3_s6a', 'sh3_s7a', 'sh3_s8a', 'sh3_s9a', 'sh3_s10a', 'sh3_csa'
];

const sh3_end_dates = [
    'sh3_s1d', 'sh3_s2d', 'sh3_s3d', 'sh3_s4d', 'sh3_s5d', 'sh3_s6d', 'sh3_s7d', 'sh3_s8d', 'sh3_s9d', 'sh3_s10d', 'sh3_csd'
];

const regElements =  ["lk14b", "cm3b", "cm10c", "cm11c", "ct3b", "ct10c", "ct11c", "cg10c", "cg11c", "sa3a", "sa5r"]; //, "sh5r"];
const disElements =  ["lk14c", "cm3c", "cm10d", "cm11d", "ct3c", "ct10d", "ct11d", "cg10d", "cg11d", "sa3b", "sa5d"]; //, "sh5d"];
const setElements =  ["lk14d", "cm3d", "cm10e", "cm11e", "ct3d", "ct10e", "ct11e", "cg10e", "cg11e", "sa3c", ""    ]; //, ""    ];
const typeElements = ["lk14e", "cm3e", "cm10f", "cm11f", "ct3e", "ct10f", "ct11f", "cg10f", "cg11f", "sa3d", ""    ]; //, ""    ];
let regionCode = '';

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
            console.log(args);

            services = args.services;
            insons = args.insons;
            const inson_codes = Object.keys(insons);
            let institution_code = "";

            let inson_user = false;
            if (args.userData && args.userData.institution_code) {
                inson_user = inson_codes.indexOf(args.userData.institution_code) >= 0;
                institution_code = args.userData.institution_code;
            }

            const sa5i = util.htmlElement("sa5i");
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
                    if (regElements[x] == "sa5r") {
                        sa5i.innerHTML = "";
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

                            sa5i.innerHTML = "";
                            const serv = districts[selectedDistrict].services;
                            sa5i.appendChild(option);

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
                                            sa5i.appendChild(option);
                                        }
                                    }
                                }
                            }

                            const optgroup = document.createElement("optgroup");
                            const option999 = document.createElement("option");
                            option999.value = '999';
                            option999.text = '999: ' + locales[lang]['not_in_registry'];
                            optgroup.appendChild(option999);
                            sa5i.appendChild(optgroup);

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
                }
            } else {
                // if (inson_user) {
                //     instrument.seteazaValoareElement("sa5r", insons[institution_code].region, true);
                //     instrument.seteazaValoareElement("sa5d", insons[institution_code].district, true);
                // }

                instrument.seteazaValoareElement(
                    "sa5r",
                    inson_user ? insons[institution_code].region : services[institution_code].region,
                    true
                );
                instrument.seteazaValoareElement(
                    "sa5d",
                    inson_user ? insons[institution_code].district : services[institution_code].district,
                    true
                );
            }

            util.setValue("data", util.customDate());

            // set default values for user, IRRESPECTIVE of the instrument
            if (args.userData) {
                if (args.userData.institution_code) {

                    const institution_code = args.userData.institution_code;

                    if (inson_user) {
                        util.setValue('reg', "" + (regions[insons[institution_code].region] as KeyString)[lang]);
                        util.setValue('dis', "" + (districts[insons[institution_code].district] as KeyString)[lang]);
                    }
                    else {
                        util.setValue('reg', "" + (regions[services[institution_code].region] as KeyString)[lang]);
                        util.setValue('dis', "" + (districts[services[institution_code].district] as KeyString)[lang]);
                    }

                }

                util.setValue('omr1', args.userData.name);
                util.setValue('omr2', args.userData.patronymics);
                util.setValue('omr3', args.userData.surname);
                util.setValue('omr4', args.userData.job_title);
                util.setValue('omr5', args.userData.profession);
                util.setValue('omr6', args.userData.phone);
                util.setValue('omr7', args.userData.email);
                util.setValue("omr9", args.userData.institution_name);
                regionCode = args.userData.region_code;
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
        institution_type: util.htmlElement("sa5t").value,
    }
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
            const set_type = settlement_types[settlements[value].type];
            util.setValue(typeElements[i], "" + (set_type as KeyString)[lang]);
        })
    }
}


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


util.listen(util.radioIDs("cm1a"), "myChange", () => {
    if (instrument.questions["cm1a"].value == "3") {
        util.htmlElement('cm1c-1').checked = false;
        util.htmlElement('cm1c-2').checked = false;
        util.htmlElement("cm1c-3").checked = true;
    }
})

const cm1c = util.radioIDs("cm1c");
util.listen(cm1c, "myChange", () => {
    const message = locales[lang]['no_unknown'];

    errorHandler.removeError(cm1c, message);
    if (
        instrument.questions["cm1a"].value == "2" &&
        instrument.questions["cm1c"].value == "1"
    ) {
        errorHandler.addError(cm1c, message);
        util.focus(cm1c[0]);
    }
})

util.listen(util.radioIDs("ct1a"), "myChange", () => {
    if (instrument.questions["ct1a"].value == "3") {
        util.htmlElement('ct1c-1').checked = false;
        util.htmlElement('ct1c-2').checked = false;
        util.htmlElement("ct1c-3").checked = true;
    }
})

const ct1c = util.radioIDs("ct1c");
util.listen(ct1c, "myChange", () => {
    const message = locales[lang]['no_unknown'];

    errorHandler.removeError(ct1c, message);
    if (
        (
            instrument.questions["ct1a"].value == "4" ||
            instrument.questions["ct1a"].value == "2"
        ) &&
        instrument.questions["ct1c"].value == "1"
    ) {
        errorHandler.addError(ct1c, message);
        util.focus(ct1c[0]);
    }
})

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
    if (instrument.questions.lk3.value != "-9" && instrument.questions.sa1.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.lk3.value),
            util.standardDate(instrument.questions.sa1.value)
        )

        if (!Number.isNaN(age)) {
            util.setValue("sa1a", age.toString());
        }
    }
});

const qeduc2 = util.radioIDs("qeduc2");
util.listen([...qeduc2, "sa1a"], "myChange", () => {
    const qeduc = Number(instrument.questions["qeduc2"].value);
    if (qeduc > 0) {
        const age = Number(instrument.questions["sa1a"].value);
        const message = locales[lang]["child_under_7"];

        errorHandler.removeError(qeduc2, message);
        if (age < 7 && qeduc < 7) {
            errorHandler.addError(qeduc2, message);
        }
    }
})


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

    const message = locales[lang]['Value_up_to_ten'];
    errorHandler.removeError('sh1', message);

    if (sh1value > 10) {
        instrument.questions["sh1"].value = '-9';
        errorHandler.addError('sh1', message);
    }
    else {
        instrument.questions["sh1"].value = sh1value.toString();
    }

    // dupa ce dispare eroarea, mai trebuie facut un dispatch change pe orice element
    // ca sa treaca prin activatorii de la tabelul sh3
    util.trigger('sh2-1', 'change');
    util.focus('sh2-1');
    util.blur('sh2-1');
});


sh3_start_dates.forEach((startel) => {
    const index = sh3_start_dates.indexOf(startel);
    const endel = sh3_end_dates[index]
    const start = util.htmlElement(startel);
    const end = util.htmlElement(endel);

    const check = function() {
        if (util.inputsHaveValue([startel, endel])) {

            const startdate = util.standardDate(start.value);
            const enddate = util.standardDate(end.value);
            const timespent = util.htmlElement(startel.replace("a", "f"));
            const sh4 = util.htmlElement("sh4");

            const message = locales[lang]['Start_before_end'];
            errorHandler.removeError([startel, endel], message);

            if (startdate > enddate) {
                errorHandler.addError([startel, endel], message);
                instrument.questions[startel].value = '-9';
                instrument.questions[endel].value = '-9';
                timespent.value = "";
                instrument.questions[startel.replace("a", "f")].value = "-7";
            }
            else {
                instrument.questions[startel].value = start.value;
                instrument.questions[endel].value = end.value;

                timespent.value = util.diffDates(startdate, enddate, "months").toString();

                instrument.questions[startel].value = start.value;
                instrument.questions[endel].value = end.value;
                instrument.questions[startel.replace("a", "f")].value = timespent.value;

                let totalmonths = 0;
                sh3_start_dates.forEach((item) => {
                    const nofmonths = Number(instrument.questions[item.replace("a", "f")].value);
                    if (nofmonths > 0) {
                        totalmonths += nofmonths;
                    }
                });

                sh4.value = totalmonths.toString();
                instrument.questions["sh4"].value = sh4.value;
            }
        }
    }

    util.listen(startel, "myChange", check);
    util.listen(endel, "myChange", check);
});


const ewm = ['ewm1', 'ewm2', 'ewm3', 'ewm4'];
ewm.forEach((el) => {
    document.querySelectorAll('input[name="' + el + '"]').forEach((elem) => {
        elem.addEventListener("myChange", function() {
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

const cmgt1a = util.htmlElement('cmgt1a');
cmgt1a.addEventListener("myChange", function() {

    const start = util.htmlElement("data");
    const end = util.htmlElement("cmgt1a");
    const cmgt1b = util.htmlElement("cmgt1b");

    const startdate = new Date(start.value.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));
    const enddate = new Date(end.value.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));


    let monthDiff = (enddate.getFullYear() - startdate.getFullYear()) * 12 + enddate.getMonth() - startdate.getMonth();
    if (monthDiff > 0 && enddate.getDate() < startdate.getDate()) {
        monthDiff--;
    }

    cmgt1b.value = monthDiff.toString();
    instrument.questions["cmgt1b"].value = cmgt1b.value;
    cmgt1b.dispatchEvent(new Event('change'));

});

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


// TODO SH5