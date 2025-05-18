import React, { useState, useEffect } from 'react';
import './../assets/css/newsslider.css'; 
import NewsImages1 from './../img/NewsImages1.jpg';
import NewsImages2 from './../img/NewsImages2.jpg';    
import NewsImages3 from './../img/NewsImages3.jpg';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      id: 1, 
      image: NewsImages1, // Use the imported image directly
      title: 'Financial News Update', 
      description: 'Latest market trends and analysis' 
    },
    { 
      id: 2, 
      image: NewsImages2, 
      title: 'Investment Opportunities', 
      description: 'Discover new investment avenues' 
    },
    { 
      id: 3, 
      image: NewsImages3, 
      title: 'Economic Forecast', 
      description: 'Expert predictions for the coming quarter' 
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="news-slider-container">
      <h4 className="text-secondary mb-3">ព័ត៌មាននិងដំណឹង</h4>
      <div 
        className="news-slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="slide animated-card">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="slide-image" 
              style={{ 
                visibility: index === currentSlide ? 'visible' : 'hidden',
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            />
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="slider-arrow prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="slider-arrow next" onClick={nextSlide}>
        &gt;
      </button>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;