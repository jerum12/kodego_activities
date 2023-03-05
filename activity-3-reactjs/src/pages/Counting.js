import React, { useState } from 'react';


export default function Counting() {

    const [count, setCount] = useState (0)
   

    const decrease = () => {
        setCount((c) => c - 1);
    };

    const increase = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <div className="count-container">
            <h1>Click the Button!</h1>
            <div className="numbers">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
            </div>
            </div>
        </>
    )
}

