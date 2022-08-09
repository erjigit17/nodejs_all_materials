// indexOf doesn't mutate arr
// returns first funded item index or -1
/* arr.indexOf(searchElement[, fromIndex = 0]) */

const arr = [1 ,2 ,3, 4, 5, 4, 3, 2, 1]

const someValue = arr.indexOf(3)
console.log(someValue) // => 2

const incorrectValue = arr.indexOf('3')
console.log(incorrectValue) // => -1

const someValue2 = arr.indexOf(3, 3)
console.log(someValue2) // => 6

console.log(arr) // => [1 ,2 ,3, 4, 5, 4, 3, 2, 1]
