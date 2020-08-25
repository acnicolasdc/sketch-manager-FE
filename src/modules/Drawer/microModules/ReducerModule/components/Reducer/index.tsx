import React from 'react';
import { Line, Transformer, Group, Text } from 'react-konva';
import { Callback, minus, add, onTransformX, onTransformY, moveConfiguration } from '../../../../utils/transform';
export interface ReducerProps {
    shapeProps?: any;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
    onDragStart?: (e:any) => void;    
};

const Reducer: React.FunctionComponent <ReducerProps> = ({ shapeProps, isSelected, onSelect, onChange, onDragStart }) => {
  
  const shapeRef = React.useRef<HTMLHeadingElement | any>();
  const trRef = React.useRef<HTMLHeadingElement | any>();
  const textRef = React.useRef<HTMLHeadingElement | any>();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const onTraformElement = (reference:HTMLHeadingElement | any, element:HTMLHeadingElement | any, cba: Callback, cbb: Callback) => {
    const node: any = reference.current;
    const rotation = node.rotation();
    const nodeWidth = node.width()*2;
    const transformX = onTransformX(rotation, nodeWidth, node.x(), cba);
    const transformY = onTransformY(rotation, nodeWidth, node.y(), cbb);
    element.current.rotation(node.rotation());
    element.current.x(transformX)
    element.current.y(transformY);
  }

  const groupTransform = () => {
    onTraformElement(shapeRef, textRef, minus, add);
  }

  const x = onTransformX(shapeProps.rotation, shapeProps.width*2, shapeProps.x, minus);
  const y = onTransformY(shapeProps.rotation, shapeProps.width*2, shapeProps.y, add);


  return (
    <React.Fragment>
      <Group>
      <Text text={shapeProps.value}fontSize={12} x={x} y={y} ref={textRef}/>
        <Line
          ref={shapeRef}
          onContextMenu={onSelect}
          onClick={onSelect}
          onTap={onSelect}
          onDragStart={onDragStart}
          draggable
          points={[0, 30, 15, 15, 30, 30]}
          closed
          fill="#2d3436"
          {...shapeProps}
          onDragEnd={()=>{
            const node: any = shapeRef.current;
            node.x(moveConfiguration(node.x()));
            node.y(moveConfiguration(node.y()));
            groupTransform();
          }}
          onDragMove={()=>{
            const node: any = shapeRef.current;
            node.x(moveConfiguration(node.x()));
            node.y(moveConfiguration(node.y()));
            groupTransform();
          }}
          onTransform={groupTransform}
          onTransformEnd={e => {
            const node: any = shapeRef.current;
            node.scaleX(1);
            node.scaleY(1);
            groupTransform();
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              rotation: node.rotation(),
            });
          }}
        />
      </Group>
      {isSelected && (
        <Transformer
          ref={trRef}
          keepRatio={true}
          resizeEnabled={false}
        />
      )}
    </React.Fragment>
  );
};

export default Reducer;