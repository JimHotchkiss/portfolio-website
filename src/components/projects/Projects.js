import React from 'react';
import Button from '../common/Button'
import { MdDarkMode } from "react-icons/md"
import { SiReact, SiJavascript, SiHtml5 } from "react-icons/si"
import { DiRuby } from "react-icons/di"


const Projects = ({ darkMode, handleBtn, isButton }) => {

    const siReact = <SiReact size={30}/>
    const diRuby = <DiRuby size={30} />
    const siJS = <SiJavascript size={30} />
    const siHtml = <SiHtml5 size={30} />
  return (
    <div className={darkMode ? 'bg-slate-100 text-primary container pb-10' : 'bg-secondary text-white container pb-10'}>
        <h2 className='pt-4 mb-4'>Projects</h2>
        <div className='content-align grid grid-rows-2 grid-flow-col gap-3'>
            <Button 
                handleBtn={handleBtn}
                isButton={isButton}
                btnIcon={siReact}
                iconText="Lead Tracker"
                />
            <Button
                handleBtn={handleBtn} 
                isButton={isButton}
                btnIcon={siJS}
                iconText="Vegan Cow"/>
            <Button
                handleBtn={handleBtn} 
                isButton={isButton}
                btnIcon={diRuby}
                iconText="Manager"
               />
            <Button 
                handleBtn={handleBtn}
                isButton={isButton}
                btnIcon={siHtml}
                iconText="Tech Support"/>
        </div>
    </div>);
};

export default Projects;
