const products = [
  {id: 1, name: "Socks"},
  {id: 2, name: "Pants"},
  {id: 3, name: "Bag"},
  {id: 4, name: "T-Shirt"},
  {id: 5, name: "Scarf" }]


function isProductAvailable(product){
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(!(product.id % 2 === 0))
      }
      , 500)
  })
}


function getAvailableProducts(products) {
  const promiseArr = []

  for (const product of products) {
    promiseArr.push(isProductAvailable(product))
  }

  Promise.all(promiseArr)
    .then(value =>
      products.filter((_, index ) => value[index])
    )
    .then(console.log)
}

getAvailableProducts(products)



function  doAsync() {
  return new Promise((resolve => {
    setTimeout(() => resolve(42), 200)
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