import React from 'react';
import Button from '../common/Button'
import { SiReact, SiJavascript, SiHtml5 } from "react-icons/si"
import { DiRuby } from "react-icons/di"


const Projects = ({ darkMode, handleBtn, isReactBtn, isRubyBtn, isJsBtn, isHtmlBtn }) => {

    const siReact = <SiReact size={30}/>
    const diRuby = <DiRuby size={30} />
    const siJS = <SiJavascript size={30} />
    const siHtml = <SiHtml5 size={30} />
  return (
    <div className={darkMode ? 'bg-slate-100 text-primary container pb-10' : 'bg-secondary text-white container pb-10'}>
        <h2 className='pt-4 mb-4'>Projects</h2>
        <div className='content-align grid grid-rows-2 grid-flow-col gap-3'>
            <Button 
                dataId="react"
                handleBtn={handleBtn}
                isButton={isReactBtn}
                btnIcon={siReact}
                iconText="Lead Tracker"
                darkMode={darkMode}
                />
            <Button
                dataId="js"
                handleBtn={handleBtn} 
                isButton={isJsBtn}
                btnIcon={siJS}
                iconText="Vegan Cow"
                darkMode={darkMode}
                />
            <Button
                dataId="ruby"  
                handleBtn={handleBtn} 
                isButton={isRubyBtn}
                btnIcon={diRuby}
                iconText="Manager"
                darkMode={darkMode}
               />
            <Button 
                dataId="html"
                handleBtn={handleBtn}
                isButton={isHtmlBtn}
                btnIcon={siHtml}
                iconText="Tech Support"
                darkMode={darkMode}/>
        </div>
    </div>);
};

export default Projects;
