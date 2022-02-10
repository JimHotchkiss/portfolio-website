import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='container flex text-gray-500 pt-4 pb-4'>
        <span className="text-gray-400 pt-1"><AiOutlineCopyrightCircle/></span>
        <p className="pl-2">2022 Jimmy Hotchkiss</p>
    </div>
  )
}

export default Footer