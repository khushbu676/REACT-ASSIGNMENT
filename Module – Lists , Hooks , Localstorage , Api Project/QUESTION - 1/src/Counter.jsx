import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'
import './App.css'


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
      <div>
        <h1>Counter App</h1>
        <center>
          <h1 >{count}</h1>
        </center>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-success' onClick={increment}>Increment</button>
          <button className='btn btn-danger' onClick={decrement}>Decrement</button>
        </div>
      </div>
      <div className='d-flex' style={{ marginLeft: "20px" }}>
        <img src={logo} alt="Logo" style={{ marginTop: "10px", height: "100px" }} />
      </div>
    </div>
  );
};

export default Counter;