import React, { useEffect, useState } from 'react';
import AllfriendsC from './AllfriendsC';

const Allfriends = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch users'); 
                }
                return res.json(); 
            })
            .then(data => {
                setUser(data); 
                setLoading(false); 
            })
            .catch(error => {
                setError(error.message); 
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>; 
    }
    if (error) {
        return <p>{error}</p>; 
    }

    return (
        <div>
            {
                user.map((datum, index) => 
                    <AllfriendsC alluser={datum} key={index} /> 
                )
            }
        </div>
    );
};

export default Allfriends;
