const arr = Array.of(100)
console.log(arr) // => [ 100 ]
console.log(arr.length) // => 1

// Array.from has 3 arguments:
// arrayLike
// map function
// optional this argument
const priority = [1, 2, 3]
const priority10 = Array.from(
  priority, p => p * 10
)
console.log(priority10) // => [ 10, 20, 30 ]

const priority100 = Array.from(
  priority,
    function(p) {
      return p * 10 + this.thisArg
    },
  {thisArg: 100}
)
console.log(priority100) // => [ 110, 120, 130 ]


const priority100NaN = Array.from(
  priority,
  p=> p * 10 + this.thisArg, // global this
  {thisArg: 100}
)
console.log(priority100NaN) // => [ NaN, NaN, NaN ]


const priorityCopy = Array.from( priority)
console.log(priorityCopy === priority) // false

// fill replace value from start to end in array
const arrNums = [1, 2, 3]
arrNums.fill(100, 1, 2)
console.log(arrNums) // => [ 1, 100, 3 ]

arrNums.fill(100, -1) // start length - 1
console.log(arrNums) // => [ 1, 100, 100 ]

const o = [].fill.call({length: 3}, 4)
console.log(o) // => { '0': 4, '1': 4, '2': 4, length: 3 }

const a = Array(2).fill({})
console.log(a[0] === a[1]) // true //cause it reference

// filter return first founded el
const arrNums2 = [1, 2, 3]
const result = arrNums2.find(e => e >= 3)
console.log(result) // 3


const arrNums3 = [1, 2, 3]
const result4 = arrNums3.findIndex(
  function(value, index, array) {
    return value == this
  },
  2
)
console.log(result4) // => 1

// no idea
const arrNums4 = [1, 2, 3, 4, 5, 6 ]
arrNums4.copyWithin(3, 0, 2)
console.log(arrNums4) // =>  [ 1, 2, 3, 1, 2, 6 ]

// iterable object
const priority5 = ['high', 'low', 'normal']
console.log([...priority5.entries()]) // => [ [ 0, 'high' ], [ 1, 'low' ], [ 2, 'normal' ] ]
console.log([...priority5.keys()]) // => [ 0, 1, 2 ]
console.log([...priority5.values()]) // => [ 'high', 'low', 'normal' ]

for (const p of priority5) console.log(p) //=> high \n low \n normal

// includes(searchEl, fromIndex)
const priority6 = ['high', 'low', 'normal', NaN]
console.log(priority6.includes('high', 1)) // false
console.log(priority6.includes(NaN)) // true
console.log(priority6.indexOf(NaN) >= 0) // false

const value2 = {value: 2}
const priority7 = [{value: 1}, value2]
const result6 = priority7.includes(value2)
const result7 = priority7.includes({value: 2})
console.log(result6) // => true // reference sensitive
console.log(result7) // => false

// .flat(n), n default 1 depth
const priority8 = [1, 2, [3, 4], [[5, 6]]]
console.log(priority8.flat()) // => [1, 2, 3, 4, [5, 6]]
console.log(priority8.flat(2)) // => [1, 2, 3, 4, 5, 6]
console.log(priority8.flat(0)) // returns copy
console.log(priority8.flat(-1)) // returns copy
console.log(priority8.flat(2.5)) // ignore after '.'
console.log(priority8.flat(Infinity)) // infinity depth


// flatMap
const a1 = ['a', 'b', 'c'].flatMap(x => x) // => ['a', 'b', 'c']
const a2 = ['a', 'b', 'c'].flatMap(x => [x]) // => ['a', 'b', 'c']
const a3 = ['a', 'b', 'c'].flatMap(x => [[x]]) // => [['a'], ['b'], ['c']]

//...
const taskId = '12345'
const maxNum = Math.max(...taskId)
console.log([...taskId]) // => [ '1', '2', '3', '4', '5' ]
console.log(maxNum, typeof maxNum) // => 5 number






