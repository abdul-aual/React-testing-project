import React, { useEffect, useState } from 'react';
import VisitedFChild from './VisitedFChild';

const VisitedF = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // Retrieve the data from local storage
        const storedFriends = JSON.parse(localStorage.getItem('ClickedFriends')) || [];
        setFriends(storedFriends);
    }, []);

    return (
        <div>
            {friends.length > 0 ? (
                friends.map((friend, index) => (
                    <VisitedFChild  friend={friend} key={index} ></VisitedFChild>
                ))
            ) : (
                <p>No friends visited yet.</p>
            )}
        </div>
    );
};

export default VisitedF;
