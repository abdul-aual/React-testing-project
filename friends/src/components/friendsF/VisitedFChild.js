import React from 'react';
import './visitefFChild.css';

const VisitedFChild = (props) => {
    const { name, phone } = props.friend;
    return (
        <div className='visited-friend-child-main-div'>
            <div className='visited-friend-child-second-div'>
                <h1>Name: {name}</h1>
                <p>Phone: {phone}</p>
            </div>
        </div>
    );
};

export default VisitedFChild;