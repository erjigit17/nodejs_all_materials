// 1. Как в js проверить, что строковый элемент содержится в массиве строк?
// const str = '["a", "b"]'
//
// function getArrFromString(string) {
//   try {
//     const array = JSON.parse(str)
//     return Array.isArray(array)? array : false
//   } catch {
//     return false
//   }
// }
//
// function main(string) {
//   const array = getArrFromString(string)
//   if (!array) {
//     throw new Error(`${string} is not array`)
//   }
//
//   if (array.some(item => typeof item !== 'string')) {
//     throw new Error(`${string} is not array of strings`)
//   }
//
//   return `${string} is array of strings`
// }
//
// console.log(main(str))

const SECONDS_IN_ONE_DAY = 86400
const now = Math.floor(Date.now() / 1000)
const daysFromStartingUnixEpoch = Math.floor(now/SECONDS_IN_ONE_DAY) + 1
console.log(daysFromStartingUnixEpoch * SECONDS_IN_ONE_DAY)


