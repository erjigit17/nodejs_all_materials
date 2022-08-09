const arr = new Array(10)
console.log(arr) // => [ <10 empty items> ]
console.log(arr) // => [ <10 empty items> ]
console.log(typeof arr) // => object
console.log(Array.isArray(arr)) // => true
console.log(Array.isArray(Array.prototype)) // => true

const arr2 = new Array('a', 10)
console.log(arr2) // => [ 'a', 10 ]
console.log(arr2.length) // 2

const entries = ['a', 'b', 'c']
entries.print = function(msg) {
  console.log(msg) // => a
  console.log(this[1]) // => b
}

entries.print(entries[0])

const entries2 = new Array(10)
console.log(entries2.length) // => 10

const entries3 = new Array('10')
console.log(entries3.length) // => 1

const entries4 = [,,,]
console.log(entries4.length) // => 3

const entries5 = ['a', 'b', 'c']
entries5.length = 10
console.log(entries5.length) // => 10

const entries6 = ['a', 'b', 'c']
entries6.length = 1
console.log(entries6[1]) // => undefined
console.log(entries6.length) // => 1

const entries7 = ['a', 'b', 'c']
entries7[42] = 'd'
console.log(entries7[42]) // => d
console.log(entries7.length) // => 43

const entries8 = ['a', 'b', 'c']
console.log(entries8.valueOf()) // => [ 'a', 'b', 'c' ]
