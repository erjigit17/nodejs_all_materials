function  doAsync() {
  return new Promise((resolve => {
    setTimeout(resolve(), 200)
  }))
}

doAsync().then(
  function (value) {console.log(`Resolved! ${value}`)},
  function (reason) {console.log(`Rejected! ${reason}`)}
)

function  doAsync2() {
  return Promise.reject('some value')
}

doAsync2().then(
  function (value) {console.log(`Resolved! ${value}`)},
  function (reason) {console.log(`Rejected! ${reason}`)}
)

const p = Promise.resolve(2)
p.then(console.log)


const p3 = new Promise((resolve, reject) => {
  reject('Error')
})

p3
  // .then(null, console.log)
  .catch(console.error)

const p4 = new Promise(resolve => {
  setTimeout(_ => {
    resolve('Promise data')
  },300)
})

p4.then(console.log)