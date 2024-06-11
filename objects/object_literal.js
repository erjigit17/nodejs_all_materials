// An Object is an entity with state and behavior

//Object literal
let task = {}
task.action = 'Create'
task.getTask = function () {
  return this.action
}
console.log(task.getTask()) // 'Create'

// Optional chain
console.log(task.users?.[0].name) // undefined

const zeroObj = {
  zero: 0
}

console.log(zeroObj.zero || 'zero') // 'zero'
console.log(zeroObj.zero ?? 'zero') // 0 (only for null and undefined)
