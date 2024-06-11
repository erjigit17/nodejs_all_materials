// map doesnt mutate array
// returns new array

const arr = ['a', 'b', 'c', 'd']
const newArray = arr.map(
  (element, index, array) => element.toUpperCase()
)

console.log(newArray.toString())
console.log(arr.toString())


// filter doesnt mutate array
// returns new array

const filtered = arr.filter(
  e => e === 'a' || e === 'd'
)

console.log(filtered.toString())
console.log(arr.toString())


// every doesnt mutate array
// returns boolean
const result2 = arr.every(
  e => typeof e === 'string'
)

console.log(result2) // true
console.log(arr.toString())

// some doesnt mutate array
// returns boolean
const result3 = arr.some(
  e => e === 'a'
)

console.log(result3) // true
console.log(arr.toString())
