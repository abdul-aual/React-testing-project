import React, { useEffect, useState } from 'react';
import './shop.css'; 
import Product from '../productFolder/Product';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    // Function to handle adding products to the cart
    const handleAddCart = (addedPro) => {
        const newCart = [...cart, addedPro];
        setCart(newCart);

        // Persist cart state in local storage
        localStorage.setItem('cart', JSON.stringify(newCart));

        // Code to update local storage with product key and quantity
        const productKey = addedPro.key;
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
        if (cartItems[productKey]) {
            cartItems[productKey] += 1;
        } else {
            cartItems[productKey] = 1;
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    // Fetch data when component mounts
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setData(data));

        // Retrieve cart state from local storage if it exists
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Calculate total, vat, shipping, and grand total
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total += parseInt(product.price);
    }
    let vat = parseInt(total * 0.04);
    let grandTotal = vat + total;
    let Shipping = 0;
    if (total > 0) {
        Shipping = 12;
        grandTotal += 12;
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    data.map(datum => (
                        <Product 
                            key={datum.key} // Add key prop here for unique identification
                            showAddToCart={true}
                            productDetails={datum} 
                            handleAddCart={handleAddCart}
                        />
                    ))
                }
            </div>
            <div className='cart-container'>
                <div className='order-summary'>
                    <h3 className='text-primary'>Order summary</h3>
                    <p>Items ordered: {cart.length} </p>
                </div>
                <div className='order-calculation'>
                    <div>
                        <p>Items: </p>
                        <p>Shipping & Handling: </p>
                        <p>Total before tax: </p>
                        <p>Estimated Tax:(4%) </p>
                        <h2 className='order-total'>Order Total: </h2>
                    </div>
                    <div className='dolar'>
                        <p>{cart.length}</p>
                        <p>${Shipping}</p>
                        <p>${total}</p>
                        <p>${vat} </p>
                        <h2 className='order-total'>${grandTotal}</h2>
                    </div>
                </div>
                <div className='order-summary review'>
                    <Link to='/review'>
                        <button className='review-btn'>Review Order</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shop;
