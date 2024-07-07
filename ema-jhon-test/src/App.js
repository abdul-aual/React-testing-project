import './App.css';
import Header from './Components/headerFolder/Header';
import Shop from './Components/shopFolder/Shop';
import Inventory from './Components/inventoryFolder/Inventory';
import Review from './Components/reviewFolder/Review';
import NotFound from './Components/notFound/NotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PdDetails from './Components/pdDetailsFolder/PdDetails';
function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/shop' element={<Shop></Shop>} />
          <Route path='/review' element={<Review></Review>} />
          <Route path='/inventory' element={<Inventory></Inventory>} />
          <Route exact path='/' element={<Shop></Shop>}></Route>
          <Route path='/product/:productKey' element={<PdDetails></PdDetails>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>
      </Router>    
    </div>
  );
}

export default App;
