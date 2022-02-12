import React from 'react'
import resumePng from './resume_img.png'
import {AiFillCloseCircle} from 'react-icons/ai'

const Resume = ({ handleResume, showResume }) => {
  return (
    <div className={showResume ? 'bg-primary pb-4' : 'hidden'}>
        <div>
            <a className='' href={resumePng} download>
                <img 
                    className='max-w-[92%] mx-auto'
                    src={resumePng} 
                    alt="Resume" />
            </a>
        </div>
        <div className='pt-4 pb-2 container flex justify-end'>
            <AiFillCloseCircle
                onClick={handleResume} 
                className='text-red-500'/> 
        </div>
      

        

    </div>
  )
}

export default Resume