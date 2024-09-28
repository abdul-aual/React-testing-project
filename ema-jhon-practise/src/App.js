import './App.css';
import Header from './Components/HeaderF/Header';
import Navbar from './Components/navF/Navbar';
import Shoph from './Components/shopF/Shoph';
import OrderL from './Components/OrderF/OrderL';
import Manage from './Components/manage/Manage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      <Navbar></Navbar>
        <Routes>
          <Route path='/shop'  element={<Shoph/>} ></Route>
          <Route path='/order' element={<OrderL/>}  ></Route>
          <Route path='/manage' element={<Manage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
