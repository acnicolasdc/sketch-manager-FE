import React from 'react';
import { Rect, Transformer, Group, Text } from 'react-konva';

export interface RectangleProps {
    shapeProps?: any;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const Rectangle: React.FunctionComponent <RectangleProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  
  const shapeRef = React.useRef<HTMLHeadingElement | any>();
  const textRef = React.useRef<HTMLHeadingElement | any>();
  const text2Ref = React.useRef<HTMLHeadingElement | any>();
  const trRef = React.useRef<HTMLHeadingElement | any>();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const toDegrees = (number:number): number => {
    return number*(Math.PI/180)
  }

  const onTransformX = (rotation: number = 0, width: number = 0, x: number = 0): number => {
    let tranradians = toDegrees(rotation);
    return x + Math.cos(tranradians)*(width/2);
  }
  const onTransformY = (rotation: number = 0, width: number = 0, y: number = 0): number => {
    let tranradians = toDegrees(rotation);
    return y + Math.sin(tranradians)*(width/2);
  }

  const onTraformElement = (reference:HTMLHeadingElement | any, element:HTMLHeadingElement | any) => {
    const node: any = reference.current;

    const rotation = node.rotation();
    const nodeWidth = node.width();
    
    element.current.rotation(node.rotation());
    const transformX = onTransformX(rotation, nodeWidth, node.x());
    const transformY = onTransformY(rotation, nodeWidth, node.y());
    element.current.x(transformX)
    element.current.y(transformY);
  }
  const x = onTransformX(shapeProps.rotation, shapeProps.width, shapeProps.x);
  const y = onTransformY(shapeProps.rotation, shapeProps.width, shapeProps.y);
  return (
    <React.Fragment>
      <Group 
        onContextMenu={onSelect}
        onClick={onSelect}
        onTap={onSelect}
        draggable
      >
      <Text text={`Length: ${shapeProps.value}`}fontSize={12} x={x} y={y-10} ref={textRef}/>
      <Rect
        ref={shapeRef}
        fill='#2d3436'
        {...shapeProps}
        onTransform={()=>{
          onTraformElement(shapeRef, textRef)
          onTraformElement(shapeRef, text2Ref);
        }}
        onTransformEnd={e => {
          const node: any = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          onTraformElement(shapeRef, textRef);
          onTraformElement(shapeRef, text2Ref);
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      <Text text={`Cover: ${shapeProps.data.cover}"`}fontSize={12} x={x} y={y+10} ref={text2Ref}/>
      </Group>
      {isSelected && (
        <Transformer
          ref={trRef}
          rotateAnchorOffset={100}
          rotationSnaps={[45,90, 135, 180, 225, 270, 315, 360]}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            newBox.height = oldBox.height;
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Rectangle;