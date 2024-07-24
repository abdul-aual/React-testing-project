import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/headerFolder/Header';
import Home from './Components/homeFolder/Home';
import Shop from './Components/shopFolder/Shop';
import OrderM from './Components/OrderManageF/OrderM';
import ProductDetails from './Components/singleProFolder/ProductDetails';
import Thank from './Components/thankFolder/Thank';


function App() {
  return(
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop'  element={<Shop/>} />
            <Route path='/order' element={<OrderM/>}  />
            <Route path='/product/:productKey'  element={<ProductDetails/>} ></Route>
            <Route path='/thank' element={<Thank/>} ></Route>
          </Routes>
        </Router>
      
    </div>
  )
}

export default App;
