import React from 'react';
import react from '../../images/react.svg'
import rails from '../../images/rails.svg'
import js from '../../images/js.png'
import { SiReact, SiJavascript, SiHtml5, SiMaterialui, SiTailwindcss, SiRubyonrails, SiCss3, SiRedux } from "react-icons/si"
import { DiRuby } from "react-icons/di"


const ProjectCard = ({ projectsData, dataId }) => {

  const siReact = <SiReact size={30}/>
  const diRuby = <DiRuby size={30} />
  const siJS = <SiJavascript size={30} />
  const siHtml = <SiHtml5 size={30} />
  const siMaterialui = <SiMaterialui size={30} />
  const siTailwindcss = <SiTailwindcss size={30} />
  const siRubyonrails = <SiRubyonrails size={30} />
  const siCss3 = <SiCss3 size={30}/>
  const siRedux = <SiRedux size={30}/>
      return (
        projectsData.data.map(project => {
            if (project.id === dataId) {
              return(
                <div
                  key={dataId}
                  className='max-w-sm py-4 px-8 bg-slate-100 shadow-lg rounded my-8 cursor-pointer'>
                  <div className="flex justify-centermd:justify-end -mt-16">
                  {console.log(project.technologies)}
                    <img 
                      className="w-20 h-20 object-cover ml-56 bg-white rounded-full border-2 border-indigo-500" 
                      src={dataId === 'one' ? react : dataId === 'two' ? rails : dataId === 'three' ? js : js} alt={project.title}/>
                  </div>
                  <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">{project.title}</h2>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </div>
                  <div className='flex text-react_blue mt-4'>
                    {project.technologies.map(technology => {
                      return <div>{technology}</div>
                    })}
                  </div>
                  <div className="flex justify-end mt-4">
                    <a target="_blank" rel="noreferrer" href={project.liveDemo ? project.liveDemo : project.gitUrlClient} className="text-xl font-medium text-indigo-500">{project.liveDemo ? 'Live Demo' : 'Github'}</a>
                  </div>
                </div>
              )
              
            }
        })
      )
};

export default ProjectCard;
