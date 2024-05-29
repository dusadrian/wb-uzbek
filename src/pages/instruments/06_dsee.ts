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
let servicesCodes: string[] = [];
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

const e0174 = ['eost_b', 'extt_b', ...tsa_b];
const e0174t = [...e0174, 'next_b'];

const e0175 = ['eost_g', 'extt_g', ...tsa_g];
const e0175t = [...e0175, 'next_g'];

const e0176 = ['eost_t', 'extt_t', ...tsat_t];
const e0176t = [...e0176, 'next_t'];

// regiunea este intotdeauna inaintea districtului
// un event de change pe regiune populeaza districtul, iar un event
// de change pe district populeaza settlement-ul
const validate = [
    ...regElements, ...disElements,
    ...net1_b, ...net1_g, ...net1_t, ...nes_b, ...nes_g, ...nes_t, ...neo_b,
    ...neo_g, ...neo_t, ...unu_b, ...unu_bt, ...unu_g, ...unu_gt, ...unu_t,
    ...unu_tt, ...nex1_b, ...nex1_g, ...nex1_t, ...eos_b, ...eos_g, ...eost_t,
    ...ext_b, ...ext_g, ...extt_t, ...tsa_b, ...tsa_g, ...tsat_t, ...tnr,
    ...final, ...e0174, ...e0174t, ...e0175, ...e0175t, ...e0176, ...e0176t
]

const totals = [
    "tnet_b", "tnet_g", "tnet_t", "nest_b", "nest_g", "nest_t",
    "neo_b", "neo_g", "neo_t", "next_b", "next_g", "next_t",
    "eost_b", "eost_g", "eost_t",
    "extt_b", "extt_g", "extt_t",
    "tnr1_t"
]


export const instrument6 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        filters = JSON.parse(sessionStorage.getItem('filters'));

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            services = args.services;
            servicesCodes = Object.keys(services);
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

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    if (totals.indexOf(item.variable) < 0) {
                        instrument.seteazaValoareElement(item.variable, item.value);
                    }

                    if (validate.indexOf(item.variable) >= 0) {
                        util.trigger(item.variable, "change");
                    }
                }
            }

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("q1", util.customDate());

            if (args.userData) {
                // set default values, if new instrument
                if (!args.questions) {
                    let institution_name = "--";
                    util.setValue("i2", institution_code);

                    if (inson_user) {
                        const inson = { ...insons[args.userData.institution_code] } as KeyStringNumber;
                        institution_name = inson['name_' + lang].toString();
                        util.setValue("i3", "--"); // address
                        util.setValue("i4a", inson['region'].toString());
                        util.setValue("i4b", inson['district'].toString());
                        util.setValue('i4c', "--"); // settlement
                        util.setValue('i4d', "31"); // district type
                    }
                    else {
                        const serviciu = { ...services[institution_code] } as KeyStringNumber;
                        institution_name = serviciu['name_' + lang].toString();
                        util.setValue('i3', serviciu['address'] ? serviciu['address'].toString() : "--");
                        util.setValue("i4a", serviciu['region'].toString());
                        util.setValue("i4b", serviciu['district'].toString());

                        const settlement = serviciu['settlement'].toString();
                        util.setValue('i4c', settlement);
                        util.setValue('i4d', settlements[settlement].type);
                    }

                    util.setValue("i1", institution_name);
                    // set default values for user
                    util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                    util.setValue('q3', args.userData.job_title ? args.userData.job_title : "--");
                    util.setValue('q4', args.userData.profession ? args.userData.profession : "--");
                    util.setValue('q5', args.userData.phone ? args.userData.phone : "--");
                    util.setValue('q6', args.userData.email ? args.userData.email : "--");

                    util.setValue("i9", "--");
                    if (servicesCodes.indexOf(institution_code) >= 0) {
                        const type = services[args.userData.institution_code].type;
                        if (util.selectValues("i9").indexOf(type) >= 0) {
                            util.setValue("i9", services[args.userData.institution_code].type);
                        }
                    }
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

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(net1_b)) {
            util.setValue('tnet_b', util.makeSumFromElements(net1_b).toString());
        } else {
            util.setValue('tnet_b', "");
            instrument.questions['tnet_b'].value = "-7";
        }
    });
});

net1_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = net1_g.indexOf(g);
        const b = net1_b[index];
        const t = net1_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(net1_g)) {
            util.setValue('tnet_g', util.makeSumFromElements(net1_g).toString());
        } else {
            util.setValue('tnet_g', "");
            instrument.questions['tnet_g'].value = "-7";
        }
    });
});

net1_t.forEach((t) => {
    util.listen(t, 'change', () => {
        if (util.anyInputHasValue(net1_t)) {
            util.setValue('tnet_t', util.makeSumFromElements(net1_t).toString());
        } else {
            util.setValue('tnet_t', "");
            instrument.questions['tnet_t'].value = "-7";
        }
    });
});

nes_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = nes_b.indexOf(b);
        const g = nes_g[index];
        const t = nes_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(nes_b)) {
            util.setValue('nest_b', util.makeSumFromElements(nes_b).toString());
        } else {
            util.setValue('nest_b', "");
            instrument.questions['nest_b'].value = "-7";
        }
    });
});

nes_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = nes_g.indexOf(g);
        const b = nes_b[index];
        const t = nes_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(nes_g)) {
            util.setValue('nest_g', util.makeSumFromElements(nes_g).toString());
        } else {
            util.setValue('nest_g', "");
            instrument.questions['nest_g'].value = "-7";
        }
    });
});

nes_t.forEach((t) => {
    document.getElementById(t).addEventListener('change', () => {
        if (util.anyInputHasValue(nes_t)) {
            util.setValue('nest_t', util.makeSumFromElements(nes_t).toString());
        } else {
            util.setValue('nest_t', "");
            instrument.questions['nest_t'].value = "-7";
        }
    });
});


neo_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = neo_b.indexOf(b);
        const g = neo_g[index];
        const t = neo_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(neo_b)) {
            util.setValue('neo_b', util.makeSumFromElements(neo_b).toString());
        } else {
            util.setValue('neo_b', "");
            instrument.questions['neo_b'].value = "-7";
        }
    });
});

neo_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = neo_g.indexOf(g);
        const b = neo_b[index];
        const t = neo_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(neo_g)) {
            util.setValue('neo_g', util.makeSumFromElements(neo_g).toString());
        } else {
            util.setValue('neo_g', "");
            instrument.questions['neo_g'].value = "-7";
        }
    });
});

neo_t.forEach((t) => {
    util.listen(t, 'change', () => {
        if (util.anyInputHasValue(neo_t)) {
            util.setValue('neo_t', util.makeSumFromElements(neo_t).toString());
        } else {
            util.setValue('neo_t', "");
            instrument.questions['neo_t'].value = "-7";
        }
    });
});


// nest_b + neo_b = tnet_b
unu_bt.forEach((item) => {
    util.listen(item, 'change', () => {
        if (
            util.inputsHaveValue(net1_b) &&
            util.inputsHaveValue(nes_b) &&
            util.inputsHaveValue(neo_b)
        ) {
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
        if (
            util.inputsHaveValue(net1_g) &&
            util.inputsHaveValue(nes_g) &&
            util.inputsHaveValue(neo_g)
        ) {
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
        if (
            util.inputsHaveValue(net1_t) &&
            util.inputsHaveValue(nes_t) &&
            util.inputsHaveValue(neo_t)
        ) {
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

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(nex1_b)) {
            util.setValue('next_b', util.makeSumFromElements(nex1_b).toString());
        } else {
            util.setValue('next_b', "");
            instrument.questions['next_b'].value = "-7";
        }
    });
});

nex1_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = nex1_g.indexOf(g);
        const b = nex1_b[index];
        const t = nex1_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(nex1_g)) {
            util.setValue('next_g', util.makeSumFromElements(nex1_g).toString());
        } else {
            util.setValue('next_g', "");
            instrument.questions['next_g'].value = "-7";
        }
    });
});

nex1_t.forEach((t) => {
    util.listen(t, 'change', () => {
        if (util.anyInputHasValue(nex1_t)) {
            util.setValue('next_t', util.makeSumFromElements(nex1_t).toString());
        } else {
            util.setValue('next_t', "");
            instrument.questions['next_t'].value = "-7";
        }
    });
});

eos_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = eos_b.indexOf(b);
        const g = eos_g[index];
        const t = eost_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(eos_b)) {
            util.setValue('eost_b', util.makeSumFromElements(eos_b).toString());
        } else {
            util.setValue('eost_b', "");
            instrument.questions['eost_b'].value = "-7";
        }
    });
});

eos_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = eos_g.indexOf(g);
        const b = eos_b[index];
        const t = eost_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(eos_g)) {
            util.setValue('eost_g', util.makeSumFromElements(eos_g).toString());
        } else {
            util.setValue('eost_g', "");
            instrument.questions['eost_g'].value = "-7";
        }
    });
});

eost_t.forEach((t) => {
    util.listen(t, 'change', () => {
        const i9 = Number(instrument.questions.i9.value);
        const blocked = i9 > 0 && (i9 < 21 || i9 > 28);
        if (blocked) {
            util.htmlElement("eos4_t").value = "0";
        }

        if (util.anyInputHasValue(eost_t)) {
            util.setValue('eost_t', util.makeSumFromElements(eost_t).toString());
        } else {
            util.setValue('eost_t', "");
            instrument.questions['eost_t'].value = "-7";
        }

        if (blocked) {
            util.htmlElement("eos4_t").value = "";
        }
    });
});

ext_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = ext_b.indexOf(b);
        const g = ext_g[index];
        const t = extt_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(ext_b)) {
            util.setValue('extt_b', util.makeSumFromElements(ext_b).toString());
        } else {
            util.setValue('extt_b', "");
            instrument.questions['extt_b'].value = "-7";
        }
    });
});

ext_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = ext_g.indexOf(g);
        const b = ext_b[index];
        const t = extt_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

        if (util.anyInputHasValue(ext_g)) {
            util.setValue('extt_g', util.makeSumFromElements(ext_g).toString());
        } else {
            util.setValue('extt_g', "");
            instrument.questions['extt_g'].value = "-7";
        }
    });
});

extt_t.forEach((t) => {
    util.listen(t, 'change', () => {
        if (util.anyInputHasValue(extt_t)) {
            util.setValue('extt_t', util.makeSumFromElements(extt_t).toString());
        } else {
            util.setValue('extt_t', "");
            instrument.questions['extt_t'].value = "-7";
        }
    });
});

tsa_b.forEach((b) => {
    util.listen(b, 'change', () => {
        const index = tsa_b.indexOf(b);
        const g = tsa_g[index];
        const t = tsat_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

    });
});

tsa_g.forEach((g) => {
    util.listen(g, 'change', () => {
        const index = tsa_g.indexOf(g);
        const b = tsa_b[index];
        const t = tsat_t[index];

        if (util.anyInputHasValue([b, g])) {
            util.setValue(t, util.makeSumFromElements([b, g]).toString());
        } else {
            util.setValue(t, "");
            instrument.questions[t].value = "-7";
        }

    });
});

tnr.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.anyInputHasValue(tnr)) {
            util.setValue('tnr1_t', util.makeSumFromElements(tnr).toString());
        } else {
            util.setValue('tnr1_t', "");
            instrument.questions['tnr1_t'].value = "-7";
        }
    });
});

util.listen(final, 'change', () => {
    const tnr0 = util.getInputNumericValue('tnr0');
    const tnet_t = util.getInputNumericValue('tnet_t');
    const next_t = util.getInputNumericValue('next_t');
    const tnr1_t = util.getInputNumericValue('tnr1_t');

    if (util.inputsHaveValue(['tnr0', "tnr1_t"])) {
        let message = "TNR0 XY= TNR1";

        if (tnet_t > 0) {
            message = message.replace("X", "+ TNET ");
        } else {
            message = message.replace("X", "");
        }

        if (next_t > 0) {
            message = message.replace("Y", "- NEXT ");
        } else {
            message = message.replace("Y", "");
        }

        errorHandler.removeError(final, message)

        if (tnr1_t != (tnr0 + tnet_t - next_t)) {
            errorHandler.addError(final, message);
        }
    }
});


// eost_b + extt_b + tsa1_b + tsa2_b + tsa3_b = next_b
e0174t.forEach((item) => {
    util.listen(item, 'change', () => {
        const eos = [...eos_b];
        const i9 = Number(instrument.questions.i9.value);
        const blocked = i9 > 0 && (i9 < 21 || i9 > 28);
        if (blocked) {
            eos.splice(3, 1);
        }

        const message = translations["E0174"];
        errorHandler.removeError(e0174t, message)

        if (
            util.inputsHaveValue(eos) &&
            util.inputsHaveValue(ext_b) &&
            util.inputsHaveValue(tsa_b)
        ) {
            const next_b = util.getInputNumericValue('next_b');
            if (next_b != Number(util.makeInputSumDecimal(e0174))) {
                errorHandler.addError(e0174t, message);
            }
        }
    });
});

// eost_g + extt_g + tsa1_g + tsa2_g + tsa3_g = next_g
e0175t.forEach((item) => {
    util.listen(item, 'change', () => {
        const eos = [...eos_g];
        const i9 = Number(instrument.questions.i9.value);
        const blocked = i9 > 0 && (i9 < 21 || i9 > 28);
        if (blocked) {
            eos.splice(3, 1);
        }

        const message = translations["E0175"];
        errorHandler.removeError(e0175t, message)

        if (
            util.inputsHaveValue(eos) &&
            util.inputsHaveValue(ext_g) &&
            util.inputsHaveValue(tsa_g)
        ) {
            const next_g = util.getInputNumericValue('next_g');

            if (next_g != Number(util.makeInputSumDecimal(e0175))) {
                errorHandler.addError(e0175t, message);
            }
        }
    });
});

// eost_t + extt_t + tsa1_t + tsa2_t + tsa3_t = next_t
e0176t.forEach((item) => {
    util.listen(item, 'change', () => {
        const eos = [...eost_t];
        const i9 = Number(instrument.questions.i9.value);
        const blocked = i9 > 0 && (i9 < 21 || i9 > 28);
        if (blocked) {
            eos.splice(3, 1);
        }

        const next_t = util.getInputNumericValue('next_t');
        const message = translations["E0176"];

        if (
            util.inputsHaveValue(eos) &&
            util.inputsHaveValue(extt_t) &&
            util.inputsHaveValue(tsat_t)
        ) {

            errorHandler.removeError(e0176t, message)
            if (next_t != Number(util.makeInputSumDecimal(e0176))) {
                errorHandler.addError(e0176t, message);
            }
        }
    });
});