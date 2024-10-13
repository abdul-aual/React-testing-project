import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import Allfriends from '../friendsF/Allfriends';
import VisitedF from '../friendsF/VisitedF';
import CurrentF from '../friendsF/CurrentF';
const Navbar = () => {
    return (
        <div>
            <div className="div-container">
                <ul className='list-container'>
                    <li className='list-items'> <Link to='/allfriends' element={<Allfriends/>} >All Friends</Link> </li>
                    <li className='list-items'><Link to='/visited' element={<VisitedF/>}>Current Friend</Link></li>
                    <li className='list-items'><Link to='/current' element={<CurrentF/>}>Visited Friends</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;