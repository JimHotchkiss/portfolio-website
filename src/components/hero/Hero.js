import React from 'react';
import HeroTitle from './HeroTitle';
import HeroDrkModeIcon from './HeroDrkModeIcon';
import HeroImage from './HeroImage';

const Hero = ({darkMode, handleDarkMode}) => {
  return (
    <div className={darkMode ? 'bg-slate-100' : 'bg-gradient-to-r from-primary to-secondary'}>
      <div className='flex justify-between container lg:max-w-[60%] pt-4'>
        <HeroTitle darkMode={darkMode}/>
        <HeroDrkModeIcon 
          handleDarkMode={handleDarkMode}
          darkMode={darkMode} />
      </div>
      <div>
        <HeroImage />
      </div>
    </div>
  )
};

export default Hero;
