function crateCustomer(name: string, id: number): string {
  return `${name}${id}`
}

let idGenerator:  (name: string, id: number, active?: true) => string =
                    (name, id, active) => `${name}${id}`
// idGenerator = crateCustomer
const myId = idGenerator('Erji', 7)
console.log(myId)

function getAllNumbs(name: string, ...numbs: number[]) {
  return `${name}, ${numbs.join(' ')}`
}

console.log(getAllNumbs('erji', 1, 2, 3))

function getAllArgs(...args: [string, number, boolean]) {
  return `${args}`
}

const args: [string, number, boolean] = ['erji', 7, true]
console.log(getAllArgs(...args))


function optionalParams(name: string, optional?: string) {
  return name + optional  ? optional
                          : ''
}
