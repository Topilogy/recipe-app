import './App.css';
import { useState } from "react"

//useState Hook

function App() {
  const [age, setAge] = useState(0)

  const increaseAge = () => {
    setAge(age + 1)
  }

  const decreaseAge = () => {
    setAge(age - 1)
  }

  const zero = () => {
    setAge(0)
  }

  return (
    <div className='App'>
      {age}
      <button onClick={increaseAge}>Increage Age</button>
      <button onClick={decreaseAge}>Decreage Age</button>
      <button onClick={zero}>Set to zero</button>
    </div>
  )
}
export default App;