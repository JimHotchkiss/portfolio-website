import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'container lg:max-w-[60%] flex text-secondary pt-4 pb-4 text-xs border-t border-teal-600' :'container lg:max-w-[60%] flex text-gray-500 pt-4 pb-4 text-xs '}>
        <span className="text-gray-400 pt-1"><AiOutlineCopyrightCircle/></span>
        <p className="pl-2">2022 Jimmy Hotchkiss - test </p>
        <a href="https://undraw.co/illustrations" target='_blank' rel="noreferrer" className='ml-auto'>Banner by Undrawn</a>
    </div>
  )
}

export default Footer