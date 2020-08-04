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
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  return (
    <React.Fragment>
      <Group ref={shapeRef}>
      <Text text={shapeProps.value}fontSize={12} x={shapeProps.x+30} y={shapeProps.y} ref={shapeRef}/>
        <Line
          points={[0, 30, 15, 0, 30, 30]}
          closed
          onContextMenu={onSelect}
          onClick={onSelect}
          onTap={onSelect}
          fill="#2d3436"
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
            // transformer is changing scale of the node
            // and NOT its width or height
            // but in the store we have only width and height
            // to match the data better we will reset scale on transform end
            const node: any = shapeRef.current;
            //const scaleX = node.scaleX();
            const scaleY = node.scaleY();

            // we will reset it back
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              // set minimal value
              //width: Math.max(5, node.width() * scaleX),
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