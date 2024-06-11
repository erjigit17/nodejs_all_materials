/*
TASK:
You have list of products each with name and id.
By using thirt party api(isProductAvailable function) you need to check and return list of applicable products.
Available products have odd id.

Expected result:
Logged into console the list of available products - Array<{id: number, name: string}>

Additional info/requirements:
- Top level await is disabled
- Use typescript (optional)
*/

const products = [
  {id: 1, name: "Socks"},
  {id: 2, name: "Pants"},
  {id: 3, name: "Bag"},
  {id: 4, name: "T-Shirt"},
  {id: 5, name: "Scarf" }];

/*
Check if product is available
Return BOOLEAN value after 500ms DELAY
If product id is:
- odd then return TRUE (true)
- even then return FALSE (false)
*/
function isProductAvailable(product){
  return new Promise((resolve => {
    setTimeout( () => {
      resolve(product.id % 2 === 1)
    } ,500)
  }))
}

function getAvailableProducts(products) {
  let promises = []

  for (const item of products) {
    promises.push(isProductAvailable(item))
  }

  Promise.all(promises)
    .then(arrBool => filtering(arrBool, products))
    .then(console.log)

}

function filtering(arrBool, products){
  const result = []
  for (let i= 0; i < products.length; i++) {
    if(arrBool[i]) result.push(products[i])
  }

  return result
}

getAvailableProducts(products)


