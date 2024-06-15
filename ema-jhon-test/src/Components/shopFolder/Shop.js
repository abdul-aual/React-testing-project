import React, { useEffect, useState } from 'react';
import shop from './shop.css'; 
import Product from '../productFolder/Product';

const Shop = () => {
     const [data, setData] =useState([]);
     const [cart, setCart] = useState([]);
     const handleAddCart=(adddedPro)=>{
            const newCart = [...cart, adddedPro];
            setCart(newCart);
     }
      useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=>res.json())
        .then(data=>{setData(data)})
      },[])
      let total=0;
     for(let i=0; i<cart.length; i++)
     {  const product = cart[i];
        total = total+parseInt(product.price);
     }
     let vat = parseInt(total*0.04);
     let grandTotal = vat+total+12;
     let Shipping =0;
     if(total>0)
     {
        Shipping = 12;
     }


    return (
        <div className='shop-container'>
            <div className='product-container' >
                {
                        data.map(datum=><Product 
                            productDetails={datum} 
                            handleAddCart={handleAddCart}>

                            </Product>)
                }
            </div>
            <div className='cart-container' >
                <div className='order-summary' >
                    <h3>Order summary</h3>
                    <p>Items ordered: {cart.length} </p>
                </div>
                <div className='order-calculation'>
                    <div>
                        <p>Itmes: </p>
                        <p>Shipping & Handling: </p>
                        <p>Total before tax: </p>
                        <p>Estimated Tax: </p>
                        <h2 className='order-total'>Order Total: </h2>
                    </div>
                    <div className='dolar'>
                    <p> {cart.length }</p>
                    <p>${Shipping}</p>
                    <p>${total}</p>
                    <p>${vat} (4%)</p>
                    <h2 className='order-total'>${grandTotal}</h2>

                    </div>
                </div>
                <div className='order-summary review'>
                    <button className='review-btn'>Review your order</button>
                </div>
            </div>
            
         </div>
    );
};

export default Shop;