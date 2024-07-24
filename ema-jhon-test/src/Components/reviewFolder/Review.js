// import React, { useEffect, useState } from 'react';

// const Review = () => {
//     const [cartItems, setCartItems] = useState({});

//     useEffect(() => {
//         const storedCartItems = localStorage.getItem('cartItems');
//         if (storedCartItems) {
//             setCartItems(JSON.parse(storedCartItems));
//         }
//     }, []);
//     console.log(cartItems);

//     return (
//         <div>
//             <div>
//                 <h3>Cart Items:</h3> 
//                 <ul>
//                     {Object.keys(cartItems).map((productKey) => (
//                         <li key={productKey}>
//                             Product Key: {productKey}, Quantity: {cartItems[productKey].quantity}
//                         </li>
//                     ))}
//                 </ul>
            
//             </div>
//         </div>
//     );
// };

// export default Review;
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        console.log("Stored Cart Items (Raw):", storedCartItems); // Log raw data
        if (storedCartItems) {
            const parsedItems = JSON.parse(storedCartItems);
            console.log("Parsed Cart Items:", parsedItems); // Log parsed data
            setCartItems(parsedItems);
        }
    }, []);

    return (
        <div>
            <div>
                <h3>Cart Items:</h3> 
                <ul>
                    {Object.keys(cartItems).map((productKey) => (
                        <li key={productKey}>
                            Product Key: {productKey}, Quantity: {cartItems[productKey].quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Review;
