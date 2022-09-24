import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTotal } from '../../Utilities/Calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../Utilities/Calculate';


const Cosmetics = () => {
  // let first = 55;
  // let second = 66;
  // let total = add(first, second)
  // let mTotal = multiply(first, second)
  // let cosmetics =[
  //   {
  //     "_id": "632e0552663f5e91d3754d0d",
  //     "picture": "http://placehold.it/32x32",
  //     "price": 247,
  //     "name": "Alberta Holden",
  //     "gender": "female"
  //   },
  //   {
  //     "_id": "632e0552f5b50ceaa91d149f",
  //     "picture": "http://placehold.it/32x32",
  //     "price": 27,
  //     "name": "Mendoza Ramos",
  //     "gender": "male"
  //   },
  //   {
  //     "_id": "632e0552a43828966cd6e516",
  //     "picture": "http://placehold.it/32x32",
  //     "price": 153,
  //     "name": "Jacqueline Swanson",
  //     "gender": "female"
  //   },
  //   {
  //     "_id": "632e05523563c50faabf90a6",
  //     "picture": "http://placehold.it/32x32",
  //     "price": 464,
  //     "name": "Mona Jones",
  //     "gender": "female"
  //   },
  //   {
  //     "_id": "632e05521f4687361742d38d",
  //     "picture": "http://placehold.it/32x32",
  //     "price": 378,
  //     "name": "Madden Herman",
  //     "gender": "male"
  //   },
  //   {
  //     "_id": "632e05523584070caedf2c64",
  //     "picture": "http://placehold.it/32x32",
  //     "price": 486,
  //     "name": "Mckinney Watts",
  //     "gender": "male"
  //   },
  //   {
  //     "_id": "632e05520bb8979447113a2b",
  //     "picture": "http://placehold.it/32x32",
  //     "price": 274,
  //     "name": "Johnson Wilson",
  //     "gender": "male"
  //   }
  // ]
  
  let [cosmetics, setCosmetics] = useState([])
   
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))
  },[])

   let total = getTotal(cosmetics)
   
  return (
    <div>
      <h1>Hello From Cosmetics</h1>
      <p>Total: {total}</p>
      {/* <p>total: {total}</p> */}
      {/* <p>Multiply: {mTotal}</p> */}

      {
        cosmetics.map(cosmetic => <Cosmetic key={cosmetic._id} cosmetic= {cosmetic}></Cosmetic>)
      }

    </div>
  );
};

export default Cosmetics;