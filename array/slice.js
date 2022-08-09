// slice doesn't mutate arr

const arr = ['a', 'b', 'c', 'd']
const newArr = arr.slice(2)
console.log(arr) // => ['a', 'b', 'c', 'd']
console.log(newArr) // => ['c', 'd']

const arr2 = ['a', 'b', 'c', 'd']
const newArr2 = arr2.slice(1, 3)
console.log(newArr2) // => ['b', 'c']

const arr3 = ['a', 'b', 'c', 'd']
const newArr3 = arr3.slice(-2)
console.log(newArr3) // => ['c', 'd']