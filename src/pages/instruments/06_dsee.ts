import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./06_dsee_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";

export const instrument6 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // const flatpickrConfig1: { enableTime: boolean; dateFormat: string; locale?: any } = {
        //     enableTime: false,
        //     dateFormat: "Y",
        // }
        // // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // const flatpickrConfig2: { enableTime: boolean; dateFormat: string; locale?: any } = {
        //     enableTime: false,
        //     dateFormat: "m/Y",
        // }

        // if (lang == "uz") {
        //     flatpickrConfig1.locale = UzbekLatin;
        //     flatpickrConfig2.locale = UzbekLatin;
        // }
        // if (lang == "ru") {
        //     flatpickrConfig1.locale = Russian;
        //     flatpickrConfig2.locale = Russian;
        // }

        // flatpickr((<HTMLInputElement>document.getElementById('i10')), flatpickrConfig1);
        // flatpickr((<HTMLInputElement>document.getElementById('af13b')), flatpickrConfig2);

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.instrument && args.instrument.length > 0) {
                instrumentID = parseInt(args.instrument[0].id);

                for (const item of args.instrument) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }

            } else {
                const q1 = (<HTMLInputElement>document.getElementById('q1'));
                // two digit day & month
                q1.value = new Date().getDate().toString().padStart(2, '0') + "/" + (new Date().getMonth() + 1).toString().padStart(2, '0') + "/" + new Date().getFullYear().toString();

                if (args.userData) {
                    // set default values for user
                    const q2 = (<HTMLInputElement>document.getElementById('q2'));
                    q2.value = args.userData.first_name + " " + args.userData.patronymics + " " + args.userData.last_name;
                    const q3 = (<HTMLInputElement>document.getElementById('q3'));
                    q3.value = args.userData.position;
                    const q4 = (<HTMLInputElement>document.getElementById('q4'));
                    q4.value = args.userData.profession;
                    const q5 = (<HTMLInputElement>document.getElementById('q5'));
                    q5.value = args.userData.phone;
                    const q6 = (<HTMLInputElement>document.getElementById('q6'));
                    q6.value = args.userData.email;
                }
                if (args.institutionData) {
                    // set default values for institution
                    const i1 = (<HTMLInputElement>document.getElementById('i1'));
                    i1.value = args.institutionData.name;
                    const i2 = (<HTMLInputElement>document.getElementById('i2'));
                    i2.value = args.institutionData.code;
                    const i3 = (<HTMLInputElement>document.getElementById('i3'));
                    i3.value = args.institutionData.address;
                    const i4 = (<HTMLInputElement>document.getElementById('i4'));
                    i4.value = args.institutionData.atuCode;
                    const i4a = (<HTMLInputElement>document.getElementById('i4a'));
                    i4a.value = args.institutionData.region;
                    const i4b = (<HTMLInputElement>document.getElementById('i4b'));
                    i4b.value = args.institutionData.district;
                    // TODO -- To be updated -- Settlement
                    const i4c = (<HTMLInputElement>document.getElementById('i4c'));
                    i4c.value = args.institutionData.district;
                    // TODO -- To be updated -- Type of settlement
                    const i4d = (<HTMLInputElement>document.getElementById('i4d'));
                    i4d.value = args.institutionData.district;
                    // Type of institution
                    const i9 = (<HTMLInputElement>document.getElementById('i9'));
                    i9.value = args.institutionData.type;

                }

            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => true;

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "dsee";
    ipcRenderer.send("saveInstrument", obj);
}

const net1_b = ['net1a_b','net1b_b','net1c_b','net1d_b','net1e_b']; // tnet_b
const net1_g = ['net1a_g','net1b_g','net1c_g','net1d_g','net1e_g']; // tnet_g
const net1_t = ['net1a_t', 'net1b_t', 'net1c_t', 'net1d_t', 'net1e_t']; // tnet_t

net1_b.forEach((b) => {
    document.getElementById(b).addEventListener('change', () => {
        const index = net1_b.indexOf(b);
        const g = net1_g[index];
        const t = net1_t[index];

        const rowsum = document.getElementById(t) as HTMLInputElement;
        rowsum.value = util.makeSumFromElements([b, g]).toString();
        rowsum.dispatchEvent(new Event('change'));

        const colsum = document.getElementById('tnet_b') as HTMLInputElement;
        colsum.value = util.makeSumFromElements(net1_b).toString();
        colsum.dispatchEvent(new Event('change'));
    });
});

net1_g.forEach((g) => {
    document.getElementById(g).addEventListener('change', () => {
        const index = net1_g.indexOf(g);
        const b = net1_b[index];
        const t = net1_t[index];

        const rowsum = document.getElementById(t) as HTMLInputElement;
        rowsum.value = util.makeSumFromElements([b, g]).toString();
        rowsum.dispatchEvent(new Event('change'));

        const colsum = document.getElementById('tnet_g') as HTMLInputElement;
        colsum.value = util.makeSumFromElements(net1_g).toString();
        colsum.dispatchEvent(new Event('change'));
    });
});

net1_t.forEach((t) => {
    document.getElementById(t).addEventListener('change', () => {
        const colsum = document.getElementById('tnet_t') as HTMLInputElement;
        colsum.value = util.makeSumFromElements(net1_t).toString();
        colsum.dispatchEvent(new Event('change'));
    });
});

const nes_b = ['nes1_b','nes2_b','nes3_b']; // nest_b
const nes_g = ['nes1_g','nes2_g','nes3_g']; // nest_g
const nes_t = ['nes1_t','nes2_t','nes3_t']; // nest_t

nes_b.forEach((b) => {
    document.getElementById(b).addEventListener('change', () => {
        const index = nes_b.indexOf(b);
        const g = nes_g[index];
        const t = nes_t[index];

        const rowsum = document.getElementById(t) as HTMLInputElement;
        rowsum.value = util.makeSumFromElements([b, g]).toString();
        rowsum.dispatchEvent(new Event('change'));

        const colsum = document.getElementById('nest_b') as HTMLInputElement;
        colsum.value = util.makeSumFromElements(nes_b).toString();
        colsum.dispatchEvent(new Event('change'));
    });
});

nes_g.forEach((g) => {
    document.getElementById(g).addEventListener('change', () => {
        const index = nes_g.indexOf(g);
        const b = nes_b[index];
        const t = nes_t[index];

        const rowsum = document.getElementById(t) as HTMLInputElement;
        rowsum.value = util.makeSumFromElements([b, g]).toString();
        rowsum.dispatchEvent(new Event('change'));

        const colsum = document.getElementById('nest_g') as HTMLInputElement;
        colsum.value = util.makeSumFromElements(nes_g).toString();
        colsum.dispatchEvent(new Event('change'));
    });
});

nes_t.forEach((t) => {
    document.getElementById(t).addEventListener('change', () => {
        const colsum = document.getElementById('nest_t') as HTMLInputElement;
        colsum.value = util.makeSumFromElements(nes_t).toString();
        colsum.dispatchEvent(new Event('change'));
    });
});


const neo_b = ['neo1_b','neo2_b','neo3_b','neo4_b','neo5_b','neo6_b','neo7_b','neo8_b']; // neo_b
const neo_g = ['neo1_g','neo2_g','neo3_g','neo4_g','neo5_g','neo6_g','neo7_g','neo8_g']; // neo_g
const neo_t = ['neo1_t','neo2_t','neo3_t','neo4_t','neo5_t','neo6_t','neo7_t','neo8_t']; // neo_t

neo_b.forEach((b) => {
    document.getElementById(b).addEventListener('change', () => {
        const index = neo_b.indexOf(b);
        const g = neo_g[index];
        const t = neo_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }

        if (util.inputsHaveValue(neo_b)) {
            const colsum = document.getElementById('neo_b') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(neo_b).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});

neo_g.forEach((g) => {
    document.getElementById(g).addEventListener('change', () => {
        const index = neo_g.indexOf(g);
        const b = neo_b[index];
        const t = neo_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }

        if (util.inputsHaveValue(neo_g)) {
            const colsum = document.getElementById('neo_g') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(neo_g).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});

neo_t.forEach((t) => {
    document.getElementById(t).addEventListener('change', () => {
        if (util.inputsHaveValue(neo_t)) {
            const colsum = document.getElementById('neo_t') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(neo_t).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});


// nest_b + neo_b = tnet_b

const unu_b = ['nest_b', 'neo_b'];
const unu_bt = [...unu_b, 'tnet_b'];
unu_bt.forEach((item) => {
    document.getElementById(item).addEventListener('change', () => {
        if (util.inputsHaveValue(unu_b)) {
            const tnet_b = util.getInputNumericValue('tnet_b');

            errorHandler.removeArrayError(unu_bt, 'NESTb + NEOb = TNETb')
            if (tnet_b != Number(util.makeInputSumDecimal(unu_bt))) {
                errorHandler.addArrayError(unu_bt, 'NESTSb + NEOb = TNETb');
            }
        }
    });
});

// nest_g + neo_g = tnet_g

const unu_g = ['nest_g', 'neo_g'];
const unu_gt = [...unu_g, 'tnet_g'];
unu_gt.forEach((item) => {
    document.getElementById(item).addEventListener('change', () => {
        if (util.inputsHaveValue(unu_g)) {
            const tnet_g = util.getInputNumericValue('tnet_g');

            errorHandler.removeArrayError(unu_gt, 'NESTg + NEOg = TNETg')
            if (tnet_g != Number(util.makeInputSumDecimal(unu_gt))) {
                errorHandler.addArrayError(unu_gt, 'NESTg + NEOg = TNETg');
            }
        }
    });
});

// nest_t + neo_t = tnet_t

const unu_t = ['nest_t', 'neo_t'];
const unu_tt = [...unu_t, 'tnet_t'];
unu_tt.forEach((item) => {
    document.getElementById(item).addEventListener('change', () => {
        if (util.inputsHaveValue(unu_t)) {
            const tnet_t = util.getInputNumericValue('tnet_t');

            errorHandler.removeArrayError(unu_tt, 'NEST + NEO = TNET')
            if (tnet_t != Number(util.makeInputSumDecimal(unu_tt))) {
                errorHandler.addArrayError(unu_tt, 'NEST + NEO = TNET');
            }
        }
    });
});



const nex1_b = ['nex1a_b','nex1b_b','nex1c_b','nex1d_b','nex1e_b','nex1f_b']; // next_b
const nex1_g = ['nex1a_g','nex1b_g','nex1c_g','nex1d_g','nex1e_g','nex1f_g']; // next_g
const nex1_t = ['nex1a_t', 'nex1b_t', 'nex1c_t', 'nex1d_t', 'nex1e_t']; // next_t

nex1_b.forEach((b) => {
    document.getElementById(b).addEventListener('change', () => {
        const index = nex1_b.indexOf(b);
        const g = nex1_g[index];
        const t = nex1_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }

        if (util.inputsHaveValue(nex1_b)) {
            const colsum = document.getElementById('next_b') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(nex1_b).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});

nex1_g.forEach((g) => {
    document.getElementById(g).addEventListener('change', () => {
        const index = nex1_g.indexOf(g);
        const b = nex1_b[index];
        const t = nex1_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }

        if (util.inputsHaveValue(nex1_g)) {
            const colsum = document.getElementById('next_g') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(nex1_g).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});

nex1_t.forEach((t) => {
    document.getElementById(t).addEventListener('change', () => {
        if (util.inputsHaveValue(nex1_t)) {
            const colsum = document.getElementById('next_t') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(nex1_t).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});



const eos_b = ['eos1_b','eos2_b','eos3_b','eos4_b']; // eos_b
const eos_g = ['eos1_g','eos2_g','eos3_g','eos4_g']; // eos_g
const eost_t = ['eos1_t','eos2_t','eos3_t','eos4_t']; // eost_t

eos_b.forEach((b) => {
    document.getElementById(b).addEventListener('change', () => {
        const index = eos_b.indexOf(b);
        const g = eos_g[index];
        const t = eost_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }

        if (util.inputsHaveValue(eos_b)) {
            const colsum = document.getElementById('eost_b') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(eos_b).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});

eos_g.forEach((g) => {
    document.getElementById(g).addEventListener('change', () => {
        const index = eos_g.indexOf(g);
        const b = eos_b[index];
        const t = eost_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }

        if (util.inputsHaveValue(eos_g)) {
            const colsum = document.getElementById('eost_g') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(eos_g).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});

eost_t.forEach((t) => {
    document.getElementById(t).addEventListener('change', () => {
        if (util.inputsHaveValue(eost_t)) {
            const colsum = document.getElementById('eost_t') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(eost_t).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});



const ext_b = ['ext0_b','ext1_b','ext2_b','ext3_b','ext4_b','ext5_b','ext6_b','ext7_b']; // extt_b
const ext_g = ['ext0_g','ext1_g','ext2_g','ext3_g','ext4_g','ext5_g','ext6_g','ext7_g']; // extt_g
const extt_t = ['ext0_t','ext1_t','ext2_t','ext3_t','ext4_t','ext5_t','ext6_t','ext7_t']; // extt_t

ext_b.forEach((b) => {
    document.getElementById(b).addEventListener('change', () => {
        const index = ext_b.indexOf(b);
        const g = ext_g[index];
        const t = extt_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }

        if (util.inputsHaveValue(ext_b)) {
            const colsum = document.getElementById('extt_b') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(ext_b).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});

ext_g.forEach((g) => {
    document.getElementById(g).addEventListener('change', () => {
        const index = ext_g.indexOf(g);
        const b = ext_b[index];
        const t = extt_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }

        if (util.inputsHaveValue(ext_g)) {
            const colsum = document.getElementById('extt_g') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(ext_g).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});

extt_t.forEach((t) => {
    document.getElementById(t).addEventListener('change', () => {
        if (util.inputsHaveValue(extt_t)) {
            const colsum = document.getElementById('extt_t') as HTMLInputElement;
            colsum.value = util.makeSumFromElements(extt_t).toString();
            colsum.dispatchEvent(new Event('change'));
        }
    });
});



const tsa_b = ['tsa1_b','tsa2_b','tsa3_b']; // tsa_b
const tsa_g = ['tsa1_g','tsa2_g','tsa3_g']; // tsa_g
const tsat_t = ['tsa1_t','tsa2_t','tsa3_t']; // tsat_t

tsa_b.forEach((b) => {
    document.getElementById(b).addEventListener('change', () => {
        const index = tsa_b.indexOf(b);
        const g = tsa_g[index];
        const t = tsat_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }
    });
});

tsa_g.forEach((g) => {
    document.getElementById(g).addEventListener('change', () => {
        const index = tsa_g.indexOf(g);
        const b = tsa_b[index];
        const t = tsat_t[index];

        if (util.inputsHaveValue([b, g])) {
            const rowsum = document.getElementById(t) as HTMLInputElement;
            rowsum.value = util.makeSumFromElements([b, g]).toString();
            rowsum.dispatchEvent(new Event('change'));
        }
    });
});

const tnr = ['tnr1_b','tnr1_g','tnr1_t'];
tnr.forEach((item) => {
    document.getElementById(item).addEventListener('change', () => {
        if (util.inputsHaveValue(tnr)) {
            const tnr_t = document.getElementById('tnr1_t') as HTMLInputElement;
            tnr_t.value = util.makeSumFromElements(tnr).toString();
            tnr_t.dispatchEvent(new Event('change'));
        }
    });
});

const final = ['tnr0', 'tnet_t', 'next_t', 'tnr1_t'];
final.forEach((item) => {
    document.getElementById(item).addEventListener('change', () => {
        if (util.inputsHaveValue(final)) {
            const tnr1_t = util.getInputNumericValue('tnr1_t');
            const tnet_t = util.getInputNumericValue('tnet_t');
            const next_t = util.getInputNumericValue('next_t');
            const tnr0 = util.getInputNumericValue('tnr0');

            errorHandler.removeArrayError(final, 'TNR0 + TNET - NEXT = TNR1')
            if (tnr1_t != (tnr0 + tnet_t - next_t)) {
                errorHandler.addArrayError(final, 'TNR0 + TNET - NEXT = TNR1');
            }
        }
    });
});