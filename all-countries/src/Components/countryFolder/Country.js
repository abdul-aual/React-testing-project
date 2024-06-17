import React from 'react';
import country from './country.css';

const Country = (props) => {
    const{name,population,region,flags}=props.country;
    const flagStyle={height:'80px'}
    // const handleAddCountry = props.handleAddCountry;
    return (
        <div className='maindiv'>
            <h2>{name.common}</h2>
            <p>Population: {population}</p>
            <small>Region: {region}</small> 
            <p><img style={flagStyle} src={flags.png} alt="" /></p> 
            <button onClick={()=>props.handleAddCountry(props.country)} >add country</button>          
            

        </div>
    );
};

export default Country;