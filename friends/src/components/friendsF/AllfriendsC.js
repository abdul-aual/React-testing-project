import React from 'react';

const AllfriendsC = (props) => {
    const {name,id,email} = props.alluser;
    return (
        <div>
           <p>id: {id}</p>
           <p>name: {name}</p>
           <p>mail: {email}</p> 
        </div>
    );
};

export default AllfriendsC;