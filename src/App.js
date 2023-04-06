import './App.css';
import { useState } from "react"

//useState Hook - Text Color Change

function App() {
  const [textColor, setTextColor] = useState("black")

  return (
    <div className='App'>
      <button onClick={() => {
        setTextColor(textColor === "black" ? "red" : "black")
      }}
      >
        Show/Hide
      </button>
      <h1 style={{ color: textColor }}>Hey, how are you</h1>
    </div>
  )
}
export default App;