import React from 'react'
import { Stage } from 'react-konva';
import StoreProvider, { StoreContext } from './providers/Store';
import TextModule, { TextModal } from './microModules/TextModule';
import RectangleModule, { RectangleModal } from './microModules/RectangleModule';
import OptionsBar from './components/OptionsBar';
import { DrawerContainer } from './Drawer.style';
import { INITIAL_OPTIONS } from './utils/assets';
import { ModulesEnum } from './utils/_';

const Drawer: React.FunctionComponent = () => {
  const [runModule, setRunModule] = React.useState<string>('');
  const [selectedId, selectShape] = React.useState<string>('');

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape('');
    }
  };

  const closeModal = () => setRunModule('');

  return (
    <StoreProvider>
      <DrawerContainer>
          <OptionsBar
              onClick={(key: string)=>setRunModule(key)} 
              options={INITIAL_OPTIONS}
          />
            <StoreContext.Consumer>
              {value => (
                  <Stage
                      width={window.innerWidth-170}
                      height={window.innerHeight}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}>
                        <StoreContext.Provider value={value}>
                            <RectangleModule
                              selected={selectedId}
                              selectRect={selectShape}
                            />
                            <TextModule />
                        </StoreContext.Provider>
                  </Stage>
              )}
            </StoreContext.Consumer>
        </DrawerContainer>
      <RectangleModal isOpen={runModule===ModulesEnum.rect} cancell={closeModal}/>
      <TextModal isOpen={runModule===ModulesEnum.text} cancell={closeModal}/>
    </StoreProvider>
  );
}

export default Drawer
