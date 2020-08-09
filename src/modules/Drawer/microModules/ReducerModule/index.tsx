import React from 'react'
import { Layer } from 'react-konva';
import ModalCreator from './container/ModalCreator';
import { Rect } from '../../utils/_';
import Reducer from './components/Reducer';
import { StoreContext } from '../../providers/Store';

export interface ReducerProps {
    selected?: string;
    selectReducer?:(id:string)=>void;    
};


const ReducerModule: React.FunctionComponent<ReducerProps> = (
    {selected='', selectReducer = ()=>{}}
) => {
const { updateReducers, reducers } = React.useContext(StoreContext);
  const handlerClick = (e:any, id:any) => {
    if (e.type === 'click') {
        selectReducer(id);
      } else if (e.type === 'contextmenu') {
        window.addEventListener("contextmenu", function(a){ a.preventDefault()})
        alert('Right click');
      }
  }
  return (
    <React.Fragment>
    {reducers?.map((element: Rect, i: number) => {
        return (
        <Reducer
            key={i}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e:any) => handlerClick(e, element.id)}
            onChange={(newAttrs: object) => {
                const rects = reducers.slice();
                rects[i] = newAttrs;
                updateReducers(rects);
            }}
            />
        );
    })}
    </React.Fragment>
  );
}

export const ReducerModal = ModalCreator;
export default React.memo(ReducerModule);
