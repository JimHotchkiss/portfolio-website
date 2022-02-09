import './App.css';
import { useState } from 'react';
import data from './data/projectData.json'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import ProjectCard from './components/projects/ProjectCard';
import About from './components/about/About';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isOneBtn, setIsOneBtn] = useState(false)
  const [isTwoBtn, setIsTwoBtn] = useState(false)
  const [isThreeBtn, setIsThreeBtn] = useState(false)
  const [isFourBtn, setIsFourBtn] = useState(false)
  const [dataId, setDataId] = useState('')
  const [projectsData, setProjectsData] = useState(data)
  const [currentBtn, setCurrentBtn] = useState('')
  // const [btnToggle, setBtnToggle] = useState(false)
  
  const resetBtns = (dataId) =>{
    if(dataId === currentBtn) {
      setCurrentBtn("")
    } else {
      setCurrentBtn(dataId)
    }
    setDataId(dataId)
    setIsOneBtn(false)
    setIsTwoBtn(false)
    setIsThreeBtn(false)
    setIsFourBtn(false)
    setBtn(dataId)
  }

  const setBtn = (dataId) => {
    if(dataId === 'one') {
      setIsOneBtn(!isOneBtn)
    } else if (dataId === 'two') {
      setIsTwoBtn(!isTwoBtn)
    } else if (dataId === 'three') {
      setIsThreeBtn(!isThreeBtn)
    } else {
      setIsFourBtn(!isFourBtn)
    }
  }
  const handleBtn = (dataId) => {
    // setBtnToggle(!btnToggle)
    resetBtns(dataId)     
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
      <div className="lg:flex container">
        <Projects 
          isOneBtn={isOneBtn}
          isTwoBtn={isTwoBtn}
          isThreeBtn={isThreeBtn}
          isFourBtn={isFourBtn}
          handleBtn={handleBtn}
          darkMode={darkMode}/>
          {currentBtn === "" ? null : <ProjectCard dataId={dataId} projectsData={projectsData}/> }
        <About />
      </div>    
    </>
  );
}

export default App;
