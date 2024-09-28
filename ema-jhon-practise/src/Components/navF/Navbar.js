import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className="container">
                <ul className='navbarLinks'>
                    <li className='navbarItem' ><Link to='/shop' >Shop</Link></li>
                    <li className='navbarItem'><Link to='/order' >Order Review</Link></li>
                    <li className='navbarItem'><Link to='/manage'>Manage Inventory</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;