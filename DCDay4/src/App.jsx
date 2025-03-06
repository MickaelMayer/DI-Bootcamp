import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

   
  const voteForLanguage = (index) => {
      const newLanguages = [...languages];
      newLanguages[index].votes+=1;
      setLanguages(newLanguages);
    }


  return (
    <>
    <h1>Vote for you favorite language</h1>
    {languages.map((language, index) => (
      <p key={index}>
        {language.name}:{language.votes} votes 
        <button onClick={()=> voteForLanguage(index)}> Vote</button>
        </p>
    ))}

      
    </>
  )
}

export default App
