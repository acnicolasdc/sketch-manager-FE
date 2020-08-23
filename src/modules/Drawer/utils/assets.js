import { ModulesEnum, CouplingEnum } from './_';

export const RECT = {
    x: 200,
    y: 200,
    width: 450,
    height: 5,
    value:'500"',
    data:{},
    rotation:0,
    id: 'rect-code',
    name:'guideLine-element'
}

export const LABEL = {
  x: 200,
  y: 200,
  fontSize: 15,
  text: '',
  id: 'label-code',
  name:'guideLine-element'
}

export const CIRCLE = {
  x: 200,
  y: 200,
  radius: 8,
  code:'V#12345',
  id: 'circle-code',
  name:'guideLine-element',
  rotation:0,
}

export const TRIANGLE = {
  x: 200,
  y: 200,
  code:'12"',
  id: 'triangle-code',
  name:'guideLine-element',
  width: 30,
  height: 15,
  rotation:0,
}

export const COUPLING = {
  x: 200,
  y: 200,
  id: 'coupling-code',
  type: CouplingEnum.uni,
  text: '',
  name:'guideLine-element',
  rotation:0,
}

export const INITIAL_OPTIONS = [
    {label: 'Pipe', key: ModulesEnum.rect, icon:'BsDash'},
    {label: 'Coupling', key: ModulesEnum.union, icon:'BsCrop'},
    {label: 'Valve', key: ModulesEnum.valve, icon:'BsCircle'},
    {label: 'Drip', key: ModulesEnum.drip, icon:'BsCircleFill'},
    {label: 'Reducer', key: ModulesEnum.reducer, icon:'BsCaretRightFill'},
    {label: 'Label', key: ModulesEnum.text, icon:'BsTextareaT'},
];

export const INITIAL_RECTS = [
    {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      fill: 'red',
      id: 'rect1'
    },
    {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      fill: 'green',
      id: 'rect2'
    }
];



export const OPTIONS_TYPES_MATERIAL = [
  { label: "PE", id: "PE" },
  { label: "PT", id: "PT" },
  { label: "ST", id: "ST" },
  { label: "ST (C)", id: "ST(C)" },
  { label: "CI", id: "CI" },
  { label: "CT", id: "CT" },
  { label: "WI", id: "WI" },
];

export const OPTIONS_TYPES_METHOD = [
  { label: "DB", id: "DB" },
  { label: "INSERT", id: "INSERT" },
  { label: "HOLEHOG", id: "HOLEHOG" },
  { label: "PIM", id: "PIM" },
  { label: "CONSPLIT", id: "CONSPLIT" },
];

export const OPTIONS_TYPES_PRESSURE = [
  { label: "LP", id: "LP" },
  { label: "MP", id: "MP" },
  { label: "IP", id: "IP" },
  { label: "HP", id: "HP" },
  { label: "TP", id: "TP" },
];
export const OPTIONS_TYPES_SIZE = [
  { label: '1"', id: "1" },
  { label: '1-1/4"', id: "1-1/4" },
  { label: '1-1/2"', id: "1-1/2" },
  { label: '2"', id: "2" },
  { label: '3"', id: "3" },
  { label: '4"', id: "4" },
  { label: '6"', id: "6" },
  { label: '8"', id: "8" },
  { label: '12"', id: "12" },
  { label: '16"', id: "16" },
  { label: '20"', id: "20" },
  { label: '24"', id: "24" },
];

export const VALVE_TYPES = [
  { label: 'BALL', id: "BALL" },
  { label: 'PLUG', id: "PLUG" },
  { label: 'GATE', id: "GATE" },
];


export const VALVE_HAS_BEEN = [
  { label: 'INSTALLED NEW', id: "INSTALLED_NEW" },
  { label: 'ABANDONED', id: "ABANDONED" },
  { label: 'REPAIRED', id: "REPAIRED" },
  { label: 'OPERATED', id: "OPERATED" },
];