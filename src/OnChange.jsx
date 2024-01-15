import React, {useState} from "react"

function OnChange(){

    const [name, setName] = useState("Guest");
    const [amount, setAmount] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleOnChange = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeAmount = (event) => {
        setAmount(event.target.value);
    }

    const handleOnChangeComment = (event) => {
        setComment(event.target.value);
    }
    
    const handleOnChangePayment = (event) => {
        setPayment(event.target.value);
    }

    function handleOnChangeShipping(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleOnChange} />
            <p>Name: {name}</p>

            <input type="number" value={amount} onChange={handleOnChangeAmount} />
            <p>Name: {amount}</p>

            <textarea placeholder="please drop info" value={comment} onChange={handleOnChangeComment} />
            <p>Info: {comment}</p>

            <select value={payment} onChange={handleOnChangePayment}>
                <option value="">Select a payment method</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
            <input 
                type="radio" 
                value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleOnChangeShipping}
            />
            Pick Up
            </label>

            <label>
            <input 
                type="radio" 
                value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleOnChangeShipping}
            />
            Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default OnChange