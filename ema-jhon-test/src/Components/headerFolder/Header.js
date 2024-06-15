import React from 'react';
import logo from '../../images/logo.png';
import header from './header.css';

const Header = () => {
    return (
        <div className='logo-div'>
           
                <img src={logo} alt="" />
                <nav>
                <a href="/shop">shop</a>
                <a href="/order-review">order review</a>
                <a href="/manage">manage</a>
            </nav>
           
        </div>
    );
};

export default Header;