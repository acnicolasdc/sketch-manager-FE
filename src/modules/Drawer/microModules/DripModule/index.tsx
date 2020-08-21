import React from 'react'
import ModalCreator from './container/ModalCreator';
import { Circle } from '../../utils/_';
import Drip from './components/Drip';
import { StoreContext } from '../../providers/Store';

export interface DripProps {
    selected?: string;
    selectDrip?:(id:string)=>void;    
};

const DripModule: React.FunctionComponent<DripProps> = (
    {selected='', selectDrip = ()=>{}}
) => {
const { updateDrips, drips } = React.useContext(StoreContext);
  const handlerClick = (e:any, id:any) => {
    if (e.type === 'click' || e.type === 'tap') {
        selectDrip(id);
      } else if (e.type === 'contextmenu') {
        window.addEventListener("contextmenu", function(a){ a.preventDefault()})
        alert('Right click');
      }
  }
  return (
    <React.Fragment>
    {drips?.map((element: Circle, i: number) => {
        return (
        <Drip
            key={i}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e:any) => handlerClick(e, element.id)}
            onChange={(newAttrs: object) => {
                const rects = drips.slice();
                rects[i] = newAttrs;
                updateDrips(rects);
            }}
            />
        );
    })}
    </React.Fragment>
  );
}

export const DripModal = ModalCreator;
export default React.memo(DripModule)
