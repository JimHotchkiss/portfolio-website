import './App.css';
import { useState } from 'react';
import data from './data/projectData.json'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import ProjectCard from './components/projects/ProjectCard';
import About from './components/about/About';
import Resume from './components/resume/Resume'
import Footer from './components/common/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isOneBtn, setIsOneBtn] = useState(false)
  const [isTwoBtn, setIsTwoBtn] = useState(false)
  const [isThreeBtn, setIsThreeBtn] = useState(false)
  const [isFourBtn, setIsFourBtn] = useState(false)
  const [dataId, setDataId] = useState('')
  const [projectsData, setProjectsData] = useState(data)
  const [showResume, setShowResume] = useState(false)
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
    window.scrollTo({
      top: 500,
      left: 100,
      behavior: 'smooth'
    });
  }
  const handleBtn = (dataId) => {
    resetBtns(dataId)     
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleResume = () => {
    setShowResume(!showResume)
  }
  return (
    <div className=''>
       {console.log(currentBtn, darkMode)}
      <Hero 
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
      <div className={darkMode ? 'bg-gray-100' : 'bg-secondary'}>
        <About 
          handleResume={handleResume}
          darkMode={darkMode}/>
        <Resume
          showResume={showResume}
          handleResume={handleResume} />
        <div className=''>
          <Projects 
            isOneBtn={isOneBtn}
            isTwoBtn={isTwoBtn}
            isThreeBtn={isThreeBtn}
            isFourBtn={isFourBtn}
            handleBtn={handleBtn}
            darkMode={darkMode}/>
            {currentBtn === "" ? null : <ProjectCard dataId={dataId} projectsData={projectsData} darkMode={darkMode}/> }
        </div>
        <Footer darkMode={darkMode}/>
      </div>    
    </div>
  );
}

export default App;
