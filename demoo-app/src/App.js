import './App.css';
import React from "react";
import {
   BrowserRouter as Router,
    Routes,
    Route,
    Link 
  } from 'react-router-dom';
function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
  
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>This is home mama</h2>;
  }
  
  function About() {
    return <h2>This is about, lekhar moto about akhono jonmo hoy nai</h2>;
  }
  
  function Users() {
    return (
      <div>
        <p>hello user</p>
        <small>oree user re</small>
      </div>
    )
  }

export default App;
