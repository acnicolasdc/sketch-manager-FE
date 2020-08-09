import React from 'react';
import { Text, Transformer } from 'react-konva';

export interface LabelProps {
    shapeProps?: object;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const Label: React.FunctionComponent <LabelProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const textRef = React.useRef<HTMLHeadingElement | any>();
  const texRef = React.useRef<HTMLHeadingElement | any>();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      texRef.current.setNode(textRef.current);
      texRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  return (
    <React.Fragment>
      <Text
        onContextMenu={onSelect}
        onClick={onSelect}
        onTap={onSelect}
        ref={textRef}
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
          const node: any = textRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            fontSize: Math.max(node.height() * scaleY),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
    {isSelected && (
        <Transformer
          ref={texRef}
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

export default Label;