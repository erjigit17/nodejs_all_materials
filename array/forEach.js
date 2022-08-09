// forEach can mutate array if you modify third argument
// forEach returns void


const arr = ['a', 'b', 'c', 'd']

arr.forEach(function(element, index, array) {
  console.log(element)
})

// you cant mutate array
arr.forEach(function(element, index, array) {
  element = 1
})
console.log(arr)

// for mutation array use third arguments (array)
arr.forEach(function(element, index, array) {
  if (index === 0) return
  array[index] = 1
})
console.log(arr)


// for mutation array use third arguments (array)
arr.forEach(function(element, index, array) {
  if (index === 1) array.push('e')
  console.log(element.toUpperCase())
})
console.log(arr) // =>  ['a', 'b', 'c', 'd', 'e']


// you cant add new element but can change
arr.forEach(function(element, index, array) {
  if (index === 1) array[2] = 'e'
  console.log(element.toUpperCase())
})
console.log(arr) // => [ 'a', 'b', 'e', 'd' ]