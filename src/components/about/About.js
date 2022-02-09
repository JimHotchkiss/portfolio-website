import React from 'react'
import profile from './profile2.JPEG'
import { SiReact, SiJavascript, SiHtml5, SiMaterialui, SiTailwindcss, SiRubyonrails, SiCss3, SiRedux } from "react-icons/si"
import { DiRuby } from "react-icons/di"

const About = () => {

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
    <div className='bg-primary min-w-full container pt-4 pb-4'>
        <div>
            <h2 className='text-white'>About Me</h2>
        </div>
        <div className='max-w-sm py-4 px-4 bg-secondary shadow-lg rounded my-4 cursor-pointer'>
            <div className="flex justify-centermd:justify-end -mt-16">
                <img 
                    className="w-20 h-20 object-cover ml-56 bg-white rounded-full border-2 border-react_blue" 
                    src={profile} alt="Profile"/>
            </div>
            <div>
                <h2 className="text-white text-3xl font-semibold">Jimmy Hotchkiss</h2>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit nostrum. Corporis ad, dolorum aspernatur vitae blanditiis assumenda hic odio necessitatibus fugiat modi eius magnam ullam inventore id recusandae omnis?</p>
            </div>
                <div className='flex justify-around  text-gray-500 mt-4'>
                    <div className='text-red-600'>{diRuby}</div> 
                    <div className='text-red-600'>{siRubyonrails}</div>
                    <div className='text-cyan-400'>{siHtml}</div>
                    <div className='text-orange-600'>{siCss3}</div>
                    <div className='text-yellow-300'>{siJS}</div>
                    <div className='text-react_blue'>{siReact}</div>
                </div>
                  <div className="flex justify-end mt-4">
                    <a target="_blank" rel="noreferrer" href="#" className="text-xl font-medium text-indigo-500">CV</a>
                  </div>
          </div>
    </div>
  )
}

export default About