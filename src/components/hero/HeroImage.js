import React from 'react';
// import hero from './hero.svg'
import heroReactBlue from './hero-react-blue.svg'

const HeroImage = () => {
  return (
    <div className='w-70 pt-4 pb-2 px-2'>
        <img className="md:mx-auto" src={heroReactBlue} alt="Web Programmer" />
    </div>
  );
};

export default HeroImage;
