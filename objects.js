'use strict'

const hours = 8, rate = 50
let task = {
  hours: 16,
  rate: 20,
  "calculateValue" () {
    return this.hours * this.rate
  }
}

console.log(task["calculateValue"]()) // => 320

let task2 = {
  _totalHrs: 16
}

Object.defineProperty(task2, 'totalHrs', {
  get: function () {
    return this._totalHrs + 4
  },
  set: function (newVal) {
    this._totalHrs = newVal

  }
})

console.log(task2.totalHrs) // => 20
task2.totalHrs = 8
console.log(task2.totalHrs) // => 12

const task3 = {}
Object.defineProperties(task3, {
  'action': {
    value: 'doIt'
  },
  'property': {
    value: 'High'
  }
})
console.log(`${task3.action} - ${task3.property}`)

let descriptor = Object.getOwnPropertyDescriptor(task3, 'action')
console.log(descriptor)
/*
{
  value: 'doIt',
  writable: false,
  enumerable: false,
  configurable: false
}
* */

// ES2017
let task4 = {
  action: 'create',
  done: false
}
console.log(
  Object.getOwnPropertyDescriptors(task4)
)
/*
{
  action: {
    value: 'create',
    writable: true,
    enumerable: true,
    configurable: true
  },
  done: { ...  }
}
*/
console.log(task4.hasOwnProperty('action')) // => true
console.log('action' in task4) // => true


if(task4.toString) console.log(true) // => true
console.log(task4.hasOwnProperty('toString')) // => false
console.log('toString' in task4) // => true

// preventExtensions
let task5 = { id: 1 }
console.log( Object.isExtensible(task5)) // => true

Object.preventExtensions(task5)
task5.id = 2
// task5.action = 'Create' //=> in strict mode  error 'Cannot add property action, object is not extensible'


// freeze
let task6 = {
  id: 1,
  someObj: {
    active: "Yes"
  }
}
Object.freeze(task6)
// task6.id = 2 // =>  TypeError: Cannot assign to read only property 'id' of object '#<Object>'
// task6.action = 'Create' // => TypeError: Cannot add property action, object is not extensible
// Object.defineProperty(task6, 'property', { value: 'High'}) // TypeError: Cannot add property action, object is not extensible

task6.someObj.active = 'No'
console.log(task6.someObj.active) // => No


// Sealed
let task7 = { id: 1 }
console.log(Object.isSealed(task7)) // false
Object.seal(task7)
task7.id = 2
console.log(task7) // => { id: 2 }
// task7.action = 'Create' // => TypeError: Cannot add property action, object is not extensible

// Dynamic field
let field = 'someName'
let _hours = 8
let task8 = {
  [field]: _hours
}
console.log(task8) // => { someName: 8 }


// Object constructor
let task9 = new Object()
task9.action = 'Create'
console.log(task9) // => { action: 'Create' }


// prototype
console.log(typeof Object.prototype) // => object
console.log(typeof Object.prototype.toString) // => function

let task10 = {
  action: 'create'
}
console.log(task10.toString()) // => [object Object]
console.log(task10.__proto__ === Object.prototype) // => true
console.log(task10.prototype) // => undefined

function somFn(){ return 42 }
console.log(somFn.prototype) // => {}


// Object.create
let task11 = {
  isDone: false
}
let anotherTask11 = Object.create(task11)
console.log(anotherTask11.isDone) // false

let priority11 = ['L', 'N', 'H']
let obj11 = Object.create(priority11)
console.log(obj11.__proto__.length) // => 3

function fn11() { return 42 }
let objFn11 = Object.create(fn11)
console.log(objFn11.__proto__()) // => 42

// isPrototypeOf
let task12 = { isDone: false }
console.log(Object.prototype.isPrototypeOf(task12)) // => true
let obj12 = Object.create(task12)
console.log(task12.isPrototypeOf(obj12)) // => true
console.log(Object.prototype.isPrototypeOf(obj12)) // => true


// getPrototypeOf
let task13 = { isDone: false }
let obj13 = Object.create(task13)
console.log(Object.getPrototypeOf(obj13)) // => { isDone: false }
console.log(Object.getPrototypeOf(obj13) === task13) // => true

// console.log(Object.prototype.getPrototypeOf(obj13)) // => true

// Object.setPrototypeOf
let obj1_13 = {id:1}
let obj2_13 = {priority: 100}
Object.setPrototypeOf(obj1_13, obj2_13)
console.log(obj1_13.priority) // => 100
console.log(obj1_13.hasOwnProperty('priority')) // => false

// Object.assign
let obj1_14 = {id:1}
let obj2_14 = {priority:100, id:2}
Object.defineProperty(obj2_14, 'hours', {
  value: 8,
  enumerable: false
})
let obj3_14 = {mane: 'dodo'}
Object.setPrototypeOf(obj2_14, obj3_14)

let target = {}
Object.assign(target, obj1_14, obj2_14) // only enumerable end own properties, cant copy setter
console.log(target) // => { id: 2, priority: 100 }
console.log(Object.getPrototypeOf(target)) // => [Object: null prototype] {}
console.log(Object.getOwnPropertyDescriptor(target, 'id')) // => { value: 2, writable: true, enumerable: true, configurable: true }

// NaN
let wrongId = NaN
console.log(wrongId === wrongId) // false
console.log(Object.is(wrongId, wrongId)) // true

// zero
let zero = 0, negZero = -0
console.log(zero === negZero) // true
console.log(Object.is(zero, negZero)) // false

// Object.fromEntries
const task15 = Object.fromEntries(
  [['id', 1], ['action', 'Create']]
)
console.log(task15) //{ id: 1, action: 'Create' }








