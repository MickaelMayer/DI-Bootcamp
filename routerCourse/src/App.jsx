import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css'

const Project = () => {
  let {name} = useParams()
  return <h1>Project: {name}</h1>
}

const App = () => (
  <Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/project/javascript">JS Project</Link></li>
      <li><Link to="/project/react">React Project</Link></li>
    </ul>
    
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/project/:name" element={<Project />} />
    </Routes>
  </div>
  </Router>
);

// const Home = () => <h1>HomePage</h1>
// const About = () => <h1>AboutPage</h1>
// const Projects = () => <h1>ProjectsPage</h1>

// const App = () => {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="about">About</Link>
//         <Link to="projects">Projects</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="projects" element={<Projects />} />
//       </Routes>
//     </div>
//   )
// }


export default App
