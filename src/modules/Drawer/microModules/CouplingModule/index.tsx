import React from 'react'
import ModalCreator from './containers/ModalCreator';
import { LineCoupling, CouplingEnum } from '../../utils/_';
import SimpleUnion from './components/SimpleUnion';
import Union from './components/Union';
import { StoreContext } from '../../providers/Store';
import Portal from 'modules/Drawer/components/Portal';
import ContextMenu from "modules/Drawer/components/ContextMenu";

export interface RectangleProps {
  selected?: string;
  selectCoupling?: (id: string) => void;
};


const CouplingModule: React.FunctionComponent<RectangleProps> = (
  { selected = '', selectCoupling = () => { } }
) => {
  const [selectedContextMenu, setSelectedContextMenu] = React.useState<any>({});
  const [openSubMenu, setOpenSubMenu] = React.useState<boolean>(false);
  const { couplings, updateCouplings, deleteCouplings } = React.useContext(StoreContext);

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
    selectCoupling(id);
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
    const rects = couplings.slice();
    const indexElement = rects.findIndex((element: any) => element.id === selected);
    rects.splice(indexElement, 1);
    deleteCouplings(rects);
  }
  const handleOptionSelected = (option: string) => {
    if (option === 'delete') deleteElement();
    setSelectedContextMenu({});
    changeSubMenuState(false);
    selectCoupling('');
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
      {couplings?.map((element: LineCoupling, i: number) => {
        if (CouplingEnum.uni === element.type) {
          return (
            <Union
              key={element.id}
              shapeProps={element}
              isSelected={element.id === selected}
              onSelect={(e: any) => handlerClick(e, element.id)}
              onDragStart={()=>changeSubMenuState(false)}
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
            key={element.id}
            shapeProps={element}
            isSelected={element.id === selected}
            onSelect={(e: any) => handlerClick(e, element.id)}
            onDragStart={()=>setOpenSubMenu(false)}
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
