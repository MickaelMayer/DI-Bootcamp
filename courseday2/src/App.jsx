import { use } from 'react'
import './App.css'
// import User from './components/User'
import Button from './components/Button'
import { useState } from 'react'

function App() {

  // let count = 0
  const [count, setCount] = useState(0)


  

  const addOne = () => {
    // count = count + 1
    // console.log(count)
    setCount(count + 1)
  }
  
  // const handleClick = () => {
  //   alert('Button clicked')
  // }

  // const hanleChange = (e) => {
  //   console.log(e.target.value)
  // }

  return (
    <>
   {/* <h2>React: day2 </h2>
   <button onClick={handleClick}>Button</button>
   <input onChange={hanleChange} />
    {/* <User /> */}

    {/* <Button myclick = {handleClick} /> */}



    <h2>{count}</h2>
    <button onClick={addOne}> +1 </button>
    </>
  )
}

export default App
