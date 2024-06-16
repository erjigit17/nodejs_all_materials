
// Symbol in JavaScript

// Symbols are unique and immutable primitive values that can be used as keys for object properties.
// They help in creating unique property keys, hiding implementation details, and customizing object behavior.

// Example: Unique Property Keys

// Create two symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');

// Symbols with the same description are not equal
console.log(sym1 === sym2); // Output: false

// Use symbols as object property keys
const obj = {};
obj[sym1] = 'Value associated with sym1';
obj[sym2] = 'Value associated with sym2';

console.log(obj[sym1]); // Output: Value associated with sym1
console.log(obj[sym2]); // Output: Value associated with sym2

// Example: Hiding Implementation Details

const hiddenSym = Symbol('hidden');

// Adding a "hidden" property to an object
const secretObj = {
  [hiddenSym]: 'This is a hidden value',
  visible: 'This is a visible value'
};

// The hidden property is not enumerable
for (let key in secretObj) {
  console.log(key); // Output: visible
}

// Accessing the hidden property directly using the symbol
console.log(secretObj[hiddenSym]); // Output: This is a hidden value

// Example: Customizing Object Behavior with Well-Known Symbols

// Using Symbol.iterator to make an object iterable
const iterableObj = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]: function() {
    let index = 0;
    let data = this.data;

    return {
      next: function() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Using the object in a for...of loop
for (let value of iterableObj) {
  console.log(value); // Output: 1, 2, 3, 4, 5
}

// Example: Customizing toStringTag
const customToStringObj = {
  [Symbol.toStringTag]: 'CustomObject'
};

console.log(Object.prototype.toString.call(customToStringObj)); // Output: [object CustomObject]

// Example: Symbol.for and Symbol.keyFor
const globalSym = Symbol.for('globalSymbol');
const sameGlobalSym = Symbol.for('globalSymbol');

console.log(globalSym === sameGlobalSym); // Output: true

// Retrieving the key for a global symbol
console.log(Symbol.keyFor(globalSym)); // Output: globalSymbol
