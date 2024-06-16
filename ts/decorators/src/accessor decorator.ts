function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
    // descriptor.writable = value;
    // descriptor.value = value
  }
}

class Piont {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y
  }
}

export function startAccessorDecorator() {
  const point = new Piont(2, 3);

// Attempt to delete the x property
// delete point.x; // compiler error This will not work because x is not configurable
console.log(point.x); // Output: 2

// Attempt to redefine the x property
Object.defineProperty(point, 'x', {
  get: function() {
    return 42;
  }
}); // This will throw a TypeError because x is not configurable
console.log(point.x); // Output: 42?
}