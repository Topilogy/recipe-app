import './App.css';
import { useState } from "react"

//useState Hook - Input Text

function App() {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className='App'>
      <input type="text" onChange={handleChange} />
      {inputValue}
    </div>
  )
}
export default App;