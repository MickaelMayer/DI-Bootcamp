import { useState } from "react";   

const Car = ({carInfo}) => {

    const [color, setColor] = useState(carInfo.color);





  return (
    <div>
      <h1>The car model is {carInfo.model}</h1>
      <h2>The car color is {color}</h2>
      <button onClick={()=>setColor("blue")}>Change the color</button>
    </div>
  );
}

export default Car;