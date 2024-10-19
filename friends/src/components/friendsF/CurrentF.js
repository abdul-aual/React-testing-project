import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './friendDetails.css';

const CurrentF = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const friendDetails = data.find(fid => fid.id === Number(id)); // Convert id to number
                setFriend(friendDetails);
            })
    }, [id]);

    return (
        <div>
            {friend ? (
                <div className='friend-details'> 
                    <p>id: {friend.id}</p>
                    <p>Name: {friend.name}</p>
                    <p>User-Name: {friend.username}</p>
                    <p>Email: {friend.email}</p>
                    <p>Phone: {friend.phone}</p>
                    <p>Website: {friend.website}</p>
                    <p>Company: {friend.company.name}</p>
                </div>
            ) : (
                <p>Loading friend details...</p>
            )}
        </div>
    );
};

export default CurrentF;
