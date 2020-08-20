export function getObjectSnappingEdges(node:any):any {
    var box = node.getClientRect();
    return {
      vertical: [
        {
          guide: Math.round(box.x),
          offset: Math.round(node.x() - box.x),
          snap: 'start',
        },
        {
          guide: Math.round(box.x + box.width / 2),
          offset: Math.round(node.x() - box.x - box.width / 2),
          snap: 'center',
        },
        {
          guide: Math.round(box.x + box.width),
          offset: Math.round(node.x() - box.x - box.width),
          snap: 'end',
        },
      ],
      horizontal: [
        {
          guide: Math.round(box.y),
          offset: Math.round(node.y() - box.y),
          snap: 'start',
        },
        {
          guide: Math.round(box.y + box.height / 2),
          offset: Math.round(node.y() - box.y - box.height / 2),
          snap: 'center',
        },
        {
          guide: Math.round(box.y + box.height),
          offset: Math.round(node.y() - box.y - box.height),
          snap: 'end',
        },
      ],
    };
  }

  export function getGuides(lineGuideStops:any, itemBounds:any, line_offset:number):any {
    var resultV: any[] = [];
    var resultH: any[] = [];

    lineGuideStops.vertical.forEach((lineGuide:any) => {
      itemBounds.vertical.forEach((itemBound:any) => {
        var diff = Math.abs(lineGuide - itemBound.guide);
        // if the distance between guild line and object snap point is close we can consider this for snapping
        if (diff < line_offset) {
          resultV.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset,
          });
        }
      });
    });

    lineGuideStops.horizontal.forEach((lineGuide:any):any => {
      itemBounds.horizontal.forEach((itemBound:any) => {
        var diff = Math.abs(lineGuide - itemBound.guide);
        if (diff < line_offset) {
          resultH.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset,
          });
        }
      });
    });

    var guides = [];

    // find closest snap
    var minV = resultV.sort((a, b) => a.diff - b.diff)[0];
    var minH = resultH.sort((a, b) => a.diff - b.diff)[0];
    if (minV) {
      guides.push({
        lineGuide: minV.lineGuide,
        offset: minV.offset,
        orientation: 'V',
        snap: minV.snap,
      });
    }
    if (minH) {
      guides.push({
        lineGuide: minH.lineGuide,
        offset: minH.offset,
        orientation: 'H',
        snap: minH.snap,
      });
    }
    return guides;
  }