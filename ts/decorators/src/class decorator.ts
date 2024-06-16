function sealed(constructor: Function) {
  Object.seal(constructor) // now you can't delete properties
  Object.seal(constructor.prototype)
}

@sealed
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = 'http://www...';
  }
};

@reportableClassDecorator
class BugReport2 {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

export function startClassDecorator() {
console.log(`\n@reportableClassDecorator \nclass BugReport2 {...\n`)

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
const bug2 = new BugReport2('Needs dark mode')
console.log(bug2.title)
console.log(bug2.type)
// console.log(bug.reportingURL) // Property 'reportingURL' does not exist on type 'BugReport2'.
}