import instrument from '../../libraries/instrument';
import { QuestionObjectType } from '../../libraries/interfaces';


export const questions: QuestionObjectType = {
    'reg': {
        name: 'reg',
        type: 'select',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 0,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'dis': {
        name: 'dis',
        type: 'select',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 1,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'data': {
        name: 'data',
        type: 'input',
        value: '-9',
        disabled: true,
        hidden: true,
        readonly: true,
        order: 2,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'q2': {
        name: 'q2',
        type: 'input',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 3,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'inst': {
        name: 'inst',
        type: 'input',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 4,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'q3': {
        name: 'q3',
        type: 'input',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 5,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'q4': {
        name: 'q4',
        type: 'input',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 6,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'q5': {
        name: 'q5',
        type: 'input',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 7,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'q6': {
        name: 'q6',
        type: 'input',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 8,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'pf1a': {
        name: 'pf1a',
        type: 'select',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 9,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'pf1b': {
        name: 'pf1b',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 10,
        active: function() {return(Number(instrument.questions.pf1a.value) > 0)},
        error: '',
        skip: false
    },
    'pf1c': {
        name: 'pf1c',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 11,
        active: function() {return(Number(instrument.questions.pf1b.value) > 0)},
        error: '',
        skip: false
    },
    'pf1d': {
        name: 'pf1d',
        type: 'input',
        value: '-9',
        disabled: true,
        hidden: true,
        readonly: true,
        order: 12,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'pf2': {
        name: 'pf2',
        type: 'number',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 13,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'pf3': {
        name: 'pf3',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 14,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig1': {
        name: 'ig1',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 15,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig2': {
        name: 'ig2',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 16,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig3': {
        name: 'ig3',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 17,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig4': {
        name: 'ig4',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 18,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig5': {
        name: 'ig5',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 19,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig5_age': {
        name: 'ig5_age',
        type: 'number',
        value: '-9',
        disabled: true,
        hidden: false,
        readonly: true,
        order: 20,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig6': {
        name: 'ig6',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 21,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig7': {
        name: 'ig7',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 22,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig8': {
        name: 'ig8',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 23,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ig8_other': {
        name: 'ig8_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 24,
        active: function() {return(Number(instrument.questions.ig8.value) == 16)},
        error: '',
        skip: false
    },
    'pf4a': {
        name: 'pf4a',
        type: 'number',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 25,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'pf4b': {
        name: 'pf4b',
        type: 'number',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 26,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'pf5': {
        name: 'pf5',
        type: 'number',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 27,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'fc4_c1a': {
        name: 'fc4_c1a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 28,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c1b': {
        name: 'fc4_c1b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 29,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c1c': {
        name: 'fc4_c1c',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 30,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c1d': {
        name: 'fc4_c1d',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 31,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c1e': {
        name: 'fc4_c1e',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 32,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c1e_other': {
        name: 'fc4_c1e_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 33,
        active: function() {return(Number(instrument.questions.pf2.value) > 0 && Number(instrument.questions.fc4_c1e.value) == 5)},
        error: '',
        skip: false
    },
    'fc4_c1f': {
        name: 'fc4_c1f',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 34,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c1g': {
        name: 'fc4_c1g',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 35,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c2a': {
        name: 'fc4_c2a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 36,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c2b': {
        name: 'fc4_c2b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 37,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c2c': {
        name: 'fc4_c2c',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 38,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c2d': {
        name: 'fc4_c2d',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 39,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c2e': {
        name: 'fc4_c2e',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 40,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c2e_other': {
        name: 'fc4_c2e_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 41,
        active: function() {return(Number(instrument.questions.pf2.value) > 0 && Number(instrument.questions.fc4_c2e.value) == 5)},
        error: '',
        skip: false
    },
    'fc4_c2f': {
        name: 'fc4_c2f',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 42,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c2g': {
        name: 'fc4_c2g',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 43,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c3a': {
        name: 'fc4_c3a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 44,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c3b': {
        name: 'fc4_c3b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 45,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c3c': {
        name: 'fc4_c3c',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 46,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c3d': {
        name: 'fc4_c3d',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 47,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c3e': {
        name: 'fc4_c3e',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 48,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c3e_other': {
        name: 'fc4_c3e_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 49,
        active: function() {return(Number(instrument.questions.pf2.value) > 0 && Number(instrument.questions.fc4_c3e.value) == 5)},
        error: '',
        skip: false
    },
    'fc4_c3f': {
        name: 'fc4_c3f',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 50,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c3g': {
        name: 'fc4_c3g',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 51,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c4a': {
        name: 'fc4_c4a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 52,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c4b': {
        name: 'fc4_c4b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 53,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c4c': {
        name: 'fc4_c4c',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 54,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c4d': {
        name: 'fc4_c4d',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 55,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c4e': {
        name: 'fc4_c4e',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 56,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c4e_other': {
        name: 'fc4_c4e_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 57,
        active: function() {return(Number(instrument.questions.pf2.value) > 0 && Number(instrument.questions.fc4_c4e.value) == 5)},
        error: '',
        skip: false
    },
    'fc4_c4f': {
        name: 'fc4_c4f',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 58,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c4g': {
        name: 'fc4_c4g',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 59,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c5a': {
        name: 'fc4_c5a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 60,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c5b': {
        name: 'fc4_c5b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 61,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c5c': {
        name: 'fc4_c5c',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 62,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c5d': {
        name: 'fc4_c5d',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 63,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c5e': {
        name: 'fc4_c5e',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 64,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c5e_other': {
        name: 'fc4_c5e_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 65,
        active: function() {return(Number(instrument.questions.pf2.value) > 0 && Number(instrument.questions.fc4_c5e.value) == 5)},
        error: '',
        skip: false
    },
    'fc4_c5f': {
        name: 'fc4_c5f',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 66,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'fc4_c5g': {
        name: 'fc4_c5g',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 67,
        active: function() {return(Number(instrument.questions.pf2.value) > 0)},
        error: '',
        skip: false
    },
    'ex1': {
        name: 'ex1',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 68,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'ex2': {
        name: 'ex2',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 69,
        active: function() {return(Number(instrument.questions.ex1.value) == 1)},
        error: '',
        skip: false
    },
    'ex3_c1a': {
        name: 'ex3_c1a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 70,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c1b': {
        name: 'ex3_c1b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 71,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c1c': {
        name: 'ex3_c1c',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 72,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c1d': {
        name: 'ex3_c1d',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 73,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c1d_other': {
        name: 'ex3_c1d_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 74,
        active: function() {return(Number(instrument.questions.ex2.value) > 0 && Number(instrument.questions.ex3_c1d.value) == 10)},
        error: '',
        skip: false
    },
    'ex3_c2a': {
        name: 'ex3_c2a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 75,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c2b': {
        name: 'ex3_c2b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 76,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c2c': {
        name: 'ex3_c2c',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 77,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c2d': {
        name: 'ex3_c2d',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 78,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c2d_other': {
        name: 'ex3_c2d_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 79,
        active: function() {return(Number(instrument.questions.ex2.value) > 0 && Number(instrument.questions.ex3_c2d.value) == 10)},
        error: '',
        skip: false
    },
    'ex3_c3a': {
        name: 'ex3_c3a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 80,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c3b': {
        name: 'ex3_c3b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 81,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c3c': {
        name: 'ex3_c3c',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 82,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c3d': {
        name: 'ex3_c3d',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 83,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c3d_other': {
        name: 'ex3_c3d_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 84,
        active: function() {return(Number(instrument.questions.ex2.value) > 0 && Number(instrument.questions.ex3_c3d.value) == 10)},
        error: '',
        skip: false
    },
    'ex3_c4a': {
        name: 'ex3_c4a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 85,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c4b': {
        name: 'ex3_c4b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 86,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c4c': {
        name: 'ex3_c4c',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 87,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c4d': {
        name: 'ex3_c4d',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 88,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c4d_other': {
        name: 'ex3_c4d_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 89,
        active: function() {return(Number(instrument.questions.ex2.value) > 0 && Number(instrument.questions.ex3_c4d.value) == 10)},
        error: '',
        skip: false
    },
    'ex3_c5a': {
        name: 'ex3_c5a',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 90,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c5b': {
        name: 'ex3_c5b',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 91,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c5c': {
        name: 'ex3_c5c',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 92,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c5d': {
        name: 'ex3_c5d',
        type: 'select',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 93,
        active: function() {return(Number(instrument.questions.ex2.value) > 0)},
        error: '',
        skip: false
    },
    'ex3_c5d_other': {
        name: 'ex3_c5d_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 94,
        active: function() {return(Number(instrument.questions.ex2.value) > 0 && Number(instrument.questions.ex3_c5d.value) == 10)},
        error: '',
        skip: false
    },
    'qs1': {
        name: 'qs1',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 95,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'qs1a': {
        name: 'qs1a',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 96,
        active: function() {return(Number(instrument.questions.qs1.value) == 1)},
        error: '',
        skip: false
    },
    'qs2': {
        name: 'qs2',
        type: 'number',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 97,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'qs3': {
        name: 'qs3',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 98,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'qs4': {
        name: 'qs4',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 99,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'qs5': {
        name: 'qs5',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 100,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'qs6': {
        name: 'qs6',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 101,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'qs7': {
        name: 'qs7',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 102,
        active: function() {return(true)},
        error: '',
        skip: false
    },
    'qs8': {
        name: 'qs8',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 103,
        active: function() {return(true)},
        error: '',
        skip: false
    },
};

export const questionsOrder: Array<string> = [
    'reg', 'dis', 'data', 'q2', 'inst', 'q3', 'q4', 'q5', 'q6', 'pf1a', 'pf1b', 'pf1c', 'pf1d', 'pf2', 'pf3',
    'ig1', 'ig2', 'ig3', 'ig4', 'ig5', 'ig5_age', 'ig6', 'ig7', 'ig8', 'ig8_other', 'pf4a', 'pf4b', 'pf5',
    'fc4_c1a', 'fc4_c1b', 'fc4_c1c', 'fc4_c1d', 'fc4_c1e', 'fc4_c1e_other', 'fc4_c1f', 'fc4_c1g', 'fc4_c2a',
    'fc4_c2b', 'fc4_c2c', 'fc4_c2d', 'fc4_c2e', 'fc4_c2e_other', 'fc4_c2f', 'fc4_c2g', 'fc4_c3a', 'fc4_c3b',
    'fc4_c3c', 'fc4_c3d', 'fc4_c3e', 'fc4_c3e_other', 'fc4_c3f', 'fc4_c3g', 'fc4_c4a', 'fc4_c4b', 'fc4_c4c',
    'fc4_c4d', 'fc4_c4e', 'fc4_c4e_other', 'fc4_c4f', 'fc4_c4g', 'fc4_c5a', 'fc4_c5b', 'fc4_c5c', 'fc4_c5d',
    'fc4_c5e', 'fc4_c5e_other', 'fc4_c5f', 'fc4_c5g', 'ex1', 'ex2', 'ex3_c1a', 'ex3_c1b', 'ex3_c1c', 'ex3_c1d',
    'ex3_c1d_other', 'ex3_c2a', 'ex3_c2b', 'ex3_c2c', 'ex3_c2d', 'ex3_c2d_other', 'ex3_c3a', 'ex3_c3b',
    'ex3_c3c', 'ex3_c3d', 'ex3_c3d_other', 'ex3_c4a', 'ex3_c4b', 'ex3_c4c', 'ex3_c4d', 'ex3_c4d_other',
    'ex3_c5a', 'ex3_c5b', 'ex3_c5c', 'ex3_c5d', 'ex3_c5d_other', 'qs1', 'qs1a', 'qs2', 'qs3', 'qs4', 'qs5',
    'qs6', 'qs7', 'qs8'
];

export const exportHeader: Array<{ id: string; title: string }> = [
    {'id': 'reg', 'title': 'REG'},
    {'id': 'dis', 'title': 'DIS'},
    {'id': 'data', 'title': 'DATA'},
    {'id': 'q2', 'title': 'Q2'},
    {'id': 'inst', 'title': 'INST'},
    {'id': 'q3', 'title': 'Q3'},
    {'id': 'q4', 'title': 'Q4'},
    {'id': 'q5', 'title': 'Q5'},
    {'id': 'q6', 'title': 'Q6'},
    {'id': 'pf1a', 'title': 'PF1A'},
    {'id': 'pf1b', 'title': 'PF1B'},
    {'id': 'pf1c', 'title': 'PF1C'},
    {'id': 'pf1d', 'title': 'PF1D'},
    {'id': 'pf2', 'title': 'PF2'},
    {'id': 'pf3', 'title': 'PF3'},
    {'id': 'ig1', 'title': 'IG1'},
    {'id': 'ig2', 'title': 'IG2'},
    {'id': 'ig3', 'title': 'IG3'},
    {'id': 'ig4', 'title': 'IG4'},
    {'id': 'ig5', 'title': 'IG5'},
    {'id': 'ig5_age', 'title': 'IG5_AGE'},
    {'id': 'ig6', 'title': 'IG6'},
    {'id': 'ig7', 'title': 'IG7'},
    {'id': 'ig8', 'title': 'IG8'},
    {'id': 'ig8_other', 'title': 'IG8_OTHER'},
    {'id': 'pf4a', 'title': 'PF4A'},
    {'id': 'pf4b', 'title': 'PF4B'},
    {'id': 'pf5', 'title': 'PF5'},
    {'id': 'fc4_c1a', 'title': 'FC4_C1A'},
    {'id': 'fc4_c1b', 'title': 'FC4_C1B'},
    {'id': 'fc4_c1c', 'title': 'FC4_C1C'},
    {'id': 'fc4_c1d', 'title': 'FC4_C1D'},
    {'id': 'fc4_c1e', 'title': 'FC4_C1E'},
    {'id': 'fc4_c1e_other', 'title': 'FC4_C1E_OTHER'},
    {'id': 'fc4_c1f', 'title': 'FC4_C1F'},
    {'id': 'fc4_c1g', 'title': 'FC4_C1G'},
    {'id': 'fc4_c2a', 'title': 'FC4_C2A'},
    {'id': 'fc4_c2b', 'title': 'FC4_C2B'},
    {'id': 'fc4_c2c', 'title': 'FC4_C2C'},
    {'id': 'fc4_c2d', 'title': 'FC4_C2D'},
    {'id': 'fc4_c2e', 'title': 'FC4_C2E'},
    {'id': 'fc4_c2e_other', 'title': 'FC4_C2E_OTHER'},
    {'id': 'fc4_c2f', 'title': 'FC4_C2F'},
    {'id': 'fc4_c2g', 'title': 'FC4_C2G'},
    {'id': 'fc4_c3a', 'title': 'FC4_C3A'},
    {'id': 'fc4_c3b', 'title': 'FC4_C3B'},
    {'id': 'fc4_c3c', 'title': 'FC4_C3C'},
    {'id': 'fc4_c3d', 'title': 'FC4_C3D'},
    {'id': 'fc4_c3e', 'title': 'FC4_C3E'},
    {'id': 'fc4_c3e_other', 'title': 'FC4_C3E_OTHER'},
    {'id': 'fc4_c3f', 'title': 'FC4_C3F'},
    {'id': 'fc4_c3g', 'title': 'FC4_C3G'},
    {'id': 'fc4_c4a', 'title': 'FC4_C4A'},
    {'id': 'fc4_c4b', 'title': 'FC4_C4B'},
    {'id': 'fc4_c4c', 'title': 'FC4_C4C'},
    {'id': 'fc4_c4d', 'title': 'FC4_C4D'},
    {'id': 'fc4_c4e', 'title': 'FC4_C4E'},
    {'id': 'fc4_c4e_other', 'title': 'FC4_C4E_OTHER'},
    {'id': 'fc4_c4f', 'title': 'FC4_C4F'},
    {'id': 'fc4_c4g', 'title': 'FC4_C4G'},
    {'id': 'fc4_c5a', 'title': 'FC4_C5A'},
    {'id': 'fc4_c5b', 'title': 'FC4_C5B'},
    {'id': 'fc4_c5c', 'title': 'FC4_C5C'},
    {'id': 'fc4_c5d', 'title': 'FC4_C5D'},
    {'id': 'fc4_c5e', 'title': 'FC4_C5E'},
    {'id': 'fc4_c5e_other', 'title': 'FC4_C5E_OTHER'},
    {'id': 'fc4_c5f', 'title': 'FC4_C5F'},
    {'id': 'fc4_c5g', 'title': 'FC4_C5G'},
    {'id': 'ex1', 'title': 'EX1'},
    {'id': 'ex2', 'title': 'EX2'},
    {'id': 'ex3_c1a', 'title': 'EX3_C1A'},
    {'id': 'ex3_c1b', 'title': 'EX3_C1B'},
    {'id': 'ex3_c1c', 'title': 'EX3_C1C'},
    {'id': 'ex3_c1d', 'title': 'EX3_C1D'},
    {'id': 'ex3_c1d_other', 'title': 'EX3_C1D_OTHER'},
    {'id': 'ex3_c2a', 'title': 'EX3_C2A'},
    {'id': 'ex3_c2b', 'title': 'EX3_C2B'},
    {'id': 'ex3_c2c', 'title': 'EX3_C2C'},
    {'id': 'ex3_c2d', 'title': 'EX3_C2D'},
    {'id': 'ex3_c2d_other', 'title': 'EX3_C2D_OTHER'},
    {'id': 'ex3_c3a', 'title': 'EX3_C3A'},
    {'id': 'ex3_c3b', 'title': 'EX3_C3B'},
    {'id': 'ex3_c3c', 'title': 'EX3_C3C'},
    {'id': 'ex3_c3d', 'title': 'EX3_C3D'},
    {'id': 'ex3_c3d_other', 'title': 'EX3_C3D_OTHER'},
    {'id': 'ex3_c4a', 'title': 'EX3_C4A'},
    {'id': 'ex3_c4b', 'title': 'EX3_C4B'},
    {'id': 'ex3_c4c', 'title': 'EX3_C4C'},
    {'id': 'ex3_c4d', 'title': 'EX3_C4D'},
    {'id': 'ex3_c4d_other', 'title': 'EX3_C4D_OTHER'},
    {'id': 'ex3_c5a', 'title': 'EX3_C5A'},
    {'id': 'ex3_c5b', 'title': 'EX3_C5B'},
    {'id': 'ex3_c5c', 'title': 'EX3_C5C'},
    {'id': 'ex3_c5d', 'title': 'EX3_C5D'},
    {'id': 'ex3_c5d_other', 'title': 'EX3_C5D_OTHER'},
    {'id': 'qs1', 'title': 'QS1'},
    {'id': 'qs1a', 'title': 'QS1A'},
    {'id': 'qs2', 'title': 'QS2'},
    {'id': 'qs3', 'title': 'QS3'},
    {'id': 'qs4', 'title': 'QS4'},
    {'id': 'qs5', 'title': 'QS5'},
    {'id': 'qs6', 'title': 'QS6'},
    {'id': 'qs7', 'title': 'QS7'},
    {'id': 'qs8', 'title': 'QS8'},
]