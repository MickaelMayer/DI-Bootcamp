// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import Mycomp from './components/Mycomp'
import List from './components/List'
import Person from './components/person'


function App() {
  
  // const isLogin = true

  // let content;

  // if (isLogin) {
  //   content = <Mycomp/>
  // }else {
  //   content = <Hello/>
  // }
  // if (isLogin) {
  //   return (
  //     <div>
  //       <Mycomp/>
      
  //     </div>
  //   )
  // }
  // return (
  //   {<>
  //     <Hello/>
  //   </>}
//   return <>
//   {content}
// </>

// return (
//   <>
//   <List/>
//   </>
// )

return (
  <>
  <Person name = "John" email = 'hf@gmail.com' list = {[1,2,3,]}/>
  <Person name = 'david' email = 'david@hmail.com'list = {[]}/>
  </>
)
}

export default App
