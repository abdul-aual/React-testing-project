import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleCountry = () => {
    const { countryName } = useParams(); // Get the country name from the URL params
    const [country, setCountry] = useState(null); // Initial state for country data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle error state

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.status === 404) {
                    setError('Country not found'); // Handle case where country is not found
                } else {
                    setCountry(data[0]); // Set country to the first item in the fetched array
                }
                setLoading(false); // Set loading to false after fetching data
            })
            .catch(error => {
                setError('Error fetching data'); // Handle fetch error
                setLoading(false); // Set loading to false after error
            });
    }, [countryName]); // Dependency array includes countryName to refetch data if it changes

    if (loading) {
        return <p>Loading...</p>; // Display loading message while data is being fetched
    }

    if (error) {
        return <p>{error}</p>; // Display error message if there's an error
    }

    if (!country) {
        return <p>No country data available</p>; // Display message if no country data is available
    }

    const { name, population, capital, flags, unMember, independent,timezones,continents,region,subregion,languages} = country; // Destructure the necessary properties from the country object

    return (
        <div style={{ margin: '30px', padding: '30px' }}>
            <img style={{ height: '50px' }} src={flags.png} alt="flag" /> 
            <h1>{name?.common}</h1> 
            <h5>Capital: {capital}</h5>
            <p>Official Name: {name?.official}</p> 
            <p>Population: {population}</p> 
            <p>Independent Status: {independent ? 'Yes' : 'No'}</p> 
            <p>UN Member Status: {unMember ? 'Yes' : 'No'}</p> 
            <p>UN Member Status: {unMember.toString()}</p> 
            <p>Region: {region}</p>
            <p>Sub-Region: {subregion}</p>
            <p>Continents: {continents}</p>
            <p>timezones: {timezones}</p>
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
    );
};

export default SingleCountry;
