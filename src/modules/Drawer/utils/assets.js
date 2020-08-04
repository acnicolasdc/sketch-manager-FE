import { ModulesEnum } from './_';

export const RECT = {
    x: 200,
    y: 200,
    width: 450,
    height: 10,
    fill: '#34495e',
    id: 'rect-code'
}

export const LABEL = {
  x: 200,
  y: 200,
  fontSize: 15,
  text: '',
  id: 'label-code',
}

export const INITIAL_OPTIONS = [
    {label: 'Pipe', key: ModulesEnum.rect, icon:'BsDash'},
    {label: 'Union', key: ModulesEnum.union, icon:'BsCrop'},
    {label: 'Valve', key: ModulesEnum.valve, icon:'BsCircle'},
    {label: 'Drip', key: ModulesEnum.drip, icon:'BsCircleFill'},
    {label: 'Reducer', key: ModulesEnum.decrease, icon:'BsCaretRightFill'},
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