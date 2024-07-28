import './App.css';
import Home from './components/homeFolder/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoMatch from './components/noMatchF/NoMatch';
import SingleCountry from './components/countryFolder/SingleCountry';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/name/:countryName' element={<SingleCountry/>}  ></Route>
      <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
