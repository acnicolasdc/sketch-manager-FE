import React from 'react'
import ModalCreator from './container/ModalCreator';
import { Rect } from '../../utils/_';
import Rectangle from './components/Rectangle';
import { StoreContext } from '../../providers/Store';
import Portal from 'modules/Drawer/components/Portal';
import ContextMenu from "modules/Drawer/components/ContextMenu";

export interface RectangleProps {
  selected?: string;
  selectRect?: (id: string) => void;
};


const RectangleModule: React.FunctionComponent<RectangleProps> = (
  { selected = '', selectRect = () => { } }
) => {

  const [selectedContextMenu, setSelectedContextMenu] = React.useState<any>({});
  const [openSubMenu, setOpenSubMenu] = React.useState<boolean>(false);
  const { deleteReact, updateReact, rectangles } = React.useContext(StoreContext);

  const handlerClick = (e: any, id: any) => {
    if (e.type === 'click' || e.type === 'tap') {
      selectRect(id);
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
    const rects = rectangles.slice();
    const indexElement = rects.findIndex((element: any) => element.id === selected);
    rects.splice(indexElement, 1);
    deleteReact(rects);
  }
  const handleOptionSelected = (option: string) => {
    if (option === 'delete') deleteElement();
    setSelectedContextMenu({});
    setOpenSubMenu(false);
    selectRect('');
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
      {rectangles?.map((element: Rect, i: number) => {
        return (
          <Rectangle
            key={element.id}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e: any) => handlerClick(e, element.id)}
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
