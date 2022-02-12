import React from 'react'
import profile from './profile2.JPEG'
import { SiReact, SiJavascript, SiHtml5, SiRubyonrails, SiCss3, SiTwitter, SiThewashingtonpost } from "react-icons/si"
import { DiRuby } from "react-icons/di"
import { FaLinkedin } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"


const About = ({ darkMode, handleResume, showResume }) => {

  const siReact = <SiReact size={30}/>
  const diRuby = <DiRuby size={30} />
  const siJS = <SiJavascript size={30} />
  const siHtml = <SiHtml5 size={30} />
  const siRubyonrails = <SiRubyonrails size={30} />
  const siCss3 = <SiCss3 size={30}/>
  const faLinkedin = <FaLinkedin size={30} />
  const aiFillGithub = <AiFillGithub size={30} />
  const siTwitter = <SiTwitter size={30} />

  return (
    <div className={darkMode ? 'bg-white pt-4 pb-4 ' :'bg-primary  pt-4 pb-4 '}>
      <div className='container lg:max-w-[60%]'>
        <div>
          <h2 className={darkMode ? 'text-secondary' : 'text-white'}>About Me</h2>
        </div>
        <div className={darkMode ? 'py-4 px-4 bg-react_blue shadow-lg rounded my-4' : 'py-4 px-4 bg-secondary shadow-lg rounded my-4'}>
            <div className="flex justify-centermd:justify-end -mt-16">
                <img 
                    className={darkMode ? 'w-20 h-20 object-cover ml-auto mr-2 bg-white rounded-full border-2 border-secondary' : 'w-20 h-20 object-cover ml-auto mr-2 bg-white rounded-full border-2 border-react_blue' }
                    src={profile} alt="Profile"/>
            </div>
            <div className='lg:px-2'>
                <h2 className="text-white text-3xl font-semibold">Jimmy Hotchkiss</h2>
                <p className="mt-2 text-gray-500">I have always been interested in the “How?” and “Why?” questions, and I have always been a creator: From the arts to software, I am at my best, when I'm creating. And software development combines these parts of me into my professional ‘sweet-spot’.</p>
            </div>
                <div className='flex justify-start  text-gray-500 mt-4 lg:max-w-[20%] lg:mx-auto '>
                    <div>
                      <a href="https://www.linkedin.com/in/jimmyhotchkiss/" target="_blank" rel="noreferrer" className='text-linkedin_blue' size={30}>{faLinkedin}</a>
                    </div> 
                    <div className='pl-6'>
                      <a href="https://github.com/JimHotchkiss" target="_blank" rel="noreferrer" className='text-gray-100' size={30}>{aiFillGithub}</a>
                    </div> 
                    <div className='pl-6'>
                      <a href="https://twitter.com/jh8up" target="_blank" rel="noreferrer" className='text-react_blue' size={30}>{siTwitter}</a>
                    </div> 
                
                </div>
                <div className={showResume ? "hidden" : "flex justify-start mt-4"}>
                  <h2 onClick={handleResume} className="text-xl font-medium text-indigo-500 hover:cursor-pointer">Resume</h2>
                </div>
          </div>

      </div>
    </div>
  )
}

export default About