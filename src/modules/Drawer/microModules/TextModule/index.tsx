import React from 'react'
import { Layer } from 'react-konva';
import ModalCreator from './container/ModalCreator';
import { Label } from '../../utils/_';
import Text from './components/Text';
import { StoreContext } from '../../providers/Store';

export interface RectangleProps {
    selected?: string;
    selectRect?:(id:string)=>void;    
};


const TextModule: React.FunctionComponent<RectangleProps> = (
    {selected='', selectRect = ()=>{}}
) => {
  const { texts } = React.useContext(StoreContext);
  return (
    <Layer>
      {texts?.map((element: Label, i: number) => {
          return (
          <Text shapeProps={element}/>
          );
      })}
    </Layer>
  );
}

export const TextModal = ModalCreator;
export default TextModule
