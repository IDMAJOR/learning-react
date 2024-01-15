import React, {useState, useEffect} from "react"

function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `count: ${count}`
    })

    function addCount(){
        setCount(c => c + 1);
    }

    function SubstractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor( color === "green" ? "red" : "green")
    }

    return( <>
                <div>
                    <h1>count: {count}</h1>
                    <button onClick={SubstractCount}>Substract</button>
                    <button onClick={addCount}>Add count</button>
                    <button onClick={changeColor}>Change Color</button>
                </div>
            </>)
}

export default UseEffect