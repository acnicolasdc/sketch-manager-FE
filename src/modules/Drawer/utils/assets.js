import { ModulesEnum } from './_';

export const RECT = {
    x: 200,
    y: 200,
    width: 450,
    height: 20,
    fill: '#34495e',
    id: 'rect-code'
}

export const INITIAL_OPTIONS = [
    {label: 'Pipe', key: ModulesEnum.rect, icon:'BsSquare'},
    {label: 'Text', key: ModulesEnum.text, icon:'BsTextareaT'},
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