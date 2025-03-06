import { useState } from "react";

const Phone = () => {   
    const [phone, setPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020

    });


const changeColor = () => {
    setPhone({
        ...phone,
        color: "blue"
    });
    
}
    return (
        <div>
            <h1>My {phone.brand} Phone Information</h1>
            <p>its a {phone.color} {phone.model} from {phone.year}</p>
            <button onClick={changeColor}>change Color</button>
        </div>
    );
    }

    export default Phone;