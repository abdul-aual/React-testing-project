import React, { useEffect, useState } from 'react';

const Review = () => {
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    return (
        <div>
            <div>
                <h3>Cart Items:</h3> 
                
            
            </div>
        </div>
    );
};

export default Review;
