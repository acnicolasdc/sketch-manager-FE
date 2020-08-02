import React from 'react';
import { Text } from 'react-konva';

export interface RectangleProps {
    shapeProps?: object;
    isSelected?: boolean;
    onChange?: any;
    onSelect?: (e:any) => void;
};

const Rectangle: React.FunctionComponent <RectangleProps> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef<HTMLHeadingElement | any>();

  return (
      <Text
        ref={shapeRef}
        {...shapeProps}
        draggable
      />
  );
};

export default Rectangle;