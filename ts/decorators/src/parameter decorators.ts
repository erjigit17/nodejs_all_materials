import "reflect-metadata";

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) {
  let method = descriptor.value!;

  descriptor.value = function (...args: any[]) {
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= args.length || args[parameterIndex] === undefined) {
          throw new Error("Missing required argument.");
        }
      }
    }
    return method.apply(this, args);
  };
}

class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  @validate
  print(@required verbose: boolean) {
    if (verbose) {
      return `type: ${this.type}\ntitle: ${this.title}`;
    } else {
      return this.title;
    }
  }
}

export function startParametrDecorator() {
  const report = new BugReport("Issue #1");

  try {
    console.log(report.print(true)); // This should work and print the detailed report
    // console.log(report.print()); // This should throw an error due to missing required argument
  } catch (error) {
    // console.error(error.message); // Expected: "Missing required argument."
  }
}