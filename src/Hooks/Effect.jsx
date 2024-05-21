import React, { useEffect, useState } from 'react'

function Effect() {

    const [count, setCount] = useState(0);
    // use Effect wuxu qata 2 paramert midka 1 waa callback function midka 2 waa dependece kan waa option 
    useEffect(()=> {
        setTimeout(() => {
            setCount(count => count + 1);
        },2000)
    },[count]) // hadaa dependence siyo empty arrey [] means waxaa callback excute garesaa 1 time, but when i put count the dependence waxaa excute garesa markasta oo count wax laga badalo
    
  return (
    <>
    <h1>useEffect Hook</h1>
    <p>Allows you to perform side effects in your components.</p>
    <p>examples:<br /> -fetching data from api <br /> -directly updating DOM <br /> -Timer like setTimeout and setInterval</p>

    <h1>I&apos;ve rendered {count} times!</h1>
    </>
    )
}

export default Effect