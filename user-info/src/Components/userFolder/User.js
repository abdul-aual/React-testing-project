import React, { useState } from 'react';
import data from '../../fakeDataFolder/data.json';
import Calculation from '../calculationFolder/Calculation';
const User = () => {
    const [cartCount, setCartCount]= useState(0);
    const [totalSalary, setTotalSalary]=useState(0);
    const divStyle={height:'100px', width:'900px', textAlign:'center', margin:'0 auto', position:'sticky',top:'5px', backgroundColor:'#0082c6', color:'yellow', padding:'1px'};
    const handleAddCart=(received)=>{
        setCartCount(cartCount+1);
        setTotalSalary(totalSalary+received.salary);
    };
    return (
        <div>
            <div style={divStyle}>
                <h5>people added: {cartCount} </h5>
                <h2>Total Salary: ${totalSalary}</h2>
            </div>
            {
                data.map(datum=><Calculation allDetails={datum} handleAddCart={handleAddCart} ></Calculation>)
            }
        </div>
    );
};

export default User;