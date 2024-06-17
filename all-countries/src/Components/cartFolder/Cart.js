import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation =0;
    for(let i=0; i<cart.length; i++)
    {
        const singlePopulation = cart[i];
        totalPopulation=totalPopulation + singlePopulation.population;
    }

    return (
        <div>
            <h2>Country added:{cart.length} </h2>
            <h3>Population is: {totalPopulation}</h3>
        </div>
    );
};

export default Cart;