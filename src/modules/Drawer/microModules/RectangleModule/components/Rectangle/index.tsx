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
  const trRef = React.useRef<HTMLHeadingElement | any>();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  const postionX = shapeProps.x + (shapeProps.width / 2);
  return (
    <React.Fragment>
      <Group ref={shapeRef}>
      <Text text={`Length: ${shapeProps.value}`}fontSize={12} x={postionX} y={shapeProps.y-15} ref={shapeRef}/>
      <Rect
        onContextMenu={onSelect}
        onClick={onSelect}
        onTap={onSelect}
        fill='#2d3436'
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          const node: any = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      <Text text={`Cover: ${shapeProps.data.cover}"`}fontSize={12} x={postionX} y={shapeProps.y+10} ref={shapeRef}/>
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