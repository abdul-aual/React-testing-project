import './App.css';
import {useState} from 'react';

function App() {
  let [count,setC] = useState(0);
  return (
    <div>
      <p>this is testing  {count} </p>
      <button onClick={()=>setC(count++)} >Increase</button>
    </div>
  );
}

export default App;
