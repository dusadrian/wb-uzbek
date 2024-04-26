import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./04_qmr_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { KeyString, regions, districts, settlements, settlement_types } from "../../libraries/administrative";


export const instrument4 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        const flatpickrConfig1: {
            enableTime: boolean;
            dateFormat: string;
            maxDate: string;
            locale?: typeof Russian | typeof UzbekLatin
        } = {
            enableTime: false,
            dateFormat: "Y",
            maxDate: "30/04/2024"
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const flatpickrConfig2: {
            enableTime: boolean;
            dateFormat: string;
            maxDate: string;
            locale?: typeof Russian | typeof UzbekLatin
        } = {
            enableTime: false,
            dateFormat: "m/Y",
            maxDate: "30/04/2024"
        }

        if (lang == "uz") {
            flatpickrConfig1.locale = UzbekLatin;
            flatpickrConfig2.locale = UzbekLatin;
        }
        if (lang == "ru") {
            flatpickrConfig1.locale = Russian;
            flatpickrConfig2.locale = Russian;
        }

        const af5_dates = [
            'af5_1_d', 'af5_2_d', 'af5_3_d', 'af5_4_d', 'af5_5_d',
            'af5_6_d', 'af5_7_d', 'af5_8_d', 'af5_9_d', 'af5_10_d'
        ]

        af5_dates.forEach(item => {
            flatpickr(util.htmlElement(item), flatpickrConfig1);
        });

        flatpickr(util.htmlElement('i10'), flatpickrConfig1);
        flatpickr(util.htmlElement('af13b'), flatpickrConfig2);

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
            util.setValue("data", util.customDate());

            if (args.userData) {
                util.setValue('q2', args.userData.first_name + " " + args.userData.patronymics + " " + args.userData.last_name);
                util.setValue('q3', args.userData.position);
                util.setValue('q4', args.userData.profession);
                util.setValue('q5', args.userData.phone);
                util.setValue('q6', args.userData.email);
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

            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);

        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {
    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "qmr";
    ipcRenderer.send("saveInstrument", obj);
}





// Validari custom


const i13bf = ['i13b', 'i13c', 'i13d', 'i13e', 'i13f'];
const i13 = [...i13bf, 'i13a'];
util.listen(i13, 'change', () => {
    if (util.inputsHaveValue(i13)) {
        const eroare = 'a >= b + c + d + e + f';
        errorHandler.removeError(i13, eroare)
        if (util.getInputDecimalValue('i13a') < util.makeSumFromElements(i13bf)) {
            errorHandler.addError(i13, eroare);
        }
    }
})

const la6 = ['la6a', 'la6b'];
const la6la7 = [...la6, 'la7'];
util.listen(la6la7, 'change', () => {
    if (util.inputsHaveValue(la6la7)) {
        const eroare = 'LA7 <= LA6 (a. + b.)';
        errorHandler.removeError(la6la7, eroare)
        if (util.getInputDecimalValue('la7') > util.makeSumFromElements(la6)) {
            errorHandler.addError(la6la7, eroare);
        }
    }
});


const la6la8 = [...la6, 'la8'];
util.listen(la6la8, 'change', () => {
    if (util.inputsHaveValue(la6la8)) {
        const eroare = 'LA8 <= LA6 (a. + b.)';
        errorHandler.removeError(la6la8, eroare)
        if (util.getInputDecimalValue('la8') > util.makeSumFromElements(la6)) {
            errorHandler.addError(la6la8, eroare);
        }
    }
})

const af5_a = [
    'af5_1_a', 'af5_2_a', 'af5_3_a', 'af5_4_a', 'af5_5_a',
    'af5_6_a', 'af5_7_a', 'af5_8_a', 'af5_9_a', 'af5_10_a',
];
const af5af1 = [...af5_a, 'af1'];
af5af1.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        const af4b = Number(instrument.questions.af4b.value);
        if (af4b > 0) {
            const af5_deschis = new Array<string>(af4b);
            for (let i = 0; i < af4b; i++) {
                af5_deschis[i] = 'af5_' + (i + 1) + '_a';
            }

            const af5_deschis_af1 = [...af5_deschis, 'af1'];

            if (util.inputsHaveValue(af5_deschis_af1)) {
                errorHandler.removeError(af5_deschis_af1, 'AF1 >= AF5 (a.)')
                if (util.getInputDecimalValue('af1') < util.makeSumFromElements(af5_deschis)) {
                    errorHandler.addError(af5_deschis_af1, 'AF1 >= AF5 (a.)');
                }
            }
        }
    })
})

const ac1be1 = ['ac1b1', 'ac1c1', 'ac1d1', 'ac1e1'];
const ac1_1 = [...ac1be1, 'ac1a1'];
ac1_1.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(ac1_1)) {
            errorHandler.removeError(ac1_1, 'AC1a1 >= AC1b1 + ... AC1e1')
            if (util.makeSumFromElements(ac1be1) > util.getInputDecimalValue('ac1a1')) {
                errorHandler.addError(ac1_1, 'AC1a1 >= AC1b1 + ... AC1e1');
            }
        }
    })
})

const ac1be2 = ['ac1b2', 'ac1c2', 'ac1d2', 'ac1e2'];
const ac1_2 = [...ac1be2, 'ac1a2'];
ac1_2.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(ac1_2)) {
            errorHandler.removeError(ac1_2, 'AC1a2 >= AC1b2 + ... AC1e2')
            if (util.makeSumFromElements(ac1be2) > util.getInputDecimalValue('ac1a2')) {
                errorHandler.addError(ac1_2, 'AC1a2 >= AC1b2 + ... AC1e2');
            }
        }
    })
})

const compare = ['ac1f1', 'ac1g1', 'ac1f2', 'ac1g2', 'ac5b1', 'ac5c1', 'ac5e1', 'i13b', 'i13c', 'i13d', 'i13e', 'i13f', 'i13g'];
const compare_to = ['ac1a1', 'ac1a1', 'ac1a2', 'ac1a2', 'ac5b', 'ac5c', 'ac5e', 'i13a', 'i13a', 'i13a', 'i13a', 'i13a', 'i13a'];

compare.forEach(item1 => {
    const index = compare.indexOf(item1);
    const item = compare_to[index];

    function check() {
        if (util.inputsHaveValue([item, item1])) {
            errorHandler.removeError([item, item1], (item + ' >= ' + item1).toUpperCase());
            if (util.getInputDecimalValue(item) < util.getInputDecimalValue(item1)) {
                errorHandler.addError([item, item1], (item + ' >= ' + item1).toUpperCase());
            }
        }
    }

    util.listen(item, 'change', check);
    util.listen(item1, 'change', check);
});


const cc5i12a = ['cc5', 'i12a'];
cc5i12a.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(cc5i12a)) {
            ///--------
            errorHandler.removeError(cc5i12a, 'CC5 <= I12a')
            if (util.getInputDecimalValue('cc5') > util.getInputDecimalValue('i12a')) {
                errorHandler.addError(cc5i12a, 'CC5 <= I12a');
            }
            // sau verifica daca eroarea exista deja, sa nu o adaug de mai multe ori
            // in principiu, addError() ar trebui sa verifice, insa am testat si
            // se adauga de mai multe ori
            ///--------
        }
    })
})

const cc5i13a = ['cc5', 'i13a'];
cc5i13a.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(cc5i13a)) {
            errorHandler.removeError(cc5i13a, 'CC5 <= I13a')
            if (util.getInputDecimalValue('cc5') > util.getInputDecimalValue('i13a')) {
                errorHandler.addError(cc5i13a, 'CC5 <= I13a');
            }
        }
    })
})

const de2a = ['de2a', 'de2b', 'de2c', 'de2d', 'de2e'];
const de2a_i13a = [...de2a, 'i13a'];
de2a_i13a.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(de2a_i13a)) {
            errorHandler.removeError(de2a_i13a, 'I13a >= DE2a + DE2b + DE2c + DE2d + DE2e')
            if (util.makeSumFromElements(de2a) > util.getInputDecimalValue('i13a')) {
                errorHandler.addError(de2a_i13a, 'I13a >= DE2a + DE2b + DE2c + DE2d + DE2e');
            }
        }
    })
})

const rce1i12a = ['rce1', 'i12a'];
rce1i12a.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(rce1i12a)) {
            errorHandler.removeError(rce1i12a, 'RCE1 <= I12a')
            if (util.getInputDecimalValue('rce1') > util.getInputDecimalValue('i12a')) {
                errorHandler.addError(rce1i12a, 'RCE1 <= I12a');
            }
        }
    })
})

const rce1 = ['rce1', 'rce1a', 'rce1b'];
rce1.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(rce1)) {
            errorHandler.removeError(rce1, 'RCE1 = RCE1a + RCE1b')
            if (util.getInputDecimalValue('rce1') != util.makeSumFromElements(rce1)) {
                errorHandler.addError(rce1, 'RCE1 = RCE1a + RCE1b');
            }
        }
    })
})

const af5_c = [
    'af5_1_c', 'af5_2_c', 'af5_3_c', 'af5_4_c', 'af5_5_c',
    'af5_6_c', 'af5_7_c', 'af5_8_c', 'af5_9_c', 'af5_10_c',
];
const af5edu5 = [...af5_c, 'edu5'];
af5edu5.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        const af4b = Number(instrument.questions.af4b.value);
        if (af4b > 0) {
            const af5_deschis = new Array<string>(af4b);
            for (let i = 0; i < af4b; i++) {
                af5_deschis[i] = 'af5_' + (i + 1) + '_c';
            }

            const af5_deschis_edu5 = [...af5_deschis, 'edu5'];

            if (util.inputsHaveValue(af5_deschis_edu5)) {
                // console.log(111);
                errorHandler.removeError(af5_deschis_edu5, 'EDU5 <= AF5 (c.)')
                if (util.getInputDecimalValue('edu5') > util.makeSumFromElements(af5_deschis)) {
                    errorHandler.addError(af5_deschis_edu5, 'EDU5 <= AF5 (c.)');
                }
            }
        }
    })
})


const ft7i12a = ['ft7', 'i12a'];
ft7i12a.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(ft7i12a)) {
            errorHandler.removeError(ft7i12a, 'FT7 <= I12a')
            if (util.getInputDecimalValue('ft7') > util.getInputDecimalValue('i12a')) {
                errorHandler.addError(ft7i12a, 'FT7 <= I12a');
            }
        }
    })
})

const ft7i13a = ['ft7', 'i13a'];
ft7i13a.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(ft7i13a)) {
            errorHandler.removeError(ft7i13a, 'FT7 <= I13a')
            if (util.getInputDecimalValue('ft7') > util.getInputDecimalValue('i13a')) {
                errorHandler.addError(ft7i13a, 'FT7 <= I13a');
            }
        }
    })
})

const ft2af1 = ['ft2', 'af1'];
ft2af1.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(ft2af1)) {
            errorHandler.removeError(ft2af1, 'FT2 < AF1')
            if (util.getInputDecimalValue('ft2') > util.getInputDecimalValue('af1')) {
                errorHandler.addError(ft2af1, 'FT2 < AF1');
            }
        }
    })
})




//E00 = E01 + E02 + E03
const e00Array = ['e01', 'e02', 'e03'];
const e00ArrayFull = [...e00Array, 'e00'];
e00ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e00ArrayFull)) {
            const e00 = util.getInputDecimalValue('e00');

            errorHandler.removeError(e00Array, '00 = 01 + 02 + 03')
            if (e00 != parseFloat(util.makeInputSumDecimal(e00Array))) {
                errorHandler.addError(e00Array, '00 = 01 + 02 + 03')
            }
        }
    })
});

//E01 = E10 + E20
const e01Array = ['e10', 'e20'];
const e01ArrayFull = [...e01Array, 'e01'];
e01ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e01ArrayFull)) {
            const e01 = util.getInputDecimalValue('e01');

            errorHandler.removeError(e01Array, '01 = 10 + 20')
            if (e01 != parseFloat(util.makeInputSumDecimal(e01Array))) {
                errorHandler.addError(e01Array, '01 = 10 + 20')
            }
        }
    })
});

//E10 = E10_1 + ... + E10_5
const e10Array = ['e10_1', 'e10_2', 'e10_3', 'e10_4', 'e10_5'];
const e10ArrayFull = [...e10Array, 'e10'];
e10ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e10ArrayFull)) {
            const e10 = util.getInputDecimalValue('e10');
            errorHandler.removeError(e10Array, '10 = 10.1 + ... + 10.5')
            if (e10 != parseFloat(util.makeInputSumDecimal(e10Array))) {
                errorHandler.addError(e10Array, '10 = 10.1 + ... + 10.5')
            }
        }
    })
});

// E20 = E20_1 + ... + E20_19
const e20Array = ['e20_1', 'e20_2', 'e20_3', 'e20_4', 'e20_5', 'e20_6', 'e20_7', 'e20_8', 'e20_9', 'e20_10', 'e20_11', 'e20_12', 'e20_13', 'e20_14', 'e20_15', 'e20_16', 'e20_17', 'e20_18', 'e20_19'];
const e20ArrayFull = [...e20Array, 'e20'];
e20ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e20ArrayFull)) {
            const e20 = util.getInputDecimalValue('e20');

            errorHandler.removeError(e20Array, '20 = 20.1 + ... + 20.19')
            if (e20 != parseFloat(util.makeInputSumDecimal(e20Array))) {
                errorHandler.addError(e20Array, '20 = 20.1 + ... + 20.19')
            }
        }
    })
});

//E02 = E2_1 + E2_2
const e02Array = ['e2_1', 'e2_2'];
const e02ArrayFull = [...e02Array, 'e02'];
e02ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e02ArrayFull)) {
            const e02 = util.getInputDecimalValue('e02');

            errorHandler.removeError(e02Array, '02 = 2.1 + 2.2')
            if (e02 != parseFloat(util.makeInputSumDecimal(e02Array))) {
                errorHandler.addError(e02Array, '02 = 2.1 + 2.2')
            }
        }
    })
});

//E2_1 = E2_1_1 + ... + E2_1_4
const e21Array = ['e2_1_1','e2_1_2','e2_1_3','e2_1_4'];
const e21ArrayFull = [...e21Array, 'e2_1'];
e21ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e21ArrayFull)) {
            const e21 = util.getInputDecimalValue('e2_1');

            errorHandler.removeError(e21Array, '2_1 = 2.1.1 + ... + 2.1.4')
            if (e21 != parseFloat(util.makeInputSumDecimal(e21Array))) {
                errorHandler.addError(e21Array, '2_1 = 2.1.1 + ... + 2.1.4')
            }
        }
    })
});


