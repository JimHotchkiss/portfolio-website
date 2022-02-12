import React from 'react';
import react from '../../images/react.svg'
import rails from '../../images/rails.svg'
import js from '../../images/js.png'
import leadTrackergif from '../../images/lead-tracker.gif'
import veganCowPng from '../../images/vegan-cow.png'
import projectManagePng from '../../images/project-manager.png'
import { SiReact, SiJavascript, SiHtml5, SiMaterialui, SiTailwindcss, SiRubyonrails, SiCss3, SiRedux } from "react-icons/si"



const ProjectCard = ({ projectsData, dataId, darkMode }) => {

  const siReact = <SiReact size={30}/>
  const siJS = <SiJavascript size={30} />
  const siHtml = <SiHtml5 size={30} />
  const siMaterialui = <SiMaterialui size={30} />
  const siTailwindcss = <SiTailwindcss size={30} />
  const siRubyonrails = <SiRubyonrails size={40} />
  const siCss3 = <SiCss3 size={30}/>
  const siRedux = <SiRedux size={30}/>
      return (
        
        projectsData.data.map(project => {
            if (project.id === dataId) {
              return(
                <div 
                  className={darkMode ? 'bg-white pt-8 pb-8' :'bg-primary pt-8 pb-8'} 
                  key={Math.random()}>
                  <div
                    key={Math.random()}
                  className={darkMode ? 'md:max-w-[60%] max-w-[91%] bg-react_blue shadow-lg pt-2 container rounded' : 'md:max-w-[58%] max-w-[91%] bg-secondary shadow-lg pt-2 mx-auto rounded'}>
                <div className="flex justify-center -mt-16">
                    <img 
                      className="w-20 h-20 object-cover ml-auto mr-4 bg-white rounded-full border-2 border-indigo-500" 
                      src={dataId === 'one' ? react : dataId === 'two' ? rails : dataId === 'three' ? js : js} alt={project.title}/>
                  </div>
                  <div className='px-4 pt-2'>
                    <h2 className="text-white text-3xl font-semibold">{project.title}</h2>
                    <p className="mt-2 text-gray-500">{project.description}</p>
                  </div>
                  <div className={project.title === 'Tech Support App' ? 'hidden' : 'pt-4 pb-4'}>
                    <img src={project.title === 'Lead Tracker' ? leadTrackergif :
                              project.title === 'Vegan Cow' ? veganCowPng :
                              project.title === 'Project Manager' ? projectManagePng :
                              null } alt="Project" className='max-w-[92%] mx-auto'/>
                  </div>
                  <div className='flex justify-around  mt-4 lg:max-w-[30%] lg:mx-auto'>
                    {project.technologies.map(technology => {
                      if (technology === 'react') {
                        return <div key={Math.random()} className="text-react_blue">{siReact}</div>
                      } else if (technology === 'redux') {
                        return <div key={Math.random()} className="text-indigo-600">{siRedux}</div>
                      } else if (technology === 'rails') {
                        return <div key={Math.random()} className="text-red-600">{siRubyonrails}</div>
                      } else if (technology === 'materialui') {
                        return <div key={Math.random()} className="text-blue-600">{siMaterialui}</div>
                      } else if (technology === 'tailwind') {
                        return <div key={Math.random()} className="text-teal-300">{siTailwindcss}</div>
                      } else if (technology === 'css') {
                        return <div key={Math.random()} className="text-cyan-400">{siCss3}</div>
                      } else if (technology === 'javascript') {
                        return <div key={Math.random()} className="text-yellow-300">{siJS}</div>
                      } else if (technology === 'html') {
                        return <div key={Math.random()} className="text-orange-600">{siHtml}</div>
                      }
                      
                    })}
                  </div>
                  <div className='flex justify-start pb-4'>
                    <div key={Math.random()} className="flex justify-end mt-4 px-4">
                      <a target="_blank" rel="noreferrer" href={project.liveDemo ? project.liveDemo : project.gitUrlClient} className="text-xl font-medium text-indigo-500">{project.liveDemo ? 'Live Demo' : project.title === 'Tech Support App' ? null : 'Github'}</a>
                    </div>
                    <div key={Math.random()} className={project.title === "Tech Support App" ? "hidden" : "flex justify-end mt-4 pb-4 px-4"}>
                      <a target="_blank" rel="noreferrer" href={project.videoDemo ? project.videoDemo : "#"} className="text-xl font-medium text-react_blue pb-4">Video Demo</a>
                    </div>
                  </div>
                </div>
              </div>
                
              )
              
            }
        })
      )
};

export default ProjectCard;
