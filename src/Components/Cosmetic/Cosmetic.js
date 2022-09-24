import React from 'react';
import { addtodb, deleteShoppingCart, removeFromeDb } from '../../Utilities/fakedb';
import  './Cosmetic.css';

const Cosmetic = (props) => {
  let {name, price, _id} = props.cosmetic

  let addToCard = (_id) => {
    addtodb(_id)
  }
  // let addToCardWithPeram = () => addToCard(_id)

   let removeFromeCart = (_id) => {
      removeFromeDb(_id)
   }

   let detetCart = () => {
     deleteShoppingCart()
   }
   
  return (
    <div className='product'>
      <h1>Buy This: {name}</h1>
      <p>Only For: {price}</p>
      <p><small>Its has id: {_id}</small></p>
      {/* <button onClick={addToCardWithPeram}>Add To Card</button> */}
      {/* <button onClick={() => addToCard(_id)}>Add To Card Shotcart</button>   */}
      <button onClick={() => addToCard(_id)}>Add To Cart</button>
      <button onClick={() => removeFromeCart(_id)}>Remove From Storage</button>
      <button onClick={detetCart}>Delete Cart</button>
    </div>
  );
};

export default Cosmetic;