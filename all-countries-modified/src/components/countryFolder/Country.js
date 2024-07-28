import React from 'react';
import './country.css';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, currencies,languages } = props.country;

    return (
        <div className='countryDiv'>
            <h2>{name.common}</h2>
            <p><u>Capital</u>: {capital}</p>
            {currencies && (
                <div>  
                    {Object.entries(currencies).map(([code, { name, symbol }], index) => (
                        <p key={index}>
                            <u>Currency</u>: {name} ({symbol})
                        </p>
                    ))}
                </div>
            )}
            <div>
                <p>Languages:</p>
                <ul>
                    {languages ? 
                        Object.values(languages).map((language, index) => (
                            <li key={index}>{language}</li>
                        ))
                        : <li>No languages available</li>
                    }
                </ul>
            </div>
            <Link to={`/name/${name.common}`}>Show Details</Link>
            <button   onClick={()=>props.handleShowDetails(name.common)} >Show Details</button>
        </div>
    );
};

export default Country;
