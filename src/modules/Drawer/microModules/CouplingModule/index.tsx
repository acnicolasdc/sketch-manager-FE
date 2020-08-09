import React from 'react'
import ModalCreator from './containers/ModalCreator';
import { LineCoupling, CouplingEnum } from '../../utils/_';
import SimpleUnion from './components/SimpleUnion';
import Union from './components/Union';
import { StoreContext } from '../../providers/Store';

export interface RectangleProps {
    selected?: string;
    selectCoupling?:(id:string)=>void;    
};


const CouplingModule: React.FunctionComponent<RectangleProps> = (
    {selected='', selectCoupling = ()=>{}}
) => {
  const { couplings, updateCouplings } = React.useContext(StoreContext);
  const handlerClick = (e:any, id:any) => {
    if (e.type === 'click') {
        selectCoupling(id);
      } else if (e.type === 'contextmenu') {
        window.addEventListener("contextmenu", function(a){ a.preventDefault()})
        alert('Right click');
      }
  }
  return (
    <React.Fragment>
      {couplings?.map((element: LineCoupling, i: number) => {
          if(CouplingEnum.uni === element.type){
            return (
              <Union
              key={i} 
              shapeProps={element}
              isSelected={element.id === selected}
              onSelect={(e:any) => handlerClick(e, element.id)}
              onChange={(newAttrs: object) => {
                const rects = couplings.slice();
                rects[i] = newAttrs;
                updateCouplings(rects);
            }}
            />

            )
          }
          return (
            <SimpleUnion
              key={i} 
              shapeProps={element}
              isSelected={element.id === selected}
              onSelect={(e:any) => handlerClick(e, element.id)}
              onChange={(newAttrs: object) => {
                const rects = couplings.slice();
                rects[i] = newAttrs;
                updateCouplings(rects);
            }}
            />
          );
      })}
    </React.Fragment>
  );
}

export const CouplingModal = ModalCreator;
export default React.memo(CouplingModule)
