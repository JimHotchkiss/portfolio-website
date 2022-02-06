import React from 'react';
import { useState } from 'react';

const Menu = () => {
    const [isMenu, setIsMenu] = useState(false)

    const onMenu = () => {
        setIsMenu(!isMenu)
    }
  return (
      <div 
        onClick={onMenu}
        className="pt-4 pl-6"
        >
          <div className={isMenu  ? 'w-3 mb-1 h-1 bg-white transition-all rounded duration-200 ease-linear cursor-pointer' : 'w-7 mb-1 h-1 bg-white rounded transition-all duration-2å00 ease-linear cursor-pointer'}></div>
          <div className={isMenu  ? 'w-7 mb-1 h-1 bg-white transition-all rounded duration-200 ease-linear cursor-pointer' : 'w-3 mb-1 h-1 bg-white rounded transition-all duration-2å00 ease-linear cursor-pointer'}></div>
          <div className={isMenu  ? 'w-3 mb-1 h-1 bg-white transition-all rounded duration-200 ease-linear cursor-pointer' : 'w-7 mb-1 h-1 bg-white rounded transition-all duration-2å00 ease-linear cursor-pointer'}></div>
      </div>
  );
};

export default Menu;
