import React from 'react';
import { getStoredCart } from '../fakeData/fakedb';
import Review from './Review';

const OrderL = () => {
   const bal = getStoredCart();
   const cartItemCount = Object.keys(bal).length; 
   console.log(bal);
    return (
        <div>
            <h1>Items added: {cartItemCount}</h1>
            <p>this is order list bro</p>
            <Review></Review>
            
        </div>
    );
};

export default OrderL;