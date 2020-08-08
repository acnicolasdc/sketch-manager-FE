import React from 'react';
import { Circle, Transformer, Group, Text } from 'react-konva';

export interface DripProps {
    shapeProps?: any;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const Drip: React.FunctionComponent <DripProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  
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
      <Text text={shapeProps.code}fontSize={12} x={shapeProps.x+shapeProps.radius+10} y={shapeProps.y-15}/>
        <Circle
          radius={20}
          fill="#4d73be"
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

export default Drip;