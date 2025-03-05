import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFavoriteAnimals from './components/UserFavoriteAnimals'
import Exercise from './components/Exercise3'


// function App() {
//   const myelement = <h1>I Love JSX!</h1>;
//   const sum = 5 + 5;
//   const myelement2 = <h1>The sum of 5 + 5 is {sum}</h1>;
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals : ['Horse','Turtle','Elephant','Monkey']
//   };

function App() {
  return (
    <>
      <Exercise />
    </>
  )

  

  return (
    <>
     <p>Hello World!</p>
     {myelement}
     {myelement2}
      <h3>My name is {user.firstName} {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </>
  )
}

export default App
