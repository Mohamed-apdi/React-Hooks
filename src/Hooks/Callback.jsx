import React, { useCallback, useState } from 'react'
import Header from '../components/Header'

function Callback() {
    const [counter, setCounter] = useState(0)

    const fn = useCallback(() => {},[])
  return (
<>

    <h1>useCallback Hook</h1>
    <p>is a hook that lets you cache a function definition btwn re-render </p>
    <Header fun={fn}/>
    <p>{counter}</p>
    <button onClick={() => setCounter((prev) => prev +1)}>click</button>
</>
)
}

export default Callback