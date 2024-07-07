import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock,key}= props.productDetails;
    return (
        <div className='single-one-product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-name' > 
                <h4><Link className='name' to={'/product/'+key}>{name}</Link></h4><br />
                <p><small>seller: {seller}</small></p>
                <p style={{fontWeight:'bold'}}>Price: ${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='btn-mama' onClick={()=>props.handleAddCart(props.productDetails)} >add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;