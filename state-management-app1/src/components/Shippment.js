import React, { useContext } from 'react';
import { context } from '../App';

const Shippment = () => {
    const hardCoreValue = useContext(context);
    return (
        <div>
            <h1>This is shippment bro</h1>
            <p>This is {hardCoreValue} </p>
        </div>
    );
};

export default Shippment;