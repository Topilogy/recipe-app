import './App.css';
import { useState } from "react"

//useState Hook - Show and Hide Text

function App() {
  const [showText, setShowText] = useState("true")

  return (
    <div className='App'>
      <button onClick={() => {
        setShowText(!showText)
      }}
      >
        Show/Hide
      </button>
      {showText &&<h1>Hey, how are you</h1>}
    </div>
  )
}
export default App;