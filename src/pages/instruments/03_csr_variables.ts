import instrument from '../../libraries/instrument';
import { QuestionObjectType } from '../../libraries/interfaces';


export const questions: QuestionObjectType = {
    'q1': {
        name: 'q1',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: true,
        readonly: true,
        order: 0,
        active: function() {return(true)},
        skip: false
    },
    'q2': {
        name: 'q2',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 1,
        active: function() {return(true)},
        skip: false
    },
    'q3': {
        name: 'q3',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 2,
        active: function() {return(true)},
        skip: false
    },
    'q4': {
        name: 'q4',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 3,
        active: function() {return(true)},
        skip: false
    },
    'q5': {
        name: 'q5',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 4,
        active: function() {return(true)},
        skip: false
    },
    'q6': {
        name: 'q6',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 5,
        active: function() {return(true)},
        skip: false
    },
    'i1': {
        name: 'i1',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 6,
        active: function() {return(true)},
        skip: false
    },
    'i2': {
        name: 'i2',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 7,
        active: function() {return(true)},
        skip: false
    },
    'i3': {
        name: 'i3',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 8,
        active: function() {return(true)},
        skip: false
    },
    'i4': {
        name: 'i4',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 9,
        active: function() {return(true)},
        skip: false
    },
    'i4a': {
        name: 'i4a',
        type: 'select',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 10,
        active: function() {return(true)},
        skip: false
    },
    'i4b': {
        name: 'i4b',
        type: 'select',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 11,
        active: function() {return(true)},
        skip: false
    },
    'i4c': {
        name: 'i4c',
        type: 'select',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 12,
        active: function() {return(true)},
        skip: false
    },
    'i4d': {
        name: 'i4d',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: true,
        readonly: true,
        order: 13,
        active: function() {return(true)},
        skip: false
    },
    'i5': {
        name: 'i5',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: true,
        order: 14,
        active: function() {return(true)},
        skip: false
    },
    'j1': {
        name: 'j1',
        type: 'input',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 15,
        active: function() {return(true)},
        skip: false
    },
    'j2_na': {
        name: 'j2_na',
        type: 'checkbox',
        value: '0',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 16,
        active: function() {return(true)},
        skip: false,
         checked: 0
    },
    'j2': {
        name: 'j2',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 17,
        active: function() {return(Number(instrument.questions.j2_na.value) == 0)},
        skip: false
    },
    'j3': {
        name: 'j3',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 18,
        active: function() {return(true)},
        skip: false
    },
    'j4': {
        name: 'j4',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 19,
        active: function() {return(true)},
        skip: false
    },
    'j5': {
        name: 'j5',
        type: 'number',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 20,
        active: function() {return(true)},
        skip: false
    },
    'j6': {
        name: 'j6',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 21,
        active: function() {return(true)},
        skip: false
    },
    'j7': {
        name: 'j7',
        type: 'number',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 22,
        active: function() {return(true)},
        skip: false
    },
    'j8': {
        name: 'j8',
        type: 'radio',
        value: '-9',
        disabled: false,
        hidden: false,
        readonly: false,
        order: 23,
        active: function() {return(true)},
        skip: false
    },
    'e1': {
        name: 'e1',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 24,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'euid': {
        name: 'euid',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: true,
        readonly: true,
        order: 25,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e2': {
        name: 'e2',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 26,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e3': {
        name: 'e3',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 27,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e4': {
        name: 'e4',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 28,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e5': {
        name: 'e5',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 29,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e6': {
        name: 'e6',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 30,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e7': {
        name: 'e7',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 31,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e8': {
        name: 'e8',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 32,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e8_other': {
        name: 'e8_other',
        type: 'input',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 33,
        active: function() {return((Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2) && Number(instrument.questions.e8.value) == 8)},
        skip: false
    },
    'e9': {
        name: 'e9',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 34,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e10': {
        name: 'e10',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 35,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e11': {
        name: 'e11',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 36,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e12': {
        name: 'e12',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 37,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e13': {
        name: 'e13',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 38,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e14': {
        name: 'e14',
        type: 'number',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 39,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e15': {
        name: 'e15',
        type: 'double',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 40,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e16': {
        name: 'e16',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 41,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
    'e17': {
        name: 'e17',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 42,
        active: function() {return((Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2))},
        skip: false
    },
    'e18': {
        name: 'e18',
        type: 'radio',
        value: '-7',
        disabled: true,
        hidden: false,
        readonly: false,
        order: 43,
        active: function() {return(Number(instrument.questions.j8.value) == 1 || Number(instrument.questions.j8.value) == 2)},
        skip: false
    },
};

export const questionOrder: Array<string> = [
    'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'i1', 'i2', 'i3', 'i4', 'i4a', 'i4b', 'i4c', 'i4d', 'i5', 'j1', 'j2_na',
    'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'e1', 'euid', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e8_other',
    'e9', 'e10', 'e11', 'e12', 'e13', 'e14', 'e15', 'e16', 'e17', 'e18'
];

export const exportHeader: Array<{ id: string; title: string }> = [
    {'id': 'q1', 'title': 'Q1'},
    {'id': 'q2', 'title': 'Q2'},
    {'id': 'q3', 'title': 'Q3'},
    {'id': 'q4', 'title': 'Q4'},
    {'id': 'q5', 'title': 'Q5'},
    {'id': 'q6', 'title': 'Q6'},
    {'id': 'i1', 'title': 'I1'},
    {'id': 'i2', 'title': 'I2'},
    {'id': 'i3', 'title': 'I3'},
    {'id': 'i4', 'title': 'I4'},
    {'id': 'i4a', 'title': 'I4A'},
    {'id': 'i4b', 'title': 'I4B'},
    {'id': 'i4c', 'title': 'I4C'},
    {'id': 'i4d', 'title': 'I4D'},
    {'id': 'i5', 'title': 'I5'},
    {'id': 'j1', 'title': 'J1'},
    {'id': 'j2_na', 'title': 'J2_NA'},
    {'id': 'j2', 'title': 'J2'},
    {'id': 'j3', 'title': 'J3'},
    {'id': 'j4', 'title': 'J4'},
    {'id': 'j5', 'title': 'J5'},
    {'id': 'j6', 'title': 'J6'},
    {'id': 'j7', 'title': 'J7'},
    {'id': 'j8', 'title': 'J8'},
    {'id': 'e1', 'title': 'E1'},
    {'id': 'euid', 'title': 'EUID'},
    {'id': 'e2', 'title': 'E2'},
    {'id': 'e3', 'title': 'E3'},
    {'id': 'e4', 'title': 'E4'},
    {'id': 'e5', 'title': 'E5'},
    {'id': 'e6', 'title': 'E6'},
    {'id': 'e7', 'title': 'E7'},
    {'id': 'e8', 'title': 'E8'},
    {'id': 'e8_other', 'title': 'E8_OTHER'},
    {'id': 'e9', 'title': 'E9'},
    {'id': 'e10', 'title': 'E10'},
    {'id': 'e11', 'title': 'E11'},
    {'id': 'e12', 'title': 'E12'},
    {'id': 'e13', 'title': 'E13'},
    {'id': 'e14', 'title': 'E14'},
    {'id': 'e15', 'title': 'E15'},
    {'id': 'e16', 'title': 'E16'},
    {'id': 'e17', 'title': 'E17'},
    {'id': 'e18', 'title': 'E18'},
];