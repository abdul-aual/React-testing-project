import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import data from './fakeDataFolder/data.json';
import User from './Components/userFolder/User';
function App() {

  return (
    <div>
     {
      data.map(datum=>
      <User alldata={datum}></User>
      )
     }
    </div>
  );
}

export default App;
