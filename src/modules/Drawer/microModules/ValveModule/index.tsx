import React from 'react'
import ModalCreator from './container/ModalCreator';
import { Circle } from '../../utils/_';
import Valve from './components/Valve';
import { StoreContext } from '../../providers/Store';
import Portal from 'modules/Drawer/components/Portal';
import ContextMenu from "modules/Drawer/components/ContextMenu";

export interface ValveProps {
  selected?: string;
  selectValve?: (id: string) => void;
};

const ValveModule: React.FunctionComponent<ValveProps> = (
  { selected = '', selectValve = () => { } }
) => {
  const [selectedContextMenu, setSelectedContextMenu] = React.useState<any>({});
  const [openSubMenu, setOpenSubMenu] = React.useState<boolean>(false);
  const { deleteValves, updateValves, valves } = React.useContext(StoreContext);

  const handlerClick = (e: any, id: any) => {
    if (e.type === 'click' || e.type === 'tap') {
      selectValve(id);
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
    const rects = valves.slice();
    const indexElement = rects.findIndex((element: any) => element.id === selected);
    rects.splice(indexElement, 1);
    deleteValves(rects);
  }
  const handleOptionSelected = (option: string) => {
    if (option === 'delete') deleteElement();
    setSelectedContextMenu({});
    setOpenSubMenu(false);
    selectValve('');
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
      {valves?.map((element: Circle, i: number) => {
        return (
          <Valve
            key={element.id}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e: any) => handlerClick(e, element.id)}
            onChange={(newAttrs: object) => {
              const rects = valves.slice();
              rects[i] = newAttrs;
              updateValves(rects);
            }}
          />
        );
      })}
    </React.Fragment>
  );
}

export const ValveModal = ModalCreator;
export default React.memo(ValveModule);
