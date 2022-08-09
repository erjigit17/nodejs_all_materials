//this methods mutate arr
const e = []

e.push('b', 'c') // return new length
e.unshift('a') // return new length

const firstEl = e.shift() // return first el end delete it
const lastEl = e.pop() // return last el end delete it

console.log(firstEl)
console.log(lastEl)
console.log(e[0])
console.log(e.length)
