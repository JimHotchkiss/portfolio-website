import React from 'react';
import Button from '../common/Button'
import { SiReact, SiJavascript, SiHtml5, SiMaterialui, SiTailwindcss, SiRubyonrails, SiCss3} from "react-icons/si"
import { DiRuby } from "react-icons/di"


const Projects = ({ darkMode, handleBtn, isOneBtn, isTwoBtn, isThreeBtn, isFourBtn }) => {

    const siReact = <SiReact size={30}/>
    const diRuby = <DiRuby size={30} />
    const siJS = <SiJavascript size={30} />
    const siHtml = <SiHtml5 size={30} />
    const siMaterialui = <SiMaterialui size={30} />
    const siTailwindcss = <SiTailwindcss size={30} />
    const siRubyonrails = <SiRubyonrails size={30} />
    const siCss3 = <SiCss3 size={30}/>
  return (
    <div className={darkMode ? 'bg-slate-100 text-primary container pb-10' : 'bg-secondary text-white container pb-10'}>
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
