// set collections of uniq elements
const priority = new Set()
priority.add('High').add('Normal')
priority.add('Low')

console.log(priority.size) // => 3

const priority2 = new Set([
  'High',
  'Normal',
  'Low'
])

console.log(priority2.size) // => 3

const newSet = new Set(priority2) // make copy
console.log(newSet === priority2) // => false
console.log(priority2) // => Set(3) { 'High', 'Normal', 'Low' }
console.log(newSet) // => Set(3) { 'High', 'Normal', 'Low' }
console.log(newSet.size) // => 3

const arr = Array.from(newSet)
console.log(arr) // => [ 'High', 'Normal', 'Low' ]

console.log(priority2.has('High')) // => true
console.log(priority2.has('Ultra')) // => false


console.log([...priority2.keys()]) // => [ 'High', 'Normal', 'Low' ]
console.log([...priority2.values()]) // => [ 'High', 'Normal', 'Low' ]
console.log([...priority2.entries()]) // => [ ['High', 'High'], ['Normal', 'Normal'], ['Low', 'Low'] ]

const isDeleted = priority2.delete('High')
const isDeleted2 = priority2.delete('High')
console.log(isDeleted) // => true
console.log(isDeleted2) // => false
console.log(priority2.has('High')) // => false

for (const value of priority2) {
  console.log(value)  // => High \n Normal \n Low
}

function logSetElements(key, value, set) {
    console.log(`s[${key}] = ${value}`)
}

priority2.forEach(logSetElements)

const tasks = new Set([
  {id: 1, action: 'dolt'},
  {id: 1, action: 'dolt'}
])
console.log(tasks.size) // => 2

/*
WeakSet can only contain objects, and thr objects it contains may be garbage collected.
const weakSet = new WeakSet([1, 2, 3])  error, only objects can be added to WeakSet

.add, .has, .delete
* */
let task1 = { action: 'Create...'}
const task2 = { action: 'Delete...'}
const project = new WeakSet([task1])
project.add(task2)
console.log(project.size) // => undefined
console.log(project.has(task2)) // => true
project.delete(task2)
console.log(project.has(task2)) // => false
task1 = null
console.log(project.has(task1)) // => false



