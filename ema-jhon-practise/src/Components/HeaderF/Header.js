import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='headerDiv'>
            <Link to='/shop'>
                <img src={logo} alt="" />
            </Link>
        </div>
    );
};

export default Header;