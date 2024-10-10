import React, { useState, useEffect } from 'react';
import { getStoredCart } from '../fakeData/fakedb';
import Review from './Review';
import fakeData from '../fakeData/findProducts.json';

const OrderL = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Retrieve stored cart from local storage
        const storedCart = getStoredCart();
        const productKeys = Object.keys(storedCart);
        const initialProducts = productKeys.map(key => 
            fakeData.find(pd => pd.key === key)
        );
        setProducts(initialProducts);
    }, []); // Run once on mount

    return (
        <div>
            <Review products={products} setProducts={setProducts} />
        </div>
    );
};

export default OrderL;
