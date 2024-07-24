import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../fakeDataF/products.json';
import Products from '../shopFolder/Products';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product =products.find(pd=> pd.key === productKey);
    return (
        <div>
            <Products showAddToCart={false} productsDetail={product}></Products>
        </div>
    );
};

export default ProductDetails;