import React from 'react';
import './products.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {name,seller,price,stock,key} = props.productsDetail;
    return (
        <div className='products'>
            <h2><Link className='name-link' to={'/product/'+key}>{name}</Link></h2>
            <small>by: {seller}</small><br/>
            <small>Only {stock} left in stock.Order soon...</small>
            <h2 className='color-salmon'>Price: ${price}</h2>
            <br/>
            {
             props.showAddToCart && <button onClick={()=>props.handleAddProduct(props.productsDetail)} className='btn addToCart' >Add to Cart</button>

            }
        </div>
    );
};

export default Products;