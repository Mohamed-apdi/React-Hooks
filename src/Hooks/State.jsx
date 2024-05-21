import React, { useState } from 'react'

function State() {
  const [car, setCar] = useState({
    brand:"BMW M4",
    model: 'Roma',
    color: 'black',
    year: '2020'
  });

  
  const colorChange = () => {
    setCar({...car, color: 'yellow'});
  }

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    //setCount(count + 1); // one
    setCount((prev) => prev + 1); // two
  }

  const clearCount = () => {
    setCount(0);
  }

  return (
    <>
    <h1>useState Hook</h1>
      <h1>my {car.brand}</h1>
      <h2>it is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={colorChange}>change car color</button>
      <h1>count: {count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={clearCount}>clear count</button>
    </>
  )
}

export default State