import { ipcRenderer } from "electron";
import { questions, questionsOrder } from "./06_dsee_variables";
import instrument from "../../libraries/instrument";
import { SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";
import * as DI from "../../interfaces/database";
import constant from "../../libraries/constants";

import { KeyString, KeyStringNumber, regions, districts, settlements } from "../../libraries/administrative";

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

let regionCode = '';
let userUUID = '';
let institutionType = '';
let institutionCode = '';
let userRole = '';
let filters: DI.FiltersInterface;

const regElements =  ["i4a"];
const disElements =  ["i4b"];
const setElements =  ["i4c"];
const typeElements = ["i4d"];

const net1_b = ['net1a_b', 'net1b_b', 'net1c_b', 'net1d_b', 'net1e_b']; // tnet_b
const net1_g = ['net1a_g', 'net1b_g', 'net1c_g', 'net1d_g', 'net1e_g']; // tnet_g
const net1_t = ['net1a_t', 'net1b_t', 'net1c_t', 'net1d_t', 'net1e_t']; // tnet_t

const nes_b = ['nes1_b', 'nes2_b', 'nes3_b']; // nest_b
const nes_g = ['nes1_g', 'nes2_g', 'nes3_g']; // nest_g
const nes_t = ['nes1_t', 'nes2_t', 'nes3_t']; // nest_t

const neo_b = ['neo1_b', 'neo2_b', 'neo3_b', 'neo4_b', 'neo5_b', 'neo6_b', 'neo7_b', 'neo8_b']; // neo_b
const neo_g = ['neo1_g', 'neo2_g', 'neo3_g', 'neo4_g', 'neo5_g', 'neo6_g', 'neo7_g', 'neo8_g']; // neo_g
const neo_t = ['neo1_t', 'neo2_t', 'neo3_t', 'neo4_t', 'neo5_t', 'neo6_t', 'neo7_t', 'neo8_t']; // neo_t

const unu_b = ['nest_b', 'neo_b'];
const unu_bt = [...unu_b, 'tnet_b'];

const unu_g = ['nest_g', 'neo_g'];
const unu_gt = [...unu_g, 'tnet_g'];

const unu_t = ['nest_t', 'neo_t'];
const unu_tt = [...unu_t, 'tnet_t'];

const nex1_b = ['nex1a_b', 'nex1b_b', 'nex1c_b', 'nex1d_b', 'nex1e_b', 'nex1f_b']; // next_b
const nex1_g = ['nex1a_g', 'nex1b_g', 'nex1c_g', 'nex1d_g', 'nex1e_g', 'nex1f_g']; // next_g
const nex1_t = ['nex1a_t', 'nex1b_t', 'nex1c_t', 'nex1d_t', 'nex1e_t', 'nex1f_t']; // next_t

const eos_b = ['eos1_b', 'eos2_b', 'eos3_b', 'eos4_b']; // eos_b
const eos_g = ['eos1_g', 'eos2_g', 'eos3_g', 'eos4_g']; // eos_g
const eost_t = ['eos1_t', 'eos2_t', 'eos3_t', 'eos4_t']; // eost_t

const ext_b =  ['ext0_b', 'ext1_b', 'ext2_b', 'ext3_b', 'ext4_b', 'ext5_b', 'ext6_b', 'ext7_b']; // extt_b
const ext_g =  ['ext0_g', 'ext1_g', 'ext2_g', 'ext3_g', 'ext4_g', 'ext5_g', 'ext6_g', 'ext7_g']; // extt_g
const extt_t = ['ext0_t', 'ext1_t', 'ext2_t', 'ext3_t', 'ext4_t', 'ext5_t', 'ext6_t', 'ext7_t']; // extt_t

const tsa_b =  ['tsa1_b', 'tsa2_b', 'tsa3_b']; // tsa_b
const tsa_g =  ['tsa1_g', 'tsa2_g', 'tsa3_g']; // tsa_g
const tsat_t = ['tsa1_t', 'tsa2_t', 'tsa3_t']; // tsat_t

const tnr = ['tnr1_b', 'tnr1_g'];

const final = ['tnr0', 'tnet_t', 'next_t', 'tnr1_t'];

const e0174 = ['eost_b', 'extt_b', 'tsa1_b', 'tsa2_b', 'tsa3_b'];
const e0174t = [...e0174, 'next_b'];

const e0175 = ['eost_g', 'extt_g', 'tsa1_g', 'tsa2_g', 'tsa3_g'];
const e0175t = [...e0175, 'next_g'];

const e0176 = ['eost_t', 'extt_t', 'tsa1_t', 'tsa2_t', 'tsa3_t'];
const e0176t = [...e0176, 'next_t'];

const validate = [
    ...net1_b, ...net1_g, ...net1_t, ...nes_b, ...nes_g, ...nes_t, ...neo_b,
    ...neo_g, ...neo_t, ...unu_b, ...unu_bt, ...unu_g, ...unu_gt, ...unu_t,
    ...unu_tt, ...nex1_b, ...nex1_g, ...nex1_t, ...eos_b, ...eos_g, ...eost_t,
    ...ext_b, ...ext_g, ...extt_t, ...tsa_b, ...tsa_g, ...tsat_t, ...tnr,
    ...final, ...e0174, ...e0174t, ...e0175, ...e0175t, ...e0176, ...e0176t
]


export const instrument6 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        filters = JSON.parse(sessionStorage.getItem('filters'));

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

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

                util.listen(regElements[x], "change", function () {

                    // if (setElements[x] != "") { // auto-completat deci nu este nevoie
                    //     util.resetSelect(setElements[x], "-9", translations['t_choose']);
                    //     instrument.questions[setElements[x]].value = "-7";
                    // }

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

                    util.resetSelect(setElements[x], "--", "--"); // auto-completat
                    const selectedDistrict = util.htmlElement(disElements[x]).value;

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
                        }
                        else {
                            util.setValue(typeElements[x], districts[selectedDistrict].type);
                            util.resetSelect(setElements[x], "--", "--");
                            util.setValue(setElements[x], "--");
                        }
                    }
                })
            }

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionsOrder);
            let instrumentID = null;

            console.log(args);

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    const index = [...regElements, ...disElements, ...validate].indexOf(item.variable)
                    // regiunea este intotdeauna inaintea districtului
                    // un event de change pe regiune populeaza districtul, iar un event
                    // de change pe district populeaza settlement-ul
                    instrument.seteazaValoareElement(item.variable, item.value);
                    if (index >= 0) {
                        util.trigger(item.variable, "change");
                    }
                }

            }

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("q1", util.customDate());

            if (args.userData) {
                let institution_name = "--";
                util.setValue("i2", institution_code);

                let settlement = services[institution_code].settlement;
                if (inson_user) {
                    const inson = { ...insons[args.userData.institution_code] } as KeyStringNumber;
                    settlement = insons[institution_code].settlement;
                    institution_name = "" + inson['name_' + lang];
                    util.setValue("i3", "--");
                    util.setValue('i4a', "" + insons[institution_code].region);
                    util.setValue('i4b', "" + insons[institution_code].district);
                    if (!settlement) {
                        util.setValue("i4d", districts[insons[institution_code].district].type);
                    }
                }
                else {
                    const serviciu = { ...services[institution_code] } as KeyStringNumber;
                    institution_name = '' + serviciu['name_' + lang];
                    util.setValue("i3", services[institution_code].address ? services[institution_code].address : "--");
                    util.setValue('i4a', "" + services[institution_code].region);
                    util.setValue('i4b', "" + services[institution_code].district);
                    if (!settlement) {
                        util.setValue("i4d", districts[services[institution_code].district].type);
                    }
                }

                util.setValue("i1", institution_name);
                util.setValue('i4c', settlement ? "" + settlement : "--");
                // set default values for user
                util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                util.setValue('q3', args.userData.job_title ? args.userData.job_title : "--");
                util.setValue('q4', args.userData.profession ? args.userData.profession : "--");
                util.setValue('q5', args.userData.phone ? args.userData.phone : "--");
                util.setValue('q6', args.userData.email ? args.userData.email : "--");
                regionCode = args.userData.region_code;
                userUUID = args.userData.uuid;
                institutionType = args.userData.service_type_code;
                institutionCode = args.userData.institution_code;

                const serv_codes = Object.keys(services);
                if (serv_codes.indexOf(institution_code) >= 0) {
                    util.setValue("i9", "--");
                    const type = services[args.userData.institution_code].type;
                    if (["11", "12", "13", "14", "15", "16", "17"].indexOf(type) >= 0) {
                        util.setValue("i9", type);
                    }
                }
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

const validateChestionar = () => true;

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "dsee";
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

net1_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = net1_b.indexOf(b);
        const g = net1_g[index];
        const t = net1_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('tnet_b', util.makeSumFromElements(net1_b).toString());
    });
});

net1_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = net1_g.indexOf(g);
        const b = net1_b[index];
        const t = net1_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('tnet_g', util.makeSumFromElements(net1_g).toString());
    });
});

net1_t.forEach((t) => {
    util.listen(t, 'change', () => {
        util.setValue('tnet_t', util.makeSumFromElements(net1_t).toString());
    });
});

nes_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = nes_b.indexOf(b);
        const g = nes_g[index];
        const t = nes_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('nest_b', util.makeSumFromElements(nes_b).toString());
    });
});

nes_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = nes_g.indexOf(g);
        const b = nes_b[index];
        const t = nes_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('nest_g', util.makeSumFromElements(nes_g).toString());
    });
});

nes_t.forEach((t) => {
    document.getElementById(t).addEventListener('change', () => {
        util.setValue('nest_t', util.makeSumFromElements(nes_t).toString());
    });
});


neo_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = neo_b.indexOf(b);
        const g = neo_g[index];
        const t = neo_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('neo_b', util.makeSumFromElements(neo_b).toString());
    });
});

neo_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = neo_g.indexOf(g);
        const b = neo_b[index];
        const t = neo_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('neo_g', util.makeSumFromElements(neo_g).toString());
    });
});

neo_t.forEach((t) => {
    util.listen(t, 'change', () => {
        util.setValue('neo_t', util.makeSumFromElements(neo_t).toString());
    });
});


// nest_b + neo_b = tnet_b
unu_bt.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(unu_bt)) {
            const tnet_b = util.getInputNumericValue('tnet_b');
            const message = translations["E0170"];

            errorHandler.removeError(unu_bt, message)
            if (tnet_b != Number(util.makeInputSumDecimal(unu_b))) {
                errorHandler.addError(unu_bt, message);
            }
        }
    });
});

// nest_g + neo_g = tnet_g
unu_gt.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(unu_gt)) {
            const tnet_g = util.getInputNumericValue('tnet_g');
            const message = translations["E0171"];

            errorHandler.removeError(unu_gt, message)
            if (tnet_g != Number(util.makeInputSumDecimal(unu_g))) {
                errorHandler.addError(unu_gt, message);
            }
        }
    });
});

// nest_t + neo_t = tnet_t
unu_tt.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(unu_tt)) {
            const tnet_t = util.getInputNumericValue('tnet_t');
            const message = translations["E0172"];

            errorHandler.removeError(unu_tt, message)
            if (tnet_t != Number(util.makeInputSumDecimal(unu_t))) {
                errorHandler.addError(unu_tt, message);
            }
        }
    });
});


nex1_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = nex1_b.indexOf(b);
        const g = nex1_g[index];
        const t = nex1_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('next_b', util.makeSumFromElements(nex1_b).toString());
    });
});

nex1_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = nex1_g.indexOf(g);
        const b = nex1_b[index];
        const t = nex1_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('next_g', util.makeSumFromElements(nex1_g).toString());
    });
});

nex1_t.forEach((t) => {
    util.listen(t, 'change', () => {
        util.setValue('next_t', util.makeSumFromElements(nex1_t).toString());
    });
});

eos_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = eos_b.indexOf(b);
        const g = eos_g[index];
        const t = eost_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('eost_b', util.makeSumFromElements(eos_b).toString());
    });
});

eos_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = eos_g.indexOf(g);
        const b = eos_b[index];
        const t = eost_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('eost_g', util.makeSumFromElements(eos_g).toString());
    });
});

eost_t.forEach((t) => {
    util.listen(t, 'change', () => {
        util.setValue('eost_t', util.makeSumFromElements(eost_t).toString());
    });
});

ext_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = ext_b.indexOf(b);
        const g = ext_g[index];
        const t = extt_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('extt_b', util.makeSumFromElements(ext_b).toString());
    });
});

ext_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = ext_g.indexOf(g);
        const b = ext_b[index];
        const t = extt_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
        util.setValue('extt_g', util.makeSumFromElements(ext_g).toString());
    });
});

extt_t.forEach((t) => {
    util.listen(t, 'change', () => {
        util.setValue('extt_t', util.makeSumFromElements(extt_t).toString());
    });
});

tsa_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = tsa_b.indexOf(b);
        const g = tsa_g[index];
        const t = tsat_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
    });
});

tsa_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = tsa_g.indexOf(g);
        const b = tsa_b[index];
        const t = tsat_t[index];
        util.setValue(t, util.makeSumFromElements([b, g]).toString());
    });
});

tnr.forEach((item) => {
    util.listen(item, 'change', () => {
        util.setValue('tnr1_t', util.makeSumFromElements(tnr).toString());
    });
});

final.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(final)) {
            const tnr1_t = util.getInputNumericValue('tnr1_t');
            const tnet_t = util.getInputNumericValue('tnet_t');
            const next_t = util.getInputNumericValue('next_t');
            const tnr0 = util.getInputNumericValue('tnr0');
            const message = translations["E0173"];

            errorHandler.removeError(final, message)
            if (tnr1_t != (tnr0 + tnet_t - next_t)) {
                errorHandler.addError(final, message);
            }
        }
    });
});


// eost_b + extt_b + tsa1_b + tsa2_b + tsa3_b = next_b
e0174t.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(e0174t)) {
            const next_b = util.getInputNumericValue('next_b');
            const message = translations["E0174"];

            errorHandler.removeError(e0174t, message)
            if (next_b != Number(util.makeInputSumDecimal(e0174))) {
                errorHandler.addError(e0174t, message);
            }
        }
    });
});

// eost_g + extt_g + tsa1_g + tsa2_g + tsa3_g = next_g
e0175t.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(e0175t)) {
            const next_g = util.getInputNumericValue('next_g');
            const message = translations["E0175"];

            errorHandler.removeError(e0175t, message)
            if (next_g != Number(util.makeInputSumDecimal(e0175))) {
                errorHandler.addError(e0175t, message);
            }
        }
    });
});

// eost_t + extt_t + tsa1_t + tsa2_t + tsa3_t = next_t
e0176t.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(e0176t)) {
            const next_t = util.getInputNumericValue('next_t');
            const message = translations["E0176"];

            errorHandler.removeError(e0176t, message)
            if (next_t != Number(util.makeInputSumDecimal(e0176))) {
                errorHandler.addError(e0176t, message);
            }
        }
    });
});