// sort mutates arr

const arr = ['c', 'd', 'a', 'b']
const newArr = arr.sort()
console.log(arr) // => [ 'd', 'c', 'b', 'a' ]
console.log(newArr) // => [ 'd', 'c', 'b', 'a' ]

// incorrect
const arrNums = [4, 1, 3, 2, 10]
const newArrNums = arrNums.sort()
/*surprise!!!*/
console.log(arrNums) // => [ 1, 10, 2, 3, 4 ]
console.log(newArrNums) // => [ 1, 10, 2, 3, 4 ]

// correct
const arrNums2 = [4, 1, 3, 2, 10]
const newArrNums2 = arrNums2.sort((a, b) => a - b)
console.log(arrNums2) // => [ 1, 2, 3, 4, 10 ]
console.log(newArrNums2) // => [ 1, 2, 3, 4, 10 ]
