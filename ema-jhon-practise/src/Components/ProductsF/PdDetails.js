import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/findProducts.json';
import Products from './Products';

const PdDetails = () => {
    const {productkey} =useParams();
    const product = fakeData.find(pd=>pd.key === productkey);


    return (
        <div>  
            <Products 
            products = {product}
            showBuyNowBtn = {false}
            ></Products>
            
        </div>
    );
};

export default PdDetails;