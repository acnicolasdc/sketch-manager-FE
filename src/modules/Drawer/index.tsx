import React from 'react'
import { Stage, Layer } from 'react-konva';
import {ChevronDown} from 'baseui/icon';
import {Button, SHAPE} from 'baseui/button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import { BsFillTrashFill, BsFileEarmarkArrowDown } from "react-icons/bs";
import StoreProvider, { StoreContext } from './providers/Store';
import ValveModule, { ValveModal } from './microModules/ValveModule';
import DripModule, { DripModal } from './microModules/DripModule';
import TextModule, { TextModal } from './microModules/TextModule';
import ReducerModule, { ReducerModal } from './microModules/ReducerModule';
import RectangleModule, { RectangleModal } from './microModules/RectangleModule';
import CouplingModule, { CouplingModal } from './microModules/CouplingModule';
import InformationModule from './microModules/InformationModule';
import OptionsBar from './components/OptionsBar';
import { DrawerContainer, OptionHeader, DrawerContent } from './Drawer.style';
import { INITIAL_OPTIONS } from './utils/assets';
import { ModulesEnum } from './utils/_';


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

  const printDocument = () => {
    if(geratePDF) return;
    setGeneratePDF(true);
    const input:any = document.querySelector('.konvajs-content > canvas')
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 20, 20, 180, 180);
        pdf.save("download.pdf");
        setGeneratePDF(false);
      });

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
        endEnhancer={() => <BsFileEarmarkArrowDown />}
        onClick={()=>printDocument()}>
        Generate PDF
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
