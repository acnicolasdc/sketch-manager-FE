import React from 'react';
/** @microModules Functionality */
import ValveModule, { ValveModal } from './microModules/ValveModule';
import DripModule, { DripModal } from './microModules/DripModule';
import TextModule, { TextModal } from './microModules/TextModule';
import ReducerModule, { ReducerModal } from './microModules/ReducerModule';
import RectangleModule, { RectangleModal } from './microModules/RectangleModule';
import CouplingModule, { CouplingModal } from './microModules/CouplingModule';
import InformationModule from './microModules/InformationModule';
import StoreProvider, { StoreContext } from './providers/Store';
/** @components Presentantional Elements */
import { Stage, Layer } from 'react-konva';
import {ChevronDown} from 'baseui/icon';
import {Button, SHAPE} from 'baseui/button'
import OptionsBar from './components/OptionsBar';
import { BsFillTrashFill, BsFileEarmarkArrowDown } from "react-icons/bs";
/** @utils Types, Enums and Styles */
import { INITIAL_OPTIONS } from './utils/assets';
import { ModulesEnum } from './utils/_';
import documentGenerator from './utils/printDocument';
import { DrawerContainer, OptionHeader, DrawerContent } from './Drawer.style';


const Drawer: React.FunctionComponent = () => {
  const [runModule, setRunModule] = React.useState<string>('');
  const [selectedId, selectShape] = React.useState<string>('');
  const [openReport, setOpenReport] = React.useState<boolean>(false);
  const [geratePDF, setGeneratePDF] = React.useState<boolean>(false);

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape('');
    }
  };

  const printDocument = async () => {
    if(geratePDF) return;
    setGeneratePDF(true);
    const input:any = document.querySelector('.konvajs-content > canvas')
    await documentGenerator(input);
    setGeneratePDF(false);
  }

  const closeModal = () => setRunModule('');
  const cancellReport = () => setOpenReport(false);

  return (
    <StoreProvider>
      <DrawerContainer>
      <OptionHeader>
      <Button shape={SHAPE.square} overrides={{ Root:{ style:{ marginRight: '15px'} } }} disabled={selectedId===''}>
        <BsFillTrashFill />
      </Button>
      <Button shape={SHAPE.square}  
        disabled={geratePDF}
        endEnhancer={() => <BsFileEarmarkArrowDown />}
        onClick={()=>printDocument()}>
        {geratePDF?"Generating...":"Generate PDF"}
      </Button>
      <Button endEnhancer={() => <ChevronDown size={24} />}
        onClick={()=>setOpenReport(true)}
      >
        Open Report
      </Button>
      </OptionHeader>
      <DrawerContent>
          <OptionsBar
              onClick={(key: string)=>setRunModule(key)} 
              options={INITIAL_OPTIONS}
          />
            <StoreContext.Consumer>
              {value => (
                  <Stage
                      width={window.innerWidth-170}
                      height={window.innerHeight-40}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}>
                        <StoreContext.Provider value={value}>
                          <Layer>
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
                            <CouplingModule
                              selected={selectedId}
                              selectCoupling={selectShape}
                            />
                          </Layer>                            
                        </StoreContext.Provider>
                  </Stage>
              )}
            </StoreContext.Consumer>
            </DrawerContent>
        </DrawerContainer>
      <RectangleModal isOpen={runModule===ModulesEnum.rect} cancell={closeModal}/>
      <ValveModal isOpen={runModule===ModulesEnum.valve} cancell={closeModal}/>
      <TextModal isOpen={runModule===ModulesEnum.text} cancell={closeModal}/>
      <DripModal isOpen={runModule===ModulesEnum.drip} cancell={closeModal}/>
      <ReducerModal isOpen={runModule===ModulesEnum.reducer} cancell={closeModal}/>
      <CouplingModal isOpen={runModule===ModulesEnum.union} cancell={closeModal}/>
      <InformationModule isOpen={openReport} cancell={cancellReport}/>
    </StoreProvider>
  );
}

export default Drawer
