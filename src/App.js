import './App.css';
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(10);
  const increase=()=>{
    setCount((preValue)=>preValue +1);
  }
  const decrease = ()=>{
    setCount((preValue)=>preValue -1);
  }
  const reset=()=>{
    setCount(0);
  }
  
  return (

    <div>
      <h1>
        {count}
      </h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>0</button>

    </div>
   
  );
}

export default App;
