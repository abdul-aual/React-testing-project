import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Shippment from './components/Shippment';
import Home from './components/Home';
import { createContext, useState } from 'react';
export const context = createContext();
function App() {
  const [count,setCount] = useState(0);
  
  return (
    <context.Provider   value={count} >
      <Header  count={count} setCount={setCount} ></Header>
      <Home gonona={count} ></Home>
      <Shippment></Shippment>
      
    </context.Provider>
  );
}

export default App;
