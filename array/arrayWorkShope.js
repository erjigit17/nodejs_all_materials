// #1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const last = arr.slice(-1)[0]
const last2 = arr[arr.length - 1]
const last3 = arr.at(-1)
console.log(last)
console.log(last2)
console.log(last3)
console.log(arr)

const lastSplice = arr.splice(-1)[0]
console.log(lastSplice)
console.log(arr)

const lastPop = arr.pop()
console.log(lastPop)
console.log(arr)

// #2
const arr2 = Array.of('of')
arr2.push('push')
arr2['length'] = arr2.length + 1
arr2.fill('fill', arr2.length - 1)
arr2[arr2.length] = 'ByLength'

// without modifying
const newArr = arr2.concat('concat')
const newArr2 = [...newArr, 'spread']
console.log(newArr2)

// #3 insert element whit index 3
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const copyArr3 = [...arr3]
copyArr3.splice(3, 0, 'insert')
console.log(copyArr3)

// #3.1 insert element whit index 3. .slice()
const newArrBySlice = [...arr3.slice(0, 3), 'insert', ...arr3.slice(3, arr3.length - 1)]
console.log(newArrBySlice)

// #3.2 replace element whit index 3. .map()
const mapCopyArr3 = arr3.map((el, index) => index === 3 ? 'insert' : el)
console.log(mapCopyArr3)

// #4 Iterate over arr an display
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr4.forEach((el, index, array) => {
  array[index] = el * 10
})
console.log(arr4)

// #5 create array of numbers from 0 to 100, and display sum which greater then 50
const arr5 = [1, 48, 59, 3, 71, 4, 33, 69]
const sum = arr5.reduce((acc, el, index, array) =>
    el > 50 ? acc + el : acc
  , 0)

console.log(sum)

const sum2 = arr5
  .filter(el => el > 50)
  .reduce((acc, el, index, array) => acc + el, 0)

console.log(sum2)

// #6
const arr6 = ['asd', 'klj']
console.log(arr6.join('-'))

// #7 create arr 1 - 20 random, sort it
const arr7 = Array.from({length: 5}, () => Math.floor(Math.random() * 20))
console.log(arr7.sort((a, b) => a - b))

// #8
const arr8 = [3, 0, -1, 12, -2, -4, 0, 7, 2]
const negArr = arr8.filter(el => el < 0).sort((a, b) => b - a)
const posArr = arr8.filter(el => el > 0)
const zerosArr = arr8.filter(el => el === 0)

console.log([...negArr, ...zerosArr, ...posArr])

// #9
const styles = ['Jazz', 'Blues']
styles.push('Rock-n-Roll') // return length
styles.splice(styles.length - 2, 1, 'Classical')
styles.unshift('Rap', 'Reggae')

console.log(styles)

// #10
const someText = 'LoramIpksdjfmlvsclaijsdfoljshcnknj tan'
const letters = [...'rkt']
const result10 = {}
;[...someText].forEach(el =>
  letters.includes(el)
    ? (result10[el] ? result10[el]++ : result10[el] = 1)
    : void 0)
console.log(result10)


// #17 replace duplicates to *
const arr17 = [1, 2, 3, 1, 4, 5, 1, 3, 6, 7, 8, 3, 9]
const uniqueElements = []
arr17.forEach((el, index, array) => {
  if (uniqueElements.includes(el)) array.splice(index, 1, '*')
  else uniqueElements.push(el)
})

console.log(arr17)

// #18 numbers array to array of  binary, octal an hexadecimal
const arr18 = [17, 8, 9]

console.log(arr18.map(el => '0b' + el.toString(2)))
console.log(arr18.map(el => '0o' + el.toString(8)))
console.log(arr18.map(el => '0x' + el.toString(16)))


// #19
const arr19 = ['a', 1]
console.log(arr19.some(el => !(typeof el !== 'string')))

// #20 binary search
const arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function binarySearch(arr, value) {
  let middle = Math.round(arr.length / 2)
  
  if (arr[middle] === value) return middle
  if (arr.length <= 1) return -1

  if (arr[middle] > value) return binarySearch(arr.slice(0, middle + 1), value)
  if (arr[middle] < value) return binarySearch(arr.slice(middle + 1, arr.length - 1), value)
}

console.log('result', binarySearch(arr20, 4))

