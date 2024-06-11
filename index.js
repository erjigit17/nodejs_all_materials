class S {
  constructor(data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator] () {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
            this.index = 0
            return {
              value: void 0,
              dane: true
            }
        }
      }
    }
  }
}

// const iterator
// const express = require ('express')
// const PORT = process.env.PORT ?? 4000
//
// const app = express()
//
// app.use(middleWare)
// app.use(errorHandler)
//
// app.all('/', ((req, res) => {
//   res.send('Hi')
// }))
//
// app.all('/err', ((req, res) => {
//   throw new Error()
// }))
//
//
//
// function middleWare(req, res, next) {
//   console.log(req.method)
//   next()
// }
//
// function errorHandler(err, req, res, next) {
//   console.error(err.message)
//   res.code(500)
//
//   next()
// }
//
// app.listen(PORT, () => console.log(`Server started: ${PORT}`))







// const products = [
//   {id: 1, name: "Socks"},
//   {id: 2, name: "Pants"},
//   {id: 3, name: "Bag"},
//   {id: 4, name: "T-Shirt"},
//   {id: 5, name: "Scarf" }];
//
// /*
// Check if product is available
// Return BOOLEAN value after 500ms DELAY
// If product id is:
// - odd then return TRUE (true)
// - even then return FALSE (false)
// */
// function isProductAvailable(product){
//   return new Promise(resolver => {
//     setTimeout(() => {
//       resolver(
//         !(product.id % 2 === 0)
//       )
//     }, 500)
//     }
//   )
// }
//
//
// function getAvailableProducts(products) {
//   const arrPromises = []
//
//   for (const product of products) {
//     arrPromises.push(isProductAvailable(product))
//   }
//
//   Promise.all(arrPromises)
//     .then(arrOfBooleans => products.filter((_, index) => arrOfBooleans[index]))
//     .then(console.log)
//
// }
//
//
// getAvailableProducts(products)



//
//
// console.log(
//   Object.getOwnPropertyDescriptors([1,1])
// )

// const express = require ('express')
// const app = express()
//
// app.use(logMethod)
// app.use(errorHandling)
//
// app.get('/', (req, res) => res.send('Hello'))
// app.get('/err', (req, res) => {
//   throw new Error()
// })
//
// app.listen(3000, ()=> console.log('Server started'))
//
// function logMethod(req, res, next) {
//   console.log(req.method)
//   next()
// }
//
// function errorHandling(err, req, res, next) {
//   console.error(err.stack)
//   next()
// }

// const log = console.log
// log(global)

// const https = require('https')
//
//
// const obj = {
//   "userId":1,
//   "id":1,
//   "title":"whatever",
//   "completed":true
// }
//
// const data = JSON.stringify(obj)
//
// const options = {
//   hostname: 'jsonplaceholder.typicode.com',
//   port: 443,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }
//
// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)
//
//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })
//
// req.on('error', error => {
//   console.error(error)
// })
//
// req.write(data)
// req.end()