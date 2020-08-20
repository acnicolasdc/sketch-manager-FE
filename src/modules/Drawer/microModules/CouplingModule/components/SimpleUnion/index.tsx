import React from 'react';
import { Line, Transformer, Group, Text } from 'react-konva';

export interface SimpleUnionProps {
    shapeProps?: any;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const SimpleUnion: React.FunctionComponent <SimpleUnionProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const ijRef = React.useRef<HTMLHeadingElement | any>();
  const ijeRef = React.useRef<HTMLHeadingElement | any>();

  React.useEffect(() => {
    if (isSelected) {
      ijeRef.current.setNode(ijRef.current);
      ijeRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  return (
    <React.Fragment>
    <Group
      onContextMenu={onSelect}
      onClick={onSelect}
      onTap={onSelect}
      ref={ijRef}
      draggable
    >
      <Line
        points={[0, 60, 0, 100]}
        stroke="#2d3436"
        {...shapeProps}
        onTransformEnd={e => {
          const node: any = ijRef.current;
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
    <Text text={shapeProps.text} fontSize={12} x={shapeProps.x-6} y={shapeProps.y+110}/>
    </Group>
    {isSelected && (
        <Transformer
          ref={ijeRef}
          keepRatio={true}
          resizeEnabled={false}
        />
      )}
    </React.Fragment>
  );
};

export default SimpleUnion;