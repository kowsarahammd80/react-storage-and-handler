import React from 'react';
import { add, multiply } from '../../Utilities/Calculate';

const Shoes = () => {
  let first = 13;
  let second = 11;
  let result = multiply(first, second)
  let sum = add(first, second)
  return (
    <div>
      <h3>this is Shoe Component</h3>
      <p>multiply: {result} and total: {sum}</p>
    </div>
  );
};

export default Shoes;