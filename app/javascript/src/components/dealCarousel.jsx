import React, { useState, useEffect } from 'react';
import './dealCarousel.scss';

const DealCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === deals.length -1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? deals.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === deals.length - 1 ? 0 : prevIndex + 1));
  };

  const deals = [
    'First Text',
    'Second Text',
    'Third Text',
  ];

  useEffect(() => {
    const interval = setInterval(() => { carouselInfiniteScroll()}, 3000)
    
    return () => clearInterval(interval);
  })

  return (
    <div className='carousel-container w-100'>
      {deals.map((deal, index) => (
        <h1
          className='carousel-item'
          style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
          key={index}
        >
          {deal}
        </h1>
      ))}
    </div>
  );  
}

export default DealCarousel;
