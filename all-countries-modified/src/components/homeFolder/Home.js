import React, { useEffect, useState } from 'react';
import Country from '../countryFolder/Country';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    const handleShowDetails =(countryName)=>{
        navigate(`/name/${countryName}`);
    }
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCart(data))
    },[])
    return (
        <div>
            {
                cart.map((datum,index)=> <Country key={index} country={datum}   handleShowDetails={handleShowDetails} ></Country>)
            }
        </div>
    );
};

export default Home;