import React from 'react'
 
import ModalCreator from './container/ModalCreator';
import { Label } from '../../utils/_';
import Text from './components/Text';
import { StoreContext } from '../../providers/Store';

export interface RectangleProps {
    selected?: string;
    selectText?:(id:string)=>void;    
};


const TextModule: React.FunctionComponent<RectangleProps> = (
    {selected='', selectText = ()=>{}}
) => {
  const { texts, updateTexts } = React.useContext(StoreContext);
  const handlerClick = (e:any, id:any) => {
    if (e.type === 'click') {
        selectText(id);
      } else if (e.type === 'contextmenu') {
        window.addEventListener("contextmenu", function(a){ a.preventDefault()})
        alert('Right click');
      }
  }
  return (
    <React.Fragment>
      {texts?.map((element: Label, i: number) => {
          return (
            <Text
              key={i} 
              shapeProps={element}
              isSelected={element.id === selected}
              onSelect={(e:any) => handlerClick(e, element.id)}
              onChange={(newAttrs: object) => {
                const rects = texts.slice();
                rects[i] = newAttrs;
                updateTexts(rects);
            }}
            />
          );
      })}
    </React.Fragment>
  );
}

export const TextModal = ModalCreator;
export default React.memo(TextModule)
