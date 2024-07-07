import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='logo-div'>
           
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                 <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage</Link>
            </nav>
           
        </div>
    );
};

export default Header;