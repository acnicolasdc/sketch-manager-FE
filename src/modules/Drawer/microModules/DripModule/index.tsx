import React from 'react'
import ModalCreator from './container/ModalCreator';
import { Circle } from '../../utils/_';
import Drip from './components/Drip';
import { StoreContext } from '../../providers/Store';
import Portal from 'modules/Drawer/components/Portal';
import ContextMenu from "modules/Drawer/components/ContextMenu";

export interface DripProps {
  selected?: string;
  selectDrip?: (id: string) => void;
};

const DripModule: React.FunctionComponent<DripProps> = (
  { selected = '', selectDrip = () => { } }
) => {
  const [selectedContextMenu, setSelectedContextMenu] = React.useState<any>({});
  const [openSubMenu, setOpenSubMenu] = React.useState<boolean>(false);
  const { deleteDrips, updateDrips, drips } = React.useContext(StoreContext);

  React.useEffect(() => {
    if (selected !== selectedContextMenu.id) {
      setOpenSubMenu(false);
    }
  }, [selected, selectedContextMenu]);

  const changeSubMenuState = (isActive:boolean) => {
    if (openSubMenu !== isActive) {
      setOpenSubMenu(isActive);
    } 
  }

  const handlerClick = (e: any, id: any) => {
    selectDrip(id);
    if (e.type === 'contextmenu') {
      window.addEventListener("contextmenu", function (a) { a.preventDefault() })
      const mousePosition = e.target.getStage().getPointerPosition();
      setSelectedContextMenu({
        position: mousePosition,
        id
      });
      changeSubMenuState(true);
    }
  }

  const deleteElement = () => {
    const rects = drips.slice();
    const indexElement = rects.findIndex((element: any) => element.id === selected);
    rects.splice(indexElement, 1);
    deleteDrips(rects);
  }
  const handleOptionSelected = (option: string) => {
    if (option === 'delete') deleteElement();
    setSelectedContextMenu({});
    changeSubMenuState(false);
    selectDrip('');
  };

  return (
    <React.Fragment>
      {openSubMenu && (
        <Portal>
          <ContextMenu
            position={selectedContextMenu.position}
            onOptionSelected={handleOptionSelected}
          />
        </Portal>
      )}
      {drips?.map((element: Circle, i: number) => {
        return (
          <Drip
            key={element.id}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e: any) => handlerClick(e, element.id)}
            onDragStart={()=>changeSubMenuState(false)}
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
