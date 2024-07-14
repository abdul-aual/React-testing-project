// import React from 'react';

// const Review = () => {
//     return (
//         <div>
//             <h2>This is review bro</h2>
//         </div>
//     );
// };

// export default Review;
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
            <h2>This is review bro</h2>
            <div>
                <h3>Cart Items:</h3>
                <ul>
                    {Object.keys(cartItems).map((key) => (
                        <li key={key}>
                            Product Key: {key}, Quantity: {cartItems[key]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Review;
