function assertString(value: any): asserts value is string {
  if(typeof value !== 'string') {
    throw new Error('value should be string')
  }
}

function someFn(title: any): string {
  assertString(title)

  return [...title].reverse().join('')
}
console.log(someFn(43))
