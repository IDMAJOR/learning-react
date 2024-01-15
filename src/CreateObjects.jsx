import React, {useState} from 'react'

function CreateObject(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCars(){
        const newCars = {year: carYear,
                         make: carMake,
                         model: carModel}

        setCars(c => [...c, newCars]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCars(index){

        setCars(cars.filter((_, i) => i !== index ))
    }

    function handleMakeChange(event){
        setCarMake(event.target.value)
    }

    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    function handleYearChange(event){
        setCarYear(event.target.value)
    }


    return( <>
                <div>
                    <h1>List of Cars</h1>
                    <ul>
                        {cars.map((car, index) => <li onClick={() => handleRemoveCars(index)} key={index}>
                                                    {car.year} {car.make} {car.model}
                                                 </li>)}
                    </ul>

                    <input type="number" onChange={handleYearChange} value={carYear}/> <br />
                    <input type="text" onChange={handleMakeChange} placeholder='Enter car Make' value={carMake}/> <br />
                    <input type="text" onChange={handleModelChange} placeholder='ENter car Model' value={carModel}/> <br />
                    <button onClick={handleAddCars}>Add car</button>
                </div>
            </>)
}

export default CreateObject