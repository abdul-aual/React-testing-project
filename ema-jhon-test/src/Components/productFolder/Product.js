import React from 'react';
import product from './product.css';

const Product = (props) => {
    const {name, img, seller, price, stock}= props.productDetails;
    return (
        <div className='single-one-product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-name' > 
                <h4>{name}</h4><br />
                <p><small>seller: {seller}</small></p>
                <p style={{fontWeight:'bold'}}>Price: ${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='btn-mama' onClick={()=>props.handleAddCart(props.productDetails)} >add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;