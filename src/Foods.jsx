import React, {useState} from "react"

function Foods(){

    const [foods, setFood] = useState(["Apple", "pigmeats", " tomatos"]);

    function handleAddFood(){

        const newFood = document.getElementById("newFood").value;
        document.getElementById("newFood").value = "";
        setFood(f => [...f, newFood])
        
    }

    function handleRemoveFood(index){

        setFood(foods.filter((_, i) => i !== index))
    }

    return (<>
                <div>
                    <h2>List of food</h2>
                    <ul>
                        {foods.map((food, index) => <li key={index} className="lis" onClick={() => handleRemoveFood(index)}>
                                                        {food}
                                                    </li>)}
                    </ul>
                    <input type="text" id="newFood" placeholder="Enter new item"/>
                    <button onClick={handleAddFood}>Add item</button>
                </div>
            </>)
}

export default Foods