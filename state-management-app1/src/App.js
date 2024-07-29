import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Shippment from './components/Shippment';
import Home from './components/Home';
import { useState } from 'react';
function App() {
  const [count,setCount] = useState(0);
  return (
    <div>
      <Header  count={count} setCount={setCount} ></Header>
      <Home gonona={count} ></Home>
      <Shippment></Shippment>
      
    </div>
  );
}

export default App;
