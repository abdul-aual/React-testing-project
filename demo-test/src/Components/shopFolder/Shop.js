import React, { useEffect, useState } from 'react';
import data from '../fakeDataF/products.json';
import Products from './Products';
import './shop.css';
import Cart from '../cartFolder/Cart';
import { addToDb, getStoredCart } from '../fakeDataF/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = data.slice(0, 10);
    const [products] = useState(first10);
    const [cart, setCart]= useState([]);
    useEffect(() => {
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
    
        const cartProducts = productKeys.map(key => {
            const product = products.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, []);
    const handleAddProduct =(products)=>{
        const toBeAddedKey = products.key;
        const sameProduct = cart.find(pd=>pd.key===toBeAddedKey);
        let count=1;
        let newCart;
        if(sameProduct){
             count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=> pd.key !== toBeAddedKey )
            newCart = [...others, sameProduct];
        }else{
            products.quantity =1;
            newCart = [...cart, products]
        }
        setCart(newCart);

        addToDb(products.key,count);
    }
    return (
        <div>
            <div className='flex-div'>
                <div className='width70 property70'>
                    {
                        products.map((datum, index) => <Products 
                        key={index} 
                        showAddToCart ={true}
                        productsDetail={datum}
                        handleAddProduct={handleAddProduct}
                        ></Products>)
                    }
                </div>
                <div className='width28 property28'>
                    <Cart cartPro={cart} key={cart.key} >
                    <Link to='/order'> <button className='btn review'>Review Order</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;