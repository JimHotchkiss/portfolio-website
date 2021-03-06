import React from 'react';
import Button from '../common/Button'
import { SiReact, SiJavascript } from "react-icons/si"
import { DiRuby } from "react-icons/di"


const Projects = ({ darkMode, handleBtn, isOneBtn, isTwoBtn, isThreeBtn, isFourBtn }) => {

    const siReact = <SiReact size={30}/>
    const diRuby = <DiRuby size={30} />
    const siJS = <SiJavascript size={30} />

  return (
    <div className={darkMode ? 'bg-slate-100 text-primary pb-12 container lg:max-w-[60%]' : 'bg-secondary text-white pb-12 container lg:max-w-[60%]'}>
        <h2 className='pt-4 mb-4'>Projects</h2>
        <div className='content-align grid grid-rows-2 grid-flow-col gap-3'>
            <Button 
                dataId="one"
                handleBtn={handleBtn}
                isButton={isOneBtn}
                btnIcon={siReact}
                iconText="Lead Tracker"
                darkMode={darkMode}
                />
              <Button
                dataId="two"  
                handleBtn={handleBtn} 
                isButton={isTwoBtn}
                btnIcon={diRuby}
                iconText="Manager"
                darkMode={darkMode}
               />
            <Button
                dataId="three"
                handleBtn={handleBtn} 
                isButton={isThreeBtn}
                btnIcon={siJS}
                iconText="Vegan Cow"
                darkMode={darkMode}
                />
            <Button 
                dataId="four"
                handleBtn={handleBtn}
                isButton={isFourBtn}
                btnIcon={siJS}
                iconText="Tech Support"
                darkMode={darkMode}/>
        </div>

    </div>);
};

export default Projects;
