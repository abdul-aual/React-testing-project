import React from 'react';
import './App.css';
import Man from './Man';
import Home from './Home';
import Name from './Name';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return(
    <div>
      <Router>
      <nav>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/man'>man</Link></li>
          <li><Link to="/name">Name</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/man' element={<Man/>} />
        <Route  path='/' element={<Home/>} />
        <Route  path='/name' element={<Name/>} />
      </Routes>
      </Router>
      
    </div>
  )
}

export default App;
