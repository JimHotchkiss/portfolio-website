<div
                  key={dataId}
                  className='py-4 bg-primary shadow-lg rounded container cursor-pointer'>
                  <div className="flex justify-centermd:justify-end -mt-16">
                    <img 
                      className="w-20 h-20 object-cover ml-56 bg-white rounded-full border-2 border-indigo-500" 
                      src={dataId === 'one' ? react : dataId === 'two' ? rails : dataId === 'three' ? js : js} alt={project.title}/>
                  </div>
                  <div>
                    <h2 className="text-white text-3xl font-semibold">{project.title}</h2>
                    <p className="mt-2 text-gray-500">{project.description}</p>
                  </div>
                  <div className='flex justify-around  mt-4'>
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
                  <div className="flex justify-end mt-4">
                    <a target="_blank" rel="noreferrer" href={project.liveDemo ? project.liveDemo : project.gitUrlClient} className="text-xl font-medium text-indigo-500">{project.liveDemo ? 'Live Demo' : project.title === 'Tech Support App' ? null : 'Github'}</a>
                  </div>
                </div>