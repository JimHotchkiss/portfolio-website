import './App.css';
import { useState } from 'react';
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import ProjectCard from './components/projects/ProjectCard';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isButton, setIsButton] = useState(false)

  const handleBtn = () => {
      setIsButton(!isButton)
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <>
      <Hero 
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
      <Projects 
        isButton={isButton}
        handleBtn={handleBtn}
        darkMode={darkMode}/>
        {isButton && <ProjectCard /> }
      
    </>
  );
}

export default App;
