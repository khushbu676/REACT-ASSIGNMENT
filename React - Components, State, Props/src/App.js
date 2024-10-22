import React from 'react';
import './App.css'; // Make sure you use this file for styling

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>React JS</h1>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          alt="React Logo" 
          className="react-logo"
        />
      </div>
      <div className="hello-world">
        Hello World
      </div>
    </div>
  );
}

export default App;
