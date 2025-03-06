import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car'
import Garage from './components/Garage'

function App() {
  const carinfo = {name: "Ford", model: "Mustang", color: "red"};

  return (
    <>
    <div>
     <Car carInfo={carinfo} />
      <Garage size="small" />
     </div>
    </>
  )
}

export default App
