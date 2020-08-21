import { GridEnum } from './_';

export type Callback = (a:number, b:number, c: number)=> number;

export const toDegrees = (number:number): number => {
  return number*(Math.PI/180)
}

export const add = (a: number, b:number, c: number): number => a+b*c;

export const minus = (a: number, b:number, c: number): number => a-b*c;

export const onTransformX = (rotation: number = 0, width: number = 0, x: number = 0, cb: Callback): number => {
  let tranradians = toDegrees(rotation);
  let xr = x + Math.cos(tranradians)*(width/2);
  return cb(xr,15, Math.sin(tranradians));
}

export const onTransformY = (rotation: number = 0, width: number = 0, y: number = 0, cb: Callback): number => {
  let tranradians = toDegrees(rotation);
  let yr = y + Math.sin(tranradians)*(width/2);
  return cb(yr,15, Math.cos(tranradians));
}


export const lengthConfiguration = (length: number ):number => {
  return Math.round(length/GridEnum.block)*GridEnum.block;
}

export const moveConfiguration = (length: number, height: number = 0 ):number => {
  const toMove = (GridEnum.block/2)-height;
  return Math.round(length/toMove)*toMove;
}