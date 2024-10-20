import './App.css';
import Navbar from './components/headerF/Navbar';
import Header from './components/headerF/Header';
import Allfriends from './components/friendsF/Allfriends';
import VisitedF from './components/friendsF/VisitedF';
import CurrentF from './components/friendsF/CurrentF';
import NoMatch from './components/friendsF/NoMatch';
import CurrentFtwo from './components/friendsF/CurrentFtwo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/allfriends' element={<Allfriends/>}></Route>
          <Route path='/visited' element={<VisitedF/>}> </Route>
          <Route path='/friend/:name/:id' element={<CurrentF/>}> </Route>
          <Route path='/currentFT' element={<CurrentFtwo/>} ></Route>
          <Route path='*' element={<NoMatch/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
