import React from 'react';
import { Line, Transformer, Group, Text } from 'react-konva';

export interface ReducerProps {
    shapeProps?: any;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const Reducer: React.FunctionComponent <ReducerProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  
  const shapeRef = React.useRef<HTMLHeadingElement | any>();
  const trRef = React.useRef<HTMLHeadingElement | any>();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  return (
    <React.Fragment>
      <Group ref={shapeRef}
        onContextMenu={onSelect}
        onClick={onSelect}
        onTap={onSelect}
        draggable
      >
      <Text text={shapeProps.value}fontSize={12} x={shapeProps.x+30} y={shapeProps.y}/>
        <Line
          points={[0, 30, 15, 0, 30, 30]}
          closed
          fill="#2d3436"
          {...shapeProps}
          onTransformEnd={e => {
            const node: any = shapeRef.current;
            const scaleY = node.scaleY();
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              radius: Math.max(node.height() * scaleY)
            });
          }}
        />
      </Group>
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Reducer;