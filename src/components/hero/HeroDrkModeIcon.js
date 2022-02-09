import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"

const HeroDrkModeIcon = ({darkMode, handleDarkMode}) => {
  return (
    <>
        {darkMode ?  
            <MdDarkMode 
                onClick={handleDarkMode}
                size={30} 
                className= {"text-react_blue pt-1"}
            /> : 
            <MdOutlineLightMode 
                onClick={handleDarkMode}
                size={30}
                className='text-white pt-1'/>}
       
        </>
  );
};

export default HeroDrkModeIcon;
