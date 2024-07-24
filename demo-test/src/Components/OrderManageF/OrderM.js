import React, { useEffect, useState } from 'react';
import { clearTheCart, deleteFromDb, getStoredCart } from '../fakeDataF/fakedb';
import products from '../fakeDataF/products.json';
import Review from '../reviewFolder/Review';
import Cart from '../cartFolder/Cart';
import { Link } from 'react-router-dom';
const OrderM = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = products.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])
    const removeProduct = (productkey) => {
        const newCart = cart.filter(pd => pd.key !== productkey);
        setCart(newCart);
        deleteFromDb(productkey);
    }
    const handlePlaceOrder=()=>{
        setCart([]);
        clearTheCart();
    }
    return (
        <div>


            <div className='flex-div'>
                <div className='width70 property70'>
                    {
                        cart.map((pd, index) => <Review removeProduct={removeProduct} product={pd} key={index}></Review>)
                    }
                </div>
                <div className='width28 property28'>
                    <Cart cartPro={cart} key={cart.key} > 
                    <Link to='/thank'><button onClick={handlePlaceOrder} className='btn'>Place Order</button></Link>
                     </Cart>
                </div>
            </div>


        </div>
    );
};

export default OrderM;