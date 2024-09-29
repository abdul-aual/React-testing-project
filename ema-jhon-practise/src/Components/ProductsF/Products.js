import React from 'react';
import './products.css';

const Products = (props) => {
    const {name,seller,stock,img,price} = props.products;
    return (
        <div className='product-main-div'>

            <div className='imgDiv'>
                <img src={img} alt="" srcset="" />
            </div>
            <div className='productDetails'>
                <h3>{name}</h3>
                <small>Seller: {seller}</small><br></br>
                <small> Only left {stock} in stock.Order soon...</small>
                <h4>Price: {price}</h4>
                <button onClick={()=>props.handleButtonClick(props.products)} className='buy-btn'>Buy Now</button>
            </div>
           
        </div>
    );
};

export default Products;