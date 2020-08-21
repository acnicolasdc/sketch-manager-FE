import React from 'react'
import ModalCreator from './container/ModalCreator';
import { Rect } from '../../utils/_';
import Rectangle from './components/Rectangle';
import { StoreContext } from '../../providers/Store';

export interface RectangleProps {
    selected?: string;
    selectRect?:(id:string)=>void;    
};


const RectangleModule: React.FunctionComponent<RectangleProps> = (
    {selected='', selectRect = ()=>{}}
) => {
const { updateReact, rectangles } = React.useContext(StoreContext);
  const handlerClick = (e:any, id:any) => {
    if (e.type === 'click' || e.type === 'tap') {
        selectRect(id);
      } else if (e.type === 'contextmenu') {
        window.addEventListener("contextmenu", function(a){ a.preventDefault()})
        alert('Right click');
      }
  }
  return (
    <React.Fragment>
    {rectangles?.map((element: Rect, i: number) => {
        return (
        <Rectangle
            key={i}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e:any) => handlerClick(e, element.id)}
            onChange={(newAttrs: object) => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                updateReact(rects);
            }}
            />
        );
    })}
    </React.Fragment>
  );
}

export const RectangleModal = ModalCreator;
export default React.memo(RectangleModule);
