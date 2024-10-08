import React, { useState } from 'react';
import Products from '../ProductsF/Products';
import fakeData from '../fakeData/findProducts.json';
import './shop.css';
import { Link } from 'react-router-dom';
import { addToDb } from '../fakeData/fakedb';

const Shoph = () => {
    const first10 = fakeData.slice(0,10);
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleButtonClick = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        

        //new line added for database
       const bal =  addToDb(product.key);


    };

    // Calculate total
    let total = 0;
    for (let i = 0; i < cart.length; ++i) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 0) {
        shipping = 3;
    }

    let tax = total * 0.05;
    let GT = total + tax + shipping;

    total = total.toFixed(2);
    shipping = shipping.toFixed(2);
    tax = tax.toFixed(2);
    GT = Math.floor(GT.toFixed(2));

    const handleOrderBtn = () => {
    
    };

    return (
        <div className='mainDiv'>
            <div className='product-container'>
                {products.map((product, key) => (
                    <Products
                        handleButtonClick={handleButtonClick}
                        showBuyNowBtn = {true}
                        products={product}
                        key={key}
                    />
                ))}
            </div>
            <div className='cart-container'>
                <h2 className='text-center'>
                    <u>Order Summary</u>
                </h2>

                <div className='calculation-div'>
                    <div>
                        <p>Items Ordered: </p>
                        <p>Shipping & handling: </p>
                        <p>Total Before Tax: </p>
                        <p>Estimated Tax: </p>
                        <h2>Total</h2>
                    </div>
                    <div className='money'>
                        <p>{cart.length}</p>
                        <p>${shipping}</p>
                        <p>${total}</p>
                        <p>${tax}</p>
                        <h2>${GT}</h2>
                    </div>
                </div>

                <div className='orderDiv'>
                    <Link to='/order'><button onClick={handleOrderBtn} className='buy-btn'>Review Your Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Shoph;
