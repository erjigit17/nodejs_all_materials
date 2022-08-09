// reduce doesnt mutate array
// return single value

const arr = ['a', 'b', 'c', 'd']

const result = arr.reduce(
  (acc, next, index, array) => acc + next, ''
)
console.log(result)

const arrNum = [1, 2, 3, 4, 5]
const result2 = arrNum.reduce(
  (acc, next, index, array) => acc * next
)
console.log(result2)


const result3 = arrNum.reduceRight(
  (acc, next, index, array) => acc - next
)
console.log(result3)