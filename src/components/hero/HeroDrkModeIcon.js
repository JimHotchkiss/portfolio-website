import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"

const HeroDrkModeIcon = ({darkMode, handleDarkMode}) => {
  return (
    <>
        {darkMode ?  
            <MdDarkMode 
                onClick={handleDarkMode}
                size={20} 
                className= {"text-react_blue ml-32 pt-1"}
            /> : 
            <MdOutlineLightMode 
                onClick={handleDarkMode}
                size={20}
                className='text-white ml-32 pt-1'/>}
       
        </>
  );
};

export default HeroDrkModeIcon;
