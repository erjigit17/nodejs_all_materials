'use strict'
let Task = function (action) {
  this.action = action
}

let task = new Task('create')
console.log(typeof task) // object
console.log(task) // Task { action: 'create' }
console.log(task.action) // create
console.log(task['action']) // create



let Task2 = function (action) {
  this.action = action
  return {
    done: false
  }
}

let task2 = new Task2('create')
console.log(task2.action) // undefined
console.log(task2) // { done: false }


let Task3 = function (action) {
  this.action = action
  return 10
}

let task3 = new Task3('create')
console.log(task3.action) // create
console.log(task3) // Task3 { action: 'create' }


let Task4 = function (action) {
  this.action = action
  return [10]
}

let task4 = new Task4('create')
console.log(task4.action) // undefined
console.log(task4) // [ 10 ]


let Task5 = function (action) {
  this.action = action
  this.done = false
  this.complete = function () {
    this.done = true
  }
}

console.log(typeof Task5.prototype) // object
console.log(Task5.prototype === Object.prototype) // false
console.log(Object.getPrototypeOf(Task5)) // {}
console.log(Object.getOwnPropertySymbols(Task5)) // []

String.prototype.exclame = function () {
  return `${this.toString()}!`
}
console.log('Hello'.exclame()) // Hello!

// generator
function* generator() {
  yield 1;
  yield 2;
}

const it = generator()
console.log(it.next()) // { value: 1, done: false }
console.log(it.next()) // { value: 2, done: false }
console.log(it.next()) // { value: undefined, done: true }

// Tag function
function tagFunc(strings, ...values) {
  console.log([strings, values])
}

tagFunc`sum of ${1} and ${2} is ${3}` // => [ [ 'sum of ', ' and ', ' is ', '' ], [ 1, 2, 3 ] ]


// invocation
function square(x, y) {
  return x * y
}
let v = square(2, 3).toFixed(2)
console.log(v, typeof v) // 6.00 string

let person = {
  firstName : 'Anna',
  lastName: 'Vasilieva'
}

function showFullName(param){
  console.log(`${this.firstName} ${this.lastName}`)
  console.log(this)
  console.log(`param ${param}`)
}

showFullName.apply(person, [1]) // Anna Vasilieva
showFullName.call(person, 1) // Anna Vasilieva
// showFullName.call(null, 1) // Anna Vasilieva erorr


function sum(a, b= 1){
  return a + b
}
console.log(sum(1, null)) // 1
console.log(sum(1, undefined)) // 2
