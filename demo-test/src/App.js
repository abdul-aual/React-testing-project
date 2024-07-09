import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="#"><Link to ='/'>home</Link></a>
          <a href="#"><Link to ='/about'>about</Link></a>
        </nav>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About name="khan saheb" />}/>
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About(props) {
  return <h2>About {props.name} </h2>;
}

export default App;
