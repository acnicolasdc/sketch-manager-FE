import React from 'react';
import { Line, Transformer, Group } from 'react-konva';

export interface UnionProps {
    shapeProps?: any;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const Union: React.FunctionComponent <UnionProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const ijRef = React.useRef<HTMLHeadingElement | any>();
  const ijeRef = React.useRef<HTMLHeadingElement | any>();

  React.useEffect(() => {
    if (isSelected) {
      ijeRef.current.setNode(ijRef.current);
      ijeRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleOnTransformEnd = () => {
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
  }
  return (
    <React.Fragment>
    <Group ref={ijRef}
    onContextMenu={onSelect}
    onClick={onSelect}
    onTap={onSelect}
    draggable
    >
    <Line
      points={[10, 50, 10, 80]}
      stroke="#2d3436"
       {...shapeProps}
       onTransformEnd={handleOnTransformEnd}
    />
    <Line
      points={[30, 50, 30, 80]}
      stroke="#2d3436"
       {...shapeProps}
       onTransformEnd={handleOnTransformEnd}
    />
    <Line
      points={[5, 55, 35, 55]}
      stroke="#2d3436"
       {...shapeProps}
       onTransformEnd={handleOnTransformEnd}
    />
    <Line
      points={[5, 75, 35, 75]}
      stroke="#2d3436"
       {...shapeProps}
       onTransformEnd={handleOnTransformEnd}
    />
    </Group>
    {isSelected && (
        <Transformer
          ref={ijeRef}
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

export default Union;