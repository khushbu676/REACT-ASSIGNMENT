import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 
  const [position, setPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <h1>Move the Element with Mouse!</h1>
     
      <div
        className="circle"
        style={{
          left: position.x - 50, 
          top: position.y - 50,
        }}
      ></div>
    </div>
  );
}

export default App;
