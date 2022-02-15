import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"

const HeroDrkModeIcon = ({darkMode, handleDarkMode}) => {
  return (
    <>
        {darkMode ?  
            <MdDarkMode 
                onClick={handleDarkMode}
                size={30} 
                className= {"text-react_blue pt-1 hover:cursor-pointer hover:text-gray-600 transition-all duration-300 ease-linear"}
            /> : 
            <MdOutlineLightMode 
                onClick={handleDarkMode}
                size={30}
                className='text-white pt-1 hover:cursor-pointer hover:text-react_blue transition-all duration-300 ease-linear'/>}
       
        </>
  );
};

export default HeroDrkModeIcon;
