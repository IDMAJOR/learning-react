
import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [employed, setEmployed] = useState(false)
    const [color, setColor] = useState("#ffffff")

    const updateName = ()=>{
        setName("Bro")
    }

    const updateAge = ()=>{
        setAge(age + 1)
    }

    const toggle = ()=>{
        setEmployed(!employed)
    }

    function colorUpdater(event){
        setColor(event.target.value)
    }

    return( 
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Update Name</button>

                <p>Age: {age}</p>
                <button onClick={updateAge}>Update Age</button>

                <p>Employed?: {employed ? "Yes" : "No"}</p>
                <button onClick={toggle}>{employed ? "No?" : "Yes?"}</button>
            </div>
            <div className="color-picker-container">
                <h1>Color  Picker</h1>
                <div className="color-picker" style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a Color</label>
                <input type="color" value={color} onChange={colorUpdater}/>
            </div>
        </>
    )
}

export default MyComponent