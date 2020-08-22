import React from 'react';
import { Circle, Transformer, Group, Text } from 'react-konva';
import { Callback, minus, add, onTransformX, onTransformY, moveConfiguration } from '../../../../utils/transform';

export interface DripProps {
    shapeProps?: any;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const Drip: React.FunctionComponent <DripProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  
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
    const nodeRadius = node.radius()*2;
    const transformX = onTransformX(rotation, nodeRadius, node.x(), cba);
    const transformY = onTransformY(rotation, nodeRadius, node.y(), cbb);
    element.current.rotation(node.rotation());
    element.current.x(transformX)
    element.current.y(transformY);
  }

  const groupTransform = () => {
    onTraformElement(shapeRef, textRef, add, minus);
  }
  const nodeRaidus = shapeProps.radius*2;
  const x = onTransformX(shapeProps.rotation, nodeRaidus, shapeProps.x, add);
  const y = onTransformY(shapeProps.rotation, nodeRaidus, shapeProps.y, minus);

  return (
    <React.Fragment>
      <Group>
      <Text text={shapeProps.code}fontSize={12} x={x} y={y} ref={textRef}/>
        <Circle
          radius={8}
          fill="#4d73be"
          {...shapeProps}
          ref={shapeRef}
          onContextMenu={onSelect}
          onClick={onSelect}
          onTap={onSelect}
          draggable
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
              x: moveConfiguration(node.x()),
              y: moveConfiguration(node.y()),
              rotation: node.rotation(),
              radius: node.radius()
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

export default Drip;