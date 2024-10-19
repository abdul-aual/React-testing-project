import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className="div-container">
                <ul className='list-container'>
                    <li className='list-items'> <Link to='/allfriends' >All Friends</Link> </li>
                    <li className='list-items'><Link to='/currentFT'>Current Friends</Link></li>
                    <li className='list-items'><Link to='/visited'>Visited Friends</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;