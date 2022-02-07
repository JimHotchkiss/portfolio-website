import React from 'react';

const HeroTitle = ({darkMode}) => {
  return (
      <>
         <h3 className={darkMode ? 'text-slate-800 transition-class w-auto' : 'text-white transition-class'}>Jimmy Hotchkiss <span className='text-react_blue ml-1'>WebDever</span></h3>
      </>
  );
};

export default HeroTitle;
