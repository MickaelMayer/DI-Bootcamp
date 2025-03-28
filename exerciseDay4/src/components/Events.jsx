import { useState } from "react";

const Events = () => {
    const clickMe = () => {
        alert('I was clicked')  
    }
const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        alert(`you entered: ${e.target.value}`)
    }
}
const [isToggleOn, setIsToggleOn] = useState(true)
const toggleState = () => {
    setIsToggleOn(!isToggleOn)
}
    return (
        <div>
            <button onClick={clickMe}>Click Me</button>
            <input type="text" onKeyDown={handleKeyDown} />
            <button onClick={toggleState}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    )
}

export default Events