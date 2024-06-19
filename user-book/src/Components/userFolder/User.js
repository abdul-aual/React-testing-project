import React from 'react';
import user from './user.css';

const User = (props) => {
const {id,name,image,salary,email,phone}=props.alldata;

    return (
        <div>
            <div className='image-and-details-container'>
                    <div className='hello'>
                        <div className='image-div'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className='hello2'>
                        <div className='details-div'>
                            <h2>{name}</h2>
                            <p>Phone: {phone}</p>
                            <p>Email: {email}</p>
                            <h4>Salary: {salary}</h4>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default User;