import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            
            <nav className='text-center'>
                <Link className='header-link' to='/'>Home</Link>
                <Link className='header-link' to='/shop'>Shop</Link>
                <Link className='header-link' to='order'>Order Manage</Link>
                
            </nav>
        </div>
    );
};

export default Header;