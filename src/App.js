import './App.css';
import { useEffect, useState } from 'react';
import data from './data/projectData.json'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import ProjectCard from './components/projects/ProjectCard';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isReactBtn, setIsReactBtn] = useState(false)
  const [isRubyBtn, setIsRubyBtn] = useState(false)
  const [isJsBtn, setIsJsBtn] = useState(false)
  const [isHtmlBtn, setIsHtmlBtn] = useState(false)
  const [projectsData, setProjectsData] = useState({})
  const [dataId, setDataId] = useState('')

  useEffect(() => {
    setProjectsData(data)
  })

  const resetBtns = (dataId) =>{
    setDataId(dataId)
    setIsReactBtn(false)
    setIsRubyBtn(false)
    setIsJsBtn(false)
    setIsHtmlBtn(false)
    setBtn(dataId)
  }

  const setBtn = (dataId) => {
    if(dataId === 'react') {
      setIsReactBtn(!isReactBtn)
    } else if (dataId === 'ruby') {
      setIsRubyBtn(!isRubyBtn)
    } else if (dataId === 'js') {
      setIsJsBtn(!isJsBtn)
    } else {
      setIsHtmlBtn(!isHtmlBtn)
    }
  }
  const handleBtn = (dataId) => {
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
      <Projects 
        isReactBtn={isReactBtn}
        isRubyBtn={isRubyBtn}
        isJsBtn={isJsBtn}
        isHtmlBtn={isHtmlBtn}
        handleBtn={handleBtn}
        darkMode={darkMode}/>
        {isReactBtn && <ProjectCard dataId={dataId} projectsData={projectsData}/> }
      
    </>
  );
}

export default App;
