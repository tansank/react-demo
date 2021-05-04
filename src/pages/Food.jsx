
import React, {useState} from 'react';

const Food = () => 
{
    const [food, setFood] = useState("pizza")
  const [userFood, setUserFood] = useState("")
  const handleFood = (e) =>
  {
    e.preventDefault()
    setUserFood(e.target.value)
  }
    return (
        <div className='Food'>
        <h1>Implement Food</h1>
        <h1>hello react</h1>
     <h2>I love to eat {food}</h2>
     
     <input onChange={handleFood}></input>
     <button onClick = { ()=>
     {console.log("button clicked")
      setFood(userFood)
     }}>click me</button>
        </div>
    )
}

export default Food;
