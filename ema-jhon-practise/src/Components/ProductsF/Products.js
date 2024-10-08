import React from 'react';
import './products.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {name,seller,stock,img,price,key} = props.products;
    return (
        <div className='product-main-div'>

            <div className='imgDiv'>
                <img src={img} alt="" srcset="" />
            </div>
            <div className='productDetails'>
                <h3><Link to={"/product/"+key}> {name}</Link> </h3>
                <small>Seller: {seller}</small><br></br>
                <small> Only left {stock} in stock.Order soon...</small>
                <h4>Price: {price}</h4>
                { props.showBuyNowBtn &&
                    <button onClick={()=>props.handleButtonClick(props.products)} className='buy-btn'>Buy Now</button>   
                }
            </div>
           
        </div>
    );
};

export default Products;