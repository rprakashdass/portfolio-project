import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Lucide icons

import i1 from '../assets/images/personal/ballbadminton.jpg';
import i2 from '../assets/images/personal/ballbadminton1.jpg';
import i3 from '../assets/images/personal/ballbadminton.jpg';


const ImageSlider = () => {
  const imageData = [
    { image: i1, description: 'This is image 1 description' },
    { image: i2, description: 'This is image 2 description' },
    { image: i3, description: 'This is image 3 description' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [imageData.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {/* Previous Button */}
      <button className="slider-button prev" onClick={goToPreviousSlide}>
        <ChevronLeft size={32} />
      </button>

      {/* Slide Image */}
      <div className="slider-image">
        <img src={imageData[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
      </div>

      {/* Slide Description */}
      <div className="slider-description">
        <p>{imageData[currentIndex].description}</p>
      </div>

      {/* Next Button */}
      <button className="slider-button next" onClick={goToNextSlide}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default ImageSlider;
