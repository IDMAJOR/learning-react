import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
    }

    const decrement = ()=>{
        setCount(count - 1);
    }

    const reset = ()=>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-dom">{count}</p>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increase</button>
        </div>
    )
}
export default Counter