import React from 'react';

const CurrentFtwo = () => {
    const bal = JSON.parse(localStorage.getItem('currentClickedFriend'));

    // Safely access the `id` from the object if it exists
    const id = bal?.id; // Optional chaining to avoid errors if bal is null

    return (
        <div>
            {
                bal ? (
                    <p>Current Friend ID: {id}</p> // Display the ID if bal exists
                ) : (
                    <p>No current friend is available now</p> // Message if bal is null
                )
            }
        </div>
    );
};

export default CurrentFtwo;
