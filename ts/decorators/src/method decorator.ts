function enumerable(value: boolean) {
  return function (target: any, propertyKa: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}

class Greater {
  greating: string;
  constructor(message: string) {
    this.greating = message;
  }

  @enumerable(false)
  great() {
    return `Hello, ${this.greating}`;
  }
}

export function startMethodDecorator() {
  const great = new Greater('Erji');
  console.log(great.great())
}