import React from 'react';
import { Line, Layer } from 'react-konva';

export interface GridProps {
    width: number | any;
};
var BLOCK_SNAP_SIZE = 15;
var PADDING = BLOCK_SNAP_SIZE;
const HEIGHT = window.innerHeight-40;
const Grid: React.FunctionComponent <GridProps> = ({ width = 0 }) => {

const generateRows = ():any[] => {
    const gridLayerRow: any[] = []
    for (var i = 0; i < width / PADDING; i++) {
        gridLayerRow.push(
        <Line {...{
          points: [Math.round(i * PADDING) + 0.5, 0, Math.round(i * PADDING) + 0.5, HEIGHT],
          stroke: '#ddd',
          strokeWidth: 1,
        }}/>);
      }
    return gridLayerRow;
}

const generateColumns = ():any[] => {
    const gridLayerColumn: any[] = []
    for (var j = 0; j < HEIGHT / PADDING; j++) {
        gridLayerColumn.push(<Line {...{
          points: [0, Math.round(j * PADDING), width, Math.round(j * PADDING)],
          stroke: '#ddd',
          strokeWidth: 0.5,
        }}/>);
      }
    return gridLayerColumn;
}

  return (
    <Layer>
       {generateRows()}
       {generateColumns()}
    </Layer>
  );
};

export default React.memo(Grid);