import React from 'react'
import { Stage } from 'react-konva';
import StoreProvider, { StoreContext } from './providers/Store';
import ValveModule, { ValveModal } from './microModules/ValveModule';
import DripModule, { DripModal } from './microModules/DripModule';
import TextModule, { TextModal } from './microModules/TextModule';
import ReducerModule, { ReducerModal } from './microModules/ReducerModule';
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
                            <TextModule 
                              selected={selectedId}
                              selectText={selectShape}
                            />
                            <ValveModule 
                              selected={selectedId}
                              selectValve={selectShape}
                            />
                            <DripModule 
                              selected={selectedId}
                              selectDrip={selectShape}
                            />
                            <ReducerModule
                              selected={selectedId}
                              selectReducer={selectShape}
                            />
                        </StoreContext.Provider>
                  </Stage>
              )}
            </StoreContext.Consumer>
        </DrawerContainer>
      <RectangleModal isOpen={runModule===ModulesEnum.rect} cancell={closeModal}/>
      <ValveModal isOpen={runModule===ModulesEnum.valve} cancell={closeModal}/>
      <TextModal isOpen={runModule===ModulesEnum.text} cancell={closeModal}/>
      <DripModal isOpen={runModule===ModulesEnum.drip} cancell={closeModal}/>
      <ReducerModal isOpen={runModule===ModulesEnum.reducer} cancell={closeModal}/>
    </StoreProvider>
  );
}

export default Drawer
