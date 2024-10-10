import React, { useState, useEffect } from 'react';
import Products from '../ProductsF/Products';
import fakeData from '../fakeData/findProducts.json';
import './shop.css';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../fakeData/fakedb'; // Make sure to import getStoredCart

const Shoph = () => {
    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Load the cart from local storage when the component mounts
        const storedCart = getStoredCart();
        const cartItems = [];

        for (const key in storedCart) {
            const product = fakeData.find(pd => pd.key === key);
            if (product) {
                const quantity = storedCart[key];
                // Push the product with the quantity to the cart array
                for (let i = 0; i < quantity; i++) {
                    cartItems.push(product);
                }
            }
        }

        setCart(cartItems);
    }, []);

    const handleButtonClick = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key); // Save the product to local storage
    };

    // Calculate total
    let total = 0;
    for (let i = 0; i < cart.length; ++i) {
        const product = cart[i];
        total += product.price;
    }

    let shipping = total > 0 ? 3 : 0; // Shipping fee
    let tax = total * 0.05; // Tax calculation
    let GT = total + tax + shipping; // Grand total

    total = total.toFixed(2);
    shipping = shipping.toFixed(2);
    tax = tax.toFixed(2);
    GT = Math.floor(GT.toFixed(2));

    const handleOrderBtn = () => {
        // Any specific logic when the order button is clicked
    };

    return (
        <div className='mainDiv'>
            <div className='product-container'>
                {products.map((product, key) => (
                    <Products
                        handleButtonClick={handleButtonClick}
                        showBuyNowBtn={true}
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
                    <Link to='/order'>
                        <button onClick={handleOrderBtn} className='buy-btn'>Review Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shoph;
