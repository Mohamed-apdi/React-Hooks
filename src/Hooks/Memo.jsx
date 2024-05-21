import React, { useMemo, useState } from 'react'

function Memo() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubNum(num) {
        console.log("calculation done!");
        return Math.pow(num,3);
    }
    const result = useMemo(() => cubNum(number),[number]);

  return (
    <>
    <h1>useMemo Hook</h1>
    <p>return a memorized value. <br /> like cashing a value so that it doesn&lsquo;t need to be recalculated. </p>
    <input type="number" onChange={(e)=>{setNumber(e.target.value)}}/>
    <h1>Cube of the Number: {result}</h1>
    <button onClick={() => setCounter(counter+1)}>counter++</button>
    <h1>Counter: {counter}</h1>
    </>
)
}

export default Memo