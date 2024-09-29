import React, { useState, useEffect } from 'react';
import fakeData from '../fakeData/products.JSON';
import Products from '../ProductsF/Products';
import './shop.css';

const Shoph = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(fakeData)
            .then(response => response.json())
            .then(data => {
                const first20 = data.slice(0, 20);
                setProducts(first20);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleButtonClick = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    // Calculate total
    let total = 0;
    for (let i = 0; i < cart.length; ++i) {
        const product = cart[i];
        total = total + product.price;
    }

    // Calculate shipping and tax
    let shipping = 0;
    if (total > 0) {
        shipping = 3;
    }

    let tax = total * 0.05;
    let GT = total + tax + shipping;

    // Convert values to two decimal places
    total = total.toFixed(2);
    shipping = shipping.toFixed(2);
    tax = tax.toFixed(2);
    GT = Math.floor(GT.toFixed(2));

    const handleOrderBtn = () => {
        console.log('ami order review re');
    };

    return (
        <div className='mainDiv'>
            <div className='product-container'>
                {products.map((product, key) => (
                    <Products
                        handleButtonClick={handleButtonClick}
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
                    <button onClick={handleOrderBtn} className='buy-btn'>
                        Review Your Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shoph;
