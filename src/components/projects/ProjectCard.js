import React from 'react';
import react from '../../images/react.svg'
import rails from '../../images/rails.svg'
import js from '../../images/js.png'

const ProjectCard = ({ projectsData, dataId }) => {

 // {dataId === 'react' ? react : dataId === 'ruby' ? rails : null} 
      return (

        projectsData.data.map(project => {
            if (project.id === dataId) {
              return(
                <div
                  key={Math.random()}
                  className='max-w-sm py-4 px-8 bg-slate-100 shadow-lg rounded my-8 cursor-pointer'>
                  <div className="flex justify-centermd:justify-end -mt-16">
                  {console.log(project.id, dataId)}
                    <img 
                      className="w-20 h-20 object-cover ml-56 bg-white rounded-full border-2 border-indigo-500" 
                      src={dataId === 'react' ? react : dataId === 'ruby' ? rails : dataId === 'js' ? js : null} alt={project.title}/>
                  </div>
                  <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">{project.title}</h2>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a target="_blank" rel="noreferrer" href={project.gitUrlClient} className="text-xl font-medium text-indigo-500">Github</a>
                  </div>
                </div>
              )
              
            }
        })
      )
};

export default ProjectCard;
