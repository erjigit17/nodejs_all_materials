//concat doesn't mutate arr

const arr = ['a', 'b', 'c']
const newArr = arr.concat(['d', 'e', 'f'])
console.log(newArr) // => ['a', 'b', 'c', 'd', 'e', 'f']
console.log(newArr.length) // => 6


const arr2 = ['a', 'b', 'c']
const newArr2 = arr2.concat([['d', 'e', 'f']])
console.log(newArr2) // => ['a', 'b', 'c', ['d', 'e', 'f']]
console.log(newArr2.length) // => 4

const arr3 = ['a', 'b', 'c']
const newArr3 = arr3.concat([['d', 'e', 'f'], 'g', 'h'])
/*surprise!!!*/
console.log(newArr3) // => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log(newArr3.length) // => 8