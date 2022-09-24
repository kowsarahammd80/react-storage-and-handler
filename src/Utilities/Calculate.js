let add = (first, second) => {
  return first + second;
}

// export default add; //ei bhabe singel function k export kora hoy

let multiply = (first, second) => {
  return first * second;
}


// let numbers = [20, 24, 235, 65, 89];
// let sunreducer = (previous, current) => previous + current;
// let total = numbers.reduce(sunreducer , 0)

// let item = [
//   {id: 1, name: 'alta', price: 100},
//   {id: 1, name: 'alta', price: 100},
//   {id: 1, name: 'alta', price: 100},
//   {id: 1, name: 'alta', price: 100},
//   {id: 1, name: 'alta', price: 100},
// ]

// let itemSumReducer = (previous, current) => previous + current.price 
// let itemTotal = item.reduce(itemSumReducer, 0)

let getTotalPrice = products => {
  let reducer = (previous, current) => previous + current.price;
  let total = products.reduce(reducer, 0)
  return total;
}

export {add, multiply, getTotalPrice as getTotal};