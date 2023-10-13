// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)

import { useState, useEffect } from "react";


function Useffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0)
    useEffect(()=>{
        setCalculation(() => count*2)
    }, [count])
    return (
        <>
        <p>Count:{count}</p>
        <button type= 'button' onClick={() => setCount((c) => c+1)}>+</button>
        <p>Calculation : {calculation}</p>
        </>
    )
}

export default Useffect;