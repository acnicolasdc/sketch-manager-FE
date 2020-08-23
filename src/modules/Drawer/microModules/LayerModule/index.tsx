import React, { useRef } from 'react';
import { Line } from 'react-konva';
import { StoreContext } from '../../providers/Store';
import { Stage, Layer } from 'react-konva';
import { getGuides, getObjectSnappingEdges} from '../../utils/guideLines';

export interface LayerProps {
    grid?: any;
    children?: any;
    width: number | any;
    height: number | any;
    selectShape:(value:string)=>void;    
};

const GUIDELINE_OFFSET = 5;
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

const LayerModule: React.FunctionComponent<LayerProps> = ({ selectShape, width = WIDTH, height = HEIGHT, children, grid }) => {

  const stageRef = useRef<HTMLHeadingElement | any>();
  const layerRef = useRef<HTMLHeadingElement | any>();

  const [lines, setLines] = React.useState<any[]>([]);

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) selectShape('');
  };


  function getLineGuideStops(skipShape: any):object {
    let vertical: any[] = [0, width / 2, width];
    let horizontal: any[] = [0, height / 2, height];
    stageRef.current.find('.guideLine-element').forEach((guideItem:any) => {
      if (guideItem === skipShape) return;
      let box = guideItem.getClientRect();
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
        let line = <Line {...{
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
        <StoreContext.Consumer>
              {(value:any) => (
                  <Stage
                      ref={stageRef}
                      width={width}
                      height={height-40}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}>
                        <StoreContext.Provider value={value}>
                          {grid}
                          <Layer ref={layerRef} 
                            id="later-print-report"      
                            onDragMove={(e)=>{
                                layerRef.current.find('.guid-line').destroy();
                                let lineGuideStops = getLineGuideStops(e.target);
                                let itemBounds = getObjectSnappingEdges(e.target);
                                let guides = getGuides(lineGuideStops, itemBounds, GUIDELINE_OFFSET);
                                if (!guides.length) {
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
                            {children}
                          </Layer>                            
                        </StoreContext.Provider>
                  </Stage>
              )}
            </StoreContext.Consumer>
  );
}

export default LayerModule
