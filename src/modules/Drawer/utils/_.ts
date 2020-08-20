export type Rect = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    value?: string;
    data?: any;
    rotation?:number;
    id?: string;
    name?: string;
}

export type Label = {
    x?: number;
    y?: number;
    fontSize?: number;
    text?: string;
    id?: string;
    name?: string;
}

export type Circle = {
    x?: number;
    y?: number;
    radius?: number;
    code?:string;
    id?: string;
    name?: string;
}

export type Trinagle = {
    x?: number;
    y?: number;
    value?:string;
    id?: string;
    name?: string;
}

export type Options = {
    label?: string;
    key?: string;
    icon?: string;
    name?: string;
}

export type LineCoupling = {
    id?: string;
    x?: number;
    y?: number;
    text?: string;
    type?: string;
    name?: string;
}

export enum ModulesEnum {
    rect = "rect-module",
    text = "text-module",
    line = "line-module",
    valve = "valve-module",
    drip = "drip-module",
    reducer = "reducer-module",
    union = "union-module",
}

export enum CouplingEnum {
    tf = "TF",
    ij = "IJ",
    simple = "SM",
    uni = "UNI",
}