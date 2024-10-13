import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AllfriendsC from './AllfriendsC';

const Allfriends = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch('error cating file')
    }, [])
    return (
        <div>
            {
                user.map((datum, index) =>
                    <AllfriendsC  alluser={datum} key={index}></AllfriendsC>
                )
            }
        </div>
    );
};

export default Allfriends;