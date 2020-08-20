import React, { useRef } from 'react';
import { Line } from 'react-konva';
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
import useWindowDimensions from 'hooks/useWindowDimensions';
import { INITIAL_OPTIONS } from './utils/assets';
import { ModulesEnum } from './utils/_';
import documentGenerator from './utils/printDocument';
import { getGuides, getObjectSnappingEdges} from './utils/guideLines';
import { DrawerContainer, OptionHeader, DrawerContent } from './Drawer.style';


const GUIDELINE_OFFSET = 5;
const HEIGHT = window.innerHeight;
const Drawer: React.FunctionComponent = () => {
  const { width } = useWindowDimensions();

  const stageRef = useRef<HTMLHeadingElement | any>();
  const layerRef = useRef<HTMLHeadingElement | any>();

  const [lines, setLines] = React.useState<any[]>([]);

  const [runModule, setRunModule] = React.useState<string>('');
  const [selectedId, selectShape] = React.useState<string>('');
  const [openReport, setOpenReport] = React.useState<boolean>(false);
  const [geratePDF, setGeneratePDF] = React.useState<boolean>(false);

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) selectShape('');
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


  function getLineGuideStops(skipShape: any):object {
    var vertical: any[] = [0, width / 2, width];
    var horizontal: any[] = [0, HEIGHT / 2, HEIGHT];
    stageRef.current.find('.guideLine-element').forEach((guideItem:any) => {
      if (guideItem === skipShape) return;
      var box = guideItem.getClientRect();
      vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
      horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
    });
    return {
      vertical: vertical.flat(),
      horizontal: horizontal.flat(),
    };
  }

  function drawGuides(guides:any) {
    guides.forEach((lg:any) => {
      if (lg.orientation === 'H') {
        var line = <Line{...{
          key:lines.length,
          points: [-6000, lg.lineGuide, 6000, lg.lineGuide],
          stroke: 'rgb(0, 161, 255)',
          strokeWidth: 1,
          name: 'guid-line',
          dash: [4, 6],
        }} />
        setLines([...lines, line])
        layerRef.current.clearBeforeDraw();
      } else if (lg.orientation === 'V') {
        const line = <Line {...{
          key:lines.length,
          points: [lg.lineGuide, -6000, lg.lineGuide, 6000],
          stroke: 'rgb(0, 161, 255)',
          strokeWidth: 1,
          name: 'guid-line',
          dash: [4, 6],
        }} />;
        setLines([...lines, line])
        layerRef.current.clearBeforeDraw();
      }
    });
  }

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
                      ref={stageRef}
                      width={width-170}
                      height={HEIGHT-40}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}>
                        <StoreContext.Provider value={value}>
                          <Layer ref={layerRef}       
                            onDragMove={(e)=>{
                                layerRef.current.find('.guid-line').destroy();
                                let lineGuideStops = getLineGuideStops(e.target);
                                let itemBounds = getObjectSnappingEdges(e.target);
                                var guides = getGuides(lineGuideStops, itemBounds, GUIDELINE_OFFSET);
                                if (!guides.length) {
                                  console.log(guides);
                                  return;
                                }
                                drawGuides(guides);
                                guides.forEach((lg: any) => {
                                  switch (lg.snap) {
                                    case 'start': {
                                      switch (lg.orientation) {
                                        case 'V': {
                                          e.target.x(lg.lineGuide + lg.offset);
                                          break;
                                        }
                                        case 'H': {
                                          e.target.y(lg.lineGuide + lg.offset);
                                          break;
                                        }
                                      }
                                      break;
                                    }
                                    case 'center': {
                                      switch (lg.orientation) {
                                        case 'V': {
                                          e.target.x(lg.lineGuide + lg.offset);
                                          break;
                                        }
                                        case 'H': {
                                          e.target.y(lg.lineGuide + lg.offset);
                                          break;
                                        }
                                      }
                                      break;
                                    }
                                    case 'end': {
                                      switch (lg.orientation) {
                                        case 'V': {
                                          e.target.x(lg.lineGuide + lg.offset);
                                          break;
                                        }
                                        case 'H': {
                                          e.target.y(lg.lineGuide + lg.offset);
                                          break;
                                        }
                                      }
                                      break;
                                    }
                                  }
                                });

                            }}
                            onDragEnd={()=>{
                              setLines([]);
                              layerRef.current.clearBeforeDraw();
                            }}>
                            {lines}
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
