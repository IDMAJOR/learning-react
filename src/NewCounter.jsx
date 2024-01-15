import React, {useState} from "react"

function NewCounter(){

    const [count, setCounter] = useState(0);
    const [birth, setBirth] = useState({year: 2024,
                                        month: "may",
                                        day: 18})  

    function increment(){
        setCounter(c => c + 1);
        setCounter(c => c + 1);
        setCounter(c => c + 1);
    }

    function decreament(){
        setCounter(c => c - 1);
        setCounter(c => c - 1);
        setCounter(c => c - 1);    
    }

    function reset(){
        setCounter(0);
    }

    function handleDayChange(event){
        setBirth( b => ({...b, day: event.target.value}))
    }

    function handleYearChange(event){
        setBirth(b => ({...b, year: event.target.value}))
    }

    function handleMonthChange(event){
        setBirth(b => ({...b, month: event.target.value}))
    }

    return( <>
                <div>
                    <h3>Counter: {count}</h3>
                    <button onClick={decreament}>decrease</button>
                    <button onClick={reset}>reset</button>
                    <button onClick={increment}>increase</button>
                </div>
                <div>
                    <p>Your Birthday is on: {birth.month} {birth.day} {birth.year}</p>
                    <input type="text" value={birth.month} onChange={handleMonthChange}/>
                    <input type="number" value={birth.day} onChange={handleDayChange}/>
                    <input type="number" value={birth.year} onChange={handleYearChange}/>
                </div>
            </>)
}

export default NewCounter