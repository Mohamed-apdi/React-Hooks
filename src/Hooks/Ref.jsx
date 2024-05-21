import React, { useEffect, useRef, useState } from 'react'

function Ref() {
  const [count, setCount] = useState(0)

  const render = useRef(0);
  const inputElement = useRef()

  useEffect(() => {
    render.current = render.current + 1;
  })

  const inputClick = () => {
    console.log(inputElement)
    inputElement.current.focus()
  }
  return (
    <>
    <h1>useRef Hook</h1>
    <p>allows us to create multable variables, which will not re-render the componet. <br />
    useRef is also used for accessing DOM elements.
    </p>

    <button onClick={() => setCount((prev) => prev-1)}>-1</button>
    <h1>{count}</h1>
    <button onClick={() => setCount((prev) => prev+1)}>+1</button>
    <p>Render Count: {render.current}</p>

    <p>useRef use DOM element</p>
    <input type="text" ref={inputElement} />
    <button onClick={inputClick}>click here</button>
    </>
)
}

export default Ref