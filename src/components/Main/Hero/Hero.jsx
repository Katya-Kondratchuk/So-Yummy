import React from 'react';
import LeafsLeft from './LeafsLeft/LeafsLeft';
import LeafsRight from './LeafsRight/LeafsRight';
import Plate from './Plate/Plate';

const Hero = () => {
  return (
    <>
      <Plate />
      <LeafsRight />
      <LeafsLeft />
    </>
  );
};

export default Hero;
