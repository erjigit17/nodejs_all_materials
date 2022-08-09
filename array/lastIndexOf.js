// lastIndexOf doesn't mutate arr
// returns last funded item index or -1
/* arr.lastIndexOf(searchElement[, fromIndex = arr.length -1]) */

const arr = [1 ,2 ,3, 4, 5, 4, 3, 2, 1]

const someValue = arr.lastIndexOf(1)
console.log(someValue) // => 8

const someValue2 = arr.lastIndexOf(1, 3)
console.log(someValue2) // => 0

console.log(arr) // => [1 ,2 ,3, 4, 5, 4, 3, 2, 1]
