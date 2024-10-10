import React, { useEffect, useState } from 'react';
import './review.css';
import { deleteFromDb, getStoredCart } from '../fakeData/fakedb'; // Ensure getStoredCart is imported

const Review = ({ products, setProducts }) => {
    const [cart, setCart] = useState({}); // State to hold the cart quantities

    useEffect(() => {
        const storedCart = getStoredCart(); // Retrieve the cart from local storage
        setCart(storedCart); // Set it in local state
    }, []);

    const handleRemove = (key) => {
        deleteFromDb(key); // Remove item from local storage
        
        // Update the products array to remove the item from the UI
        const updatedProducts = products.filter(product => product.key !== key);
        setProducts(updatedProducts); // Update the products state
    };

    return (
        <div className='review-main-div'>
            {products.length === 0 ? (  // Check if the products array is empty
                <h1>Cart is empty</h1>   // Render this message if it is empty
            ) : (
                products.map(product =>
                    product ? (
                        <div className='review-sub-div' key={product.key}>
                            <h3>{product.name}</h3>
                            <small>Seller: {product.seller}</small><br />
                            <small>Only {product.stock} left in stock. Order soon...</small><br />
                            <small>Quantity: {cart[product.key] || 0}</small> {/* Retrieve quantity here */}
                            <h4>Price: ${(product.price * (cart[product.key] || 0)).toFixed(2)}</h4> {/* Calculate total price */}
                            <button
                                onClick={() => handleRemove(product.key)} 
                                className='buy-btn'>
                                Remove Item
                            </button>
                        </div>
                    ) : null
                )
            )}
        </div>
    );
};

export default Review;
