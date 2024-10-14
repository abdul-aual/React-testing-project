import React from 'react';
import './allfriendsC.css';
import { Link} from 'react-router-dom';

const AllfriendsC = (props) => {
    const {name,phone,website,email,id} = props.alluser;
    return (
        <div className='allfriends-main-div'>
           <div className='allfriends-second-div'>
           <h2>Name: <Link to={"/friend/"+name+"/" +id}>{name}</Link> </h2>
           <p>Email: {email}</p>
           <p>Phone: {phone}</p>
           <p>Website: {website} </p>
           </div>
        </div>
    );
};

export default AllfriendsC;