//use localstorage to manege cart data

let addtodb = _id => {
   let shoppingCart = {};
  //get the shopping cart
  let storagedCart = localStorage.getItem('shopping-cart')
  if(storagedCart){
    shoppingCart = JSON.parse(storagedCart)
    // console.log(storagedCart)
  }
  else{
    shoppingCart = {}
  }
   
   // add Quantity
  let quantity = shoppingCart[_id]
  if(quantity){
    let newQuantity = quantity + 1;
    shoppingCart[_id] = newQuantity;
    
    // let newQuantity = parseInt(quantity) + 1;
    // localStorage.setItem(_id, newQuantity);
  }
  else{ 

     shoppingCart[_id] = 1;
    // localStorage.setItem(_id, 1)
   }
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

let removeFromeDb = (_id) => {
   let storedCart = localStorage.getItem('shopping-cart')
   if(storedCart){
     let shoppingCart = JSON.parse(storedCart);
     if(_id in shoppingCart){
        delete shoppingCart[_id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
     }
   }
}

let deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart')
}

export {addtodb, removeFromeDb, deleteShoppingCart};