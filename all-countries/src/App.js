import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './Components/countryFolder/Country';
import Cart from './Components/cartFolder/Cart';



function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>(setCountries(data)))
  },[])
  const handleAddCountry= (country)=>{
    const newCart =[...cart, country];
    setCart(newCart);
  }
  const divStyle={textAlign:'center'};
  return (
    <div style={divStyle}>
      <h1>Total Country = {countries.length}</h1>
      <Cart cart={cart}></Cart>
      {
        countries.map(country=><Country country={country} handleAddCountry={handleAddCountry} ></Country>)
      }
      
    </div>
  );
}

export default App;
