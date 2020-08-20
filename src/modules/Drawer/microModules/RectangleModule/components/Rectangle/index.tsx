import React from 'react';
import { Rect, Transformer, Group, Text } from 'react-konva';
import { Callback, minus, add, onTransformX, onTransformY } from '../../../../utils/transform';

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

  const onTraformElement = (reference:HTMLHeadingElement | any, element:HTMLHeadingElement | any, cba: Callback, cbb: Callback) => {
    const node: any = reference.current;
    const rotation = node.rotation();
    const nodeWidth = node.width();
    const transformX = onTransformX(rotation, nodeWidth, node.x(), cba);
    const transformY = onTransformY(rotation, nodeWidth, node.y(), cbb);
    element.current.rotation(node.rotation());
    element.current.x(transformX)
    element.current.y(transformY);
  }

  const groupTransform = () => {
    onTraformElement(shapeRef, textRef, add, minus);
    onTraformElement(shapeRef, text2Ref, minus, add);
  }

  const x = onTransformX(shapeProps.rotation, shapeProps.width, shapeProps.x, add);
  const y = onTransformY(shapeProps.rotation, shapeProps.width, shapeProps.y, minus);
  const x2 = onTransformX(shapeProps.rotation, shapeProps.width, shapeProps.x, minus);
  const y2 = onTransformY(shapeProps.rotation, shapeProps.width, shapeProps.y, add);

  return (
    <React.Fragment>
      <Group 
        onContextMenu={onSelect}
        onClick={onSelect}
        onTap={onSelect}
        draggable
      >
      <Text text={`Length: ${shapeProps.value}`}fontSize={12} x={x} y={y} ref={textRef}/>
      <Rect
        ref={shapeRef}
        fill='#2d3436'
        {...shapeProps}
        onTransform={groupTransform}
        onTransformEnd={e => {
          const node: any = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          groupTransform();
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      <Text text={`Cover: ${shapeProps.data.cover}"`}fontSize={12} x={x2} y={y2} ref={text2Ref}/>
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