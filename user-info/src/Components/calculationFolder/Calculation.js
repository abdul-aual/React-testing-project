import React from 'react';
import calculation from './calculation.css';
const Calculation = (props) => {
    const{id,name,image,phone,email,salary} = props.allDetails;
    return (
        <div>
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
                            <h4>Salary: ${salary}</h4>
                            <button onClick={()=>props.handleAddCart(props.allDetails)} >Add User</button>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Calculation;