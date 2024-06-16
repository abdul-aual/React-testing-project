import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './Components/countryFolder/Country';



function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>(setCountries(data)))
  },[])
  const handleAddCountry= ()=>{
    console.log('click marse');
  }
  return (
    <div>
      <h1>country Loaded = {countries.length}</h1>
      {
        countries.map(country=><Country country={country} handleAddCountry={handleAddCountry} ></Country>)
      }
      
    </div>
  );
}

export default App;
