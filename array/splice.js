// splice mutates arr
// return removed elements
// also used for inserting into arr

const arr = ['a', 'b', 'c', 'd']
const newArr = arr.splice(1, 2)
console.log(newArr) // => ['b', 'c']
console.log(arr) // => ['a', 'd']


const arr2 = ['a', 'b', 'c', 'd']
const newArr2 = arr2.splice(0, 1)
console.log(newArr2) // => ['a']
console.log(arr2) // => ['b', 'c', 'd']


const arr3 = ['a', 'b', 'c', 'd']
const newArr3 = arr3.splice(2, 0, 'ABC')
console.log(newArr3) // => []
console.log(arr3) // => [a, 'b', 'ABC', 'c', 'd']