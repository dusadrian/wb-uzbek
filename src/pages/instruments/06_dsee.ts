import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./06_dsee_variables";
import instrument from "../../libraries/instrument";
import { SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";

import { KeyString, regions, districts, settlements, settlement_types } from "../../libraries/administrative";

let regionCode = '';
let institutionType = '';

export const instrument6 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.instrument && args.instrument.length > 0) {
                instrumentID = parseInt(args.instrument[0].id);

                for (const item of args.instrument) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }

            }

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("q1", util.customDate());

            if (args.userData) {
                // set default values for user
                util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                util.setValue('q3', args.userData.job_title);
                util.setValue('q4', args.userData.profession);
                util.setValue('q5', args.userData.phone);
                util.setValue('q6', args.userData.email);
                regionCode = args.userData.region;
            }

            if (args.institutionData) {

                // set default values for institution
                util.setValue('i1', args.institutionData.name);
                util.setValue('i2', args.institutionData.code);
                util.setValue('i3', args.institutionData.address);

                if (Object.keys(regions).indexOf(args.institutionData.region) >= 0) {
                    util.setValue('i4a', "" + (regions[args.institutionData.region] as KeyString)[lang]);
                }

                if (Object.keys(districts).indexOf(args.institutionData.district) >= 0) {
                    util.setValue('i4', args.institutionData.district);
                    util.setValue('i4b', "" + (districts[args.institutionData.district] as KeyString)[lang]);
                }

                if (Object.keys(settlements).indexOf(args.institutionData.settlement) >= 0) {
                    util.setValue('i4', args.institutionData.settlement);
                    const settlement = settlements[args.institutionData.settlement];
                    util.setValue('i4c', "" + (settlement as KeyString)[lang]);
                    util.setValue('i4d', "" + (settlement_types[settlement.type] as KeyString)[lang]);
                }

                // Type of institution
                util.setValue('i9', args.institutionData.type);
                institutionType = args.institutionData.type;
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

const validateChestionar = () => true;

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "dsee";
    obj.extras = {
        region_code: regionCode,
        institution_type: institutionType,
    }
    ipcRenderer.send("saveInstrument", obj);
}

const net1_b = ['net1a_b','net1b_b','net1c_b','net1d_b','net1e_b']; // tnet_b
const net1_g = ['net1a_g','net1b_g','net1c_g','net1d_g','net1e_g']; // tnet_g
const net1_t = ['net1a_t', 'net1b_t', 'net1c_t', 'net1d_t', 'net1e_t']; // tnet_t

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

const nes_b = ['nes1_b','nes2_b','nes3_b']; // nest_b
const nes_g = ['nes1_g','nes2_g','nes3_g']; // nest_g
const nes_t = ['nes1_t','nes2_t','nes3_t']; // nest_t

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


const neo_b = ['neo1_b','neo2_b','neo3_b','neo4_b','neo5_b','neo6_b','neo7_b','neo8_b']; // neo_b
const neo_g = ['neo1_g','neo2_g','neo3_g','neo4_g','neo5_g','neo6_g','neo7_g','neo8_g']; // neo_g
const neo_t = ['neo1_t','neo2_t','neo3_t','neo4_t','neo5_t','neo6_t','neo7_t','neo8_t']; // neo_t

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

const unu_b = ['nest_b', 'neo_b'];
const unu_bt = [...unu_b, 'tnet_b'];
unu_bt.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(unu_bt)) {
            const tnet_b = util.getInputNumericValue('tnet_b');
            const message = 'NESTb + NEOb = TNETb';

            errorHandler.removeError(unu_bt, message)
            if (tnet_b != Number(util.makeInputSumDecimal(unu_b))) {
                errorHandler.addError(unu_bt, message);
            }
        }
    });
});

// nest_g + neo_g = tnet_g

const unu_g = ['nest_g', 'neo_g'];
const unu_gt = [...unu_g, 'tnet_g'];
unu_gt.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(unu_gt)) {
            const tnet_g = util.getInputNumericValue('tnet_g');
            const message = 'NESTg + NEOg = TNETg';

            errorHandler.removeError(unu_gt, message)
            if (tnet_g != Number(util.makeInputSumDecimal(unu_g))) {
                errorHandler.addError(unu_gt, message);
            }
        }
    });
});

// nest_t + neo_t = tnet_t

const unu_t = ['nest_t', 'neo_t'];
const unu_tt = [...unu_t, 'tnet_t'];
unu_tt.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(unu_tt)) {
            const tnet_t = util.getInputNumericValue('tnet_t');
            const message = 'NEST + NEO = TNET';

            errorHandler.removeError(unu_tt, message)
            if (tnet_t != Number(util.makeInputSumDecimal(unu_t))) {
                errorHandler.addError(unu_tt, message);
            }
        }
    });
});



const nex1_b = ['nex1a_b','nex1b_b','nex1c_b','nex1d_b','nex1e_b','nex1f_b']; // next_b
const nex1_g = ['nex1a_g','nex1b_g','nex1c_g','nex1d_g','nex1e_g','nex1f_g']; // next_g
const nex1_t = ['nex1a_t', 'nex1b_t', 'nex1c_t', 'nex1d_t', 'nex1e_t']; // next_t

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



const eos_b = ['eos1_b','eos2_b','eos3_b','eos4_b']; // eos_b
const eos_g = ['eos1_g','eos2_g','eos3_g','eos4_g']; // eos_g
const eost_t = ['eos1_t','eos2_t','eos3_t','eos4_t']; // eost_t

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



const ext_b = ['ext0_b','ext1_b','ext2_b','ext3_b','ext4_b','ext5_b','ext6_b','ext7_b']; // extt_b
const ext_g = ['ext0_g','ext1_g','ext2_g','ext3_g','ext4_g','ext5_g','ext6_g','ext7_g']; // extt_g
const extt_t = ['ext0_t','ext1_t','ext2_t','ext3_t','ext4_t','ext5_t','ext6_t','ext7_t']; // extt_t

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



const tsa_b = ['tsa1_b','tsa2_b','tsa3_b']; // tsa_b
const tsa_g = ['tsa1_g','tsa2_g','tsa3_g']; // tsa_g
const tsat_t = ['tsa1_t','tsa2_t','tsa3_t']; // tsat_t

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

const tnr = ['tnr1_b','tnr1_g','tnr1_t'];
tnr.forEach((item) => {
    util.listen(item, 'change', () => {
        util.setValue('tnr1_t', util.makeSumFromElements(tnr).toString());
    });
});

const final = ['tnr0', 'tnet_t', 'next_t', 'tnr1_t'];

final.forEach((item) => {
    util.listen(item, 'change', () => {
        if (util.inputsHaveValue(final)) {
            const tnr1_t = util.getInputNumericValue('tnr1_t');
            const tnet_t = util.getInputNumericValue('tnet_t');
            const next_t = util.getInputNumericValue('next_t');
            const tnr0 = util.getInputNumericValue('tnr0');
            const message = 'TNR0 + TNET - NEXT = TNR1';

            errorHandler.removeError(final, message)
            if (tnr1_t != (tnr0 + tnet_t - next_t)) {
                errorHandler.addError(final, message);
            }
        }
    });
});
