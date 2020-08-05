import * as React from "react";
import { Table } from "baseui/table";
import {
  Modal,
  ModalHeader,
  ModalBody,
  SIZE,
  ROLE
} from "baseui/modal";
import { StoreContext } from '../../providers/Store';

export interface InformationProps {
    isOpen?: boolean;
    cancell?: () => void
};


const InformationModule: React.FunctionComponent<InformationProps> = ({ isOpen=false, cancell=()=>{} }) => {
 const { rectangles } = React.useContext(StoreContext);

 const headerGenerator = (arrayRects: any[] = []): string[] => {
    const newHeader = arrayRects.map((element, index)=>`SEGMENT ${index+1}`)
    const secondHEader = ['', ...newHeader]
     return secondHEader;
 }

 const groupBy = (keyGetter:any):any => {
    const map = new Map();
    rectangles.forEach((item:any) => {
        const size = keyGetter(item,'size');
        const material = keyGetter(item,'material');
        const pressure = keyGetter(item,'pressure');
        const method = keyGetter(item,'method');
        const year = keyGetter(item,'year');
        const key = `${size}/${material}/${pressure}/${method}/${year}`;
         const collection = map.get(key);
         if (!collection) {
             console.log("IF",item);
             map.set(key, [item]);
         } else {
            console.log("ELSE",item);
             collection.push(item);
         }
    });
    return map;
}
const sumStrings = (val:string, val2: string): number => {
    return parseInt(val, 10)+parseInt(val2, 10);
}

 const dataGenerator = (): any => {
     const size = ['SIZE'];
     const year = ['YEAR'];
     const cover = ['COVER'];
     const length = ['LENGTH'];
     const material = ['MATERIAL'];
     const method = ['METHOD'];
     const pressure = ['PRESSURE'];
    const grouped = groupBy((item:any, key:string)=>item.data[key]);
    const newGrouped:any = [];
    grouped.forEach((value:any, key:string) => {
        let newElement:any = {}
        value.forEach(({data}:any) => {
            newElement = {
                ...data,
                length: newElement.length?sumStrings(newElement.length,data.length):parseInt(data.length)
            }
        });
        newGrouped.push(newElement);
    });
    const header = headerGenerator(newGrouped);
    newGrouped.forEach((data:any)=>{
        Object.keys(data).forEach(key => {
            switch (key) {
                case 'size':
                    size.push(data[key])
                    break;
                case 'year':
                    year.push(data[key])
                    break;
                case 'cover':
                    cover.push(data[key])
                    break;
                case 'length':
                    length.push(`${data[key]}'`)
                    break;
                case 'material':
                    material.push(data[key])
                        break;
                case 'method':
                    method.push(data[key])
                    break;
                case 'pressure':
                    pressure.push(data[key])
                    break;           
            }
        })
    })
    return { data: [size, year, cover, length, material, method, pressure], header:header};
 }
 const {data, header} = dataGenerator()
  return (
    <Modal
      onClose={cancell}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.full}
      role={ROLE.dialog}
    >
      <ModalHeader>Report status</ModalHeader>
      <ModalBody>
      <Table
      columns={header}
      data={data}
    />
      </ModalBody>
    </Modal>
  );
}

export default InformationModule;
