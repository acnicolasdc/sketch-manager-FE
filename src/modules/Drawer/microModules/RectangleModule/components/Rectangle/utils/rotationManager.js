export function degToRad(angle) {
    return angle / 180 * Math.PI;
  }
  
export function getCenter(shape) {
    const angleRad = degToRad(shape.rotation || 0);
    return {
      x:
        shape.x +
        shape.width / 2 * Math.cos(angleRad) +
        shape.height / 2 * Math.sin(-angleRad),
      y:
        shape.y +
        shape.height / 2 * Math.cos(angleRad) +
        shape.width / 2 * Math.sin(angleRad)
    };
  }
  
export function rotateAroundPoint(shape, deltaDeg, point) {
    const angleRad = degToRad(deltaDeg);
    const x = Math.round(
      point.x +
        (shape.x - point.x) * Math.cos(angleRad) -
        (shape.y - point.y) * Math.sin(angleRad)
    );
    const y = Math.round(
      point.y +
        (shape.x - point.x) * Math.sin(angleRad) +
        (shape.y - point.y) * Math.cos(angleRad)
    );
    return {
      ...shape,
      rotation: Math.round((shape.rotation + deltaDeg)),
      x,
      y
    };
  }
  
export function rotateAroundCenter(shape, deltaDeg) {
    const center = getCenter(shape);
    return rotateAroundPoint(shape, deltaDeg, center);
  }
  
export function getSnapRotation(rotation) {
    if (rotation >= 0 && rotation <= 45) {
      return 45;
    } else if (rotation >= 135 && rotation < 225) {
      return 180;
    } else if (rotation >= 225 && rotation < 305) {
      return 270;
    } else {
      return 0;
    }
  }