import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  
  const [food, setFood] = useState("pizza")
  const [userFood, setUserFood] = useState("")
  const handleFood = (e) =>
  {
    e.preventDefault()
    setUserFood(e.target.value)
  }
  return (
    <div className="App">
     <h1>hello react</h1>
     <h2>I love to eat {food}</h2>
     
     <input onChange={handleFood}></input>
     <button onClick = { ()=>
     {console.log("button clicked")
      setFood(userFood)
     }}>click me</button>
    
    </div>
  );
}

export default App;
