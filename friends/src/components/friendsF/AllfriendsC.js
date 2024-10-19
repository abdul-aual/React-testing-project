import React from 'react';
import './allfriendsC.css';
import { Link } from 'react-router-dom';

const AllfriendsC = (props) => {
    const { name, phone, website, email, id } = props.alluser;

    const handleClick = () => {
        let clickedFriends = JSON.parse(localStorage.getItem('ClickedFriends')) || [];
        const friendExists = clickedFriends.some(friend => friend.name === name);
        
        if (!friendExists) {
            clickedFriends.push({ name, phone });
        }
        localStorage.setItem('ClickedFriends', JSON.stringify(clickedFriends));
        localStorage.setItem('currentClickedFriend', JSON.stringify({id}));
    }

    return (
        <div className='allfriends-main-div'>
           <div className='allfriends-second-div'>
               <h2>
                   Name: <Link to={"/friend/" + name + "/" + id} onClick={handleClick}>{name}</Link>
               </h2>
               <p>Email: {email}</p>
               <p>Phone: {phone}</p>
               <p>Website: {website}</p>
           </div>
        </div>
    );
};

export default AllfriendsC;
