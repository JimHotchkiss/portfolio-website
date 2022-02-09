import React from 'react'
import profile from './profile2.JPEG'

const About = () => {
  return (
    <div>
        <div>
            <h2 className='text-white'>About Me</h2>
        </div>
        <div className='max-w-sm py-4 px-8 bg-primary shadow-lg rounded my-8 cursor-pointer'>
            <div className="flex justify-centermd:justify-end -mt-16">
                <img 
                    className="w-20 h-20 object-cover ml-56 bg-white rounded-full border-2 border-react_blue" 
                    src={profile} alt="Profile"/>
            </div>
            <div>
                <h2 className="text-white text-3xl font-semibold">Jimmy Hotchkiss</h2>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit nostrum. Corporis ad, dolorum aspernatur vitae blanditiis assumenda hic odio necessitatibus fugiat modi eius magnam ullam inventore id recusandae omnis?</p>
            </div>
                <div className='flex justify-around  mt-4'>
                    Technologies
                </div>
                  <div className="flex justify-end mt-4">
                    <a target="_blank" rel="noreferrer" href="#" className="text-xl font-medium text-indigo-500">CV</a>
                  </div>
                </div>
    </div>
  )
}

export default About