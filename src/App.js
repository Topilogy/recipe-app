import './App.css';
import { useState } from "react"

function App() {
  const [textColor, setTextColor] = useState("");

  return (
    <div className="App">
      <button onClick = { () => {
        setTextColor(textColor === "black" ? "red" : "black")
        }}
      > 
        Show/Hide 
      </button>
      <h1 style = {{ color: textColor }}>HELLO, MY NAME IS TEMITOPE</h1>;
    </div>
  )
}

export default App;