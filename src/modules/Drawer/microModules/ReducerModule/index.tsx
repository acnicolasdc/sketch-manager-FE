import React from 'react'
import ModalCreator from './container/ModalCreator';
import { Rect } from '../../utils/_';
import Reducer from './components/Reducer';
import { StoreContext } from '../../providers/Store';
import Portal from 'modules/Drawer/components/Portal';
import ContextMenu from "modules/Drawer/components/ContextMenu";

export interface ReducerProps {
  selected?: string;
  selectReducer?: (id: string) => void;
};


const ReducerModule: React.FunctionComponent<ReducerProps> = (
  { selected = '', selectReducer = () => { } }
) => {
  const [selectedContextMenu, setSelectedContextMenu] = React.useState<any>({});
  const [openSubMenu, setOpenSubMenu] = React.useState<boolean>(false);
  const { deleteReducers, updateReducers, reducers } = React.useContext(StoreContext);

  const handlerClick = (e: any, id: any) => {
    if (e.type === 'click' || e.type === 'tap') {
      selectReducer(id);
      setOpenSubMenu(false);
    } else if (e.type === 'contextmenu') {
      window.addEventListener("contextmenu", function (a) { a.preventDefault() })
      const mousePosition = e.target.getStage().getPointerPosition();
      setSelectedContextMenu({
        position: mousePosition,
      });
      setOpenSubMenu(true);
    }
  }

  const deleteElement = () => {
    const rects = reducers.slice();
    const indexElement = rects.findIndex((element: any) => element.id === selected);
    rects.splice(indexElement, 1);
    deleteReducers(rects);
  }
  const handleOptionSelected = (option: string) => {
    if (option === 'delete') deleteElement();
    setSelectedContextMenu({});
    setOpenSubMenu(false);
    selectReducer('');
  };

  return (
    <React.Fragment>
      {openSubMenu && selected !== '' && (
        <Portal>
          <ContextMenu
            position={selectedContextMenu.position}
            onOptionSelected={handleOptionSelected}
          />
        </Portal>
      )}
      {reducers?.map((element: Rect, i: number) => {
        return (
          <Reducer
            key={element.id}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e: any) => handlerClick(e, element.id)}
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
