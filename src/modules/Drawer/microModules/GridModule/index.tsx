import React from 'react';
import { Line, Layer } from 'react-konva';
import { GridEnum } from '../../utils/_';

export interface GridProps {
  width: number | any;
  height: number | any;
};
var BLOCK_SNAP_SIZE = GridEnum.block;
var PADDING = BLOCK_SNAP_SIZE;
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;
const Grid: React.FunctionComponent<GridProps> = ({ width = WIDTH, height = HEIGHT }) => {
  const operationHeight =  height - 40;
  const generateRows = (): any[] => {
    const gridLayerRow: any[] = []
    for (var i = 0; i < width / PADDING; i++) {
      gridLayerRow.push(
        <Line {...{
          key: `${i}-row`,
          points: [Math.round(i * PADDING) + 0.5, 0, Math.round(i * PADDING) + 0.5, operationHeight],
          stroke: '#ddd',
          strokeWidth: 1,
        }} />);
    }
    return gridLayerRow;
  }

  const generateColumns = (): any[] => {
    const gridLayerColumn: any[] = []
    for (var j = 0; j < operationHeight / PADDING; j++) {
      gridLayerColumn.push(<Line {...{
        key: `${j}-column`,
        points: [0, Math.round(j * PADDING), width, Math.round(j * PADDING)],
        stroke: '#ddd',
        strokeWidth: 0.5,
      }} />);
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