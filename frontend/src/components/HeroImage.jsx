import React, { useState, useEffect } from 'react';
import heroImage from './../img/hero.jpg';
import heroMobileImage from './../img/hero-mobile.jpg'; // Import your mobile hero image
import InterestCalculator from './InterestCalculation';
import './../assets/css/heroimages.css';

const HeroImage = () => {
  const [isMobile, setIsMobile] = useState(false);
  

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 500); 
  };
  
  useEffect(() => {

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  return (
    <div className="position-relative hero-image">
      <img
        src={isMobile ? heroMobileImage : heroImage}
        alt="Hero Section"
        className="img-fluid"
      />
      <div
        className="position-absolute top-0 start-0 interest-calculator"
        style={{ zIndex: 10 }}
      >
        <InterestCalculator />
      </div>
    </div>
  );
};

export default HeroImage;