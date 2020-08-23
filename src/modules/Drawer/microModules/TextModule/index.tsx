import React from 'react'
import ModalCreator from './container/ModalCreator';
import { Label } from '../../utils/_';
import Text from './components/Text';
import { StoreContext } from '../../providers/Store';
import Portal from 'modules/Drawer/components/Portal';
import ContextMenu from "modules/Drawer/components/ContextMenu";

export interface RectangleProps {
  selected?: string;
  selectText?: (id: string) => void;
};


const TextModule: React.FunctionComponent<RectangleProps> = (
  { selected = '', selectText = () => { } }
) => {

  const [selectedContextMenu, setSelectedContextMenu] = React.useState<any>({});
  const [openSubMenu, setOpenSubMenu] = React.useState<boolean>(false);
  const { texts, updateTexts, deleteTexts } = React.useContext(StoreContext);

  const handlerClick = (e: any, id: any) => {
    if (e.type === 'click' || e.type === 'tap') {
      selectText(id);
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
    const rects = texts.slice();
    const indexElement = rects.findIndex((element: any) => element.id === selected);
    rects.splice(indexElement, 1);
    deleteTexts(rects);
  }
  const handleOptionSelected = (option: string) => {
    if (option === 'delete') deleteElement();
    setSelectedContextMenu({});
    setOpenSubMenu(false);
    selectText('');
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
      {texts?.map((element: Label, i: number) => {
        return (
          <Text
            key={element.id}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e: any) => handlerClick(e, element.id)}
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
