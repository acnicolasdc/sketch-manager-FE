import React from 'react'
import { Stage, Layer } from 'react-konva';
import { Rect } from './utils/_';
import Modal from './components/Modal';
import Rectangle from './components/Rectangle';
import OptionsBar from './components/OptionsBar';
import { DrawerContainer } from './Drawer.style';
import { RECT, INITIAL_OPTIONS } from './utils/assets'

const Drawer: React.FunctionComponent = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [rectangles, setRectangles] = React.useState<object[]>([]);
  const [selectedId, selectShape] = React.useState<string>('');

  const checkDeselect = (e: any) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape('');
    }
  };
  const addRectangle = () => {
    const newRect:Rect = {...RECT, id:`rect-code-${rectangles.length}`};
    setRectangles([...rectangles, newRect]);
    setOpen(false)
  }
  const handlerClick = (e:any, id:any) => {
      console.log(e)
    if (e.type === 'click') {
        selectShape(id);
      } else if (e.type === 'contextmenu') {
        alert('Right click');
      }
  }

  return (
    <React.Fragment>
        <Modal 
            isOpen={isOpen}
            accept={addRectangle}
            cancell={() => setOpen(open => !open)} 
        />
        <DrawerContainer>
        <OptionsBar
            onClick={() => setOpen(open => !open)} 
            options={INITIAL_OPTIONS}
        />
        <Stage
        width={window.innerWidth-170}
        height={window.innerHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        >
        <Layer>
            {rectangles.map((rect: Rect, i: number) => {
            return (
            <Rectangle
                key={i}
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={(e:any) => handlerClick(e, rect.id)}
                onChange={(newAttrs: object) => {
                    const rects = rectangles.slice();
                    rects[i] = newAttrs;
                    setRectangles(rects);
                }}
                />
            );
            })}
        </Layer>
        </Stage>
        </DrawerContainer>
    </React.Fragment>
  );
}

export default Drawer
