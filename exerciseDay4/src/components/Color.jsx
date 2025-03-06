import { useState, useEffect, use } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  
  useEffect(() => { 
    alert('use effect called');
  }
  , [favoriteColor]);

  const changeColor = () => {
    setFavoriteColor("blue");
  }
  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );

}

export default Color;