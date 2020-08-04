import React from 'react'
import { Layer } from 'react-konva';
import ModalCreator from './container/ModalCreator';
import { Circle } from '../../utils/_';
import Valve from './components/Valve';
import { StoreContext } from '../../providers/Store';

export interface ValveProps {
    selected?: string;
    selectValve?:(id:string)=>void;    
};

const ValveModule: React.FunctionComponent<ValveProps> = (
    {selected='', selectValve = ()=>{}}
) => {
const { updateValves, valves } = React.useContext(StoreContext);
  const handlerClick = (e:any, id:any) => {
    if (e.type === 'click') {
        selectValve(id);
      } else if (e.type === 'contextmenu') {
        window.addEventListener("contextmenu", function(a){ a.preventDefault()})
        alert('Right click');
      }
  }
  return (
    <Layer>
    {valves?.map((element: Circle, i: number) => {
        return (
        <Valve
            key={i}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e:any) => handlerClick(e, element.id)}
            onChange={(newAttrs: object) => {
                const rects = valves.slice();
                rects[i] = newAttrs;
                updateValves(rects);
            }}
            />
        );
    })}
    </Layer>
  );
}

export const ValveModal = ModalCreator;
export default ValveModule
