import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart =props.cartPro;
    let total=0;
    for(let i=0; i<cart.length; i++)
    {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let vat=0;
    let shipping =0;
    if(total){
        vat = 5;
        shipping=5;
    }
    let gd = parseInt(total+vat+shipping);

    return (
        <div>
            <h1 className='text-center'>Order Summary</h1>
            <div className='flex-div'>
                <div>
                    <p>Items Ordered: </p>
                    <p>Price: </p>
                    <p>Vat: </p>
                    <p>Shipping: </p>
                </div>
                <div className='value'>
                    <p> {cart.length}</p>
                    <p>{total}</p>
                    <p>{vat}</p>
                    <p>{shipping}</p>
                </div>
            </div>
            <h2 className='text-center'>Grand Total: {gd}</h2>
            <div className='text-center'>
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Cart;