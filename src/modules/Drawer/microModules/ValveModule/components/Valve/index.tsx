import React from 'react';
import { Circle, Transformer, Group, Text } from 'react-konva';

export interface ValveProps {
    shapeProps?: any;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const Valve: React.FunctionComponent <ValveProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  
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
          stroke="#2d3436"
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
          keepRatio={true}
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
          ]}
        />
      )}
    </React.Fragment>
  );
};

export default Valve;