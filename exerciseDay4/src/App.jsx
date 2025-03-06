import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car'
import Garage from './components/Garage'
import Events from './components/Events'

function App() {
  // const carinfo = {name: "Ford", model: "Mustang", color: "red"};

  return (
    <>
    <div>
     {/* <Car carInfo={carinfo} />
      <Garage size="small" /> */}
      <h1>Welcom to the Events page</h1>
      <Events/>
     </div>
    </>
  )
}

export default App
