import React, { useState } from 'react'

const Reducer = () => {
    const [count, setCount] = useState(0)
  return (
    <>
       <h1>useReducer Hook</h1>
       <p>is a similar to useState, But instead of Providing state & setter function, it provides state and dispatch function</p>

       <h1>Count: {count}</h1>
       <button onClick={() => setCount((prov) => prov + 1)}>increase</button>
       <button onClick={() => setCount((prov) => prov - 1)}>decrease</button>
    </>
  )
}

export default Reducer