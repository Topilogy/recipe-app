import { useState } from "react";
import React from "react";

// Task 1 - Clicking counting buttons

function App() {
  const value = localStorage.getItem('num')
  const [number, setNumber] = useState(value ? JSON.parse(value) : 0);
  
  return (
    <div className="App">
      <button onClick={() => {
          setNumber(number + 1);
          localStorage.setItem('num', JSON.stringify(number+1))
        }}
      > Click button
      </button>
      <p>Number of clicks: {number}</p> 
    </div>
  );
};

export default App;