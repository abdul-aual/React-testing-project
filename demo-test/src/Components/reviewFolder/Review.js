import React from 'react';
import './review.css';
const Review = (props) => {
    const {name,quantity,price,key} = props.product;
    return (
        <div className='review-item'>
            <h3 className='color-salmon'>{name}</h3>
            <p>Quantity: {quantity}</p>
            <small>Price: ${price}</small>
            <br/><br/>
            
             <button  onClick={()=>props.removeProduct(key)} className='btn'>Remove</button>
            
        </div>
    );
};

export default Review;