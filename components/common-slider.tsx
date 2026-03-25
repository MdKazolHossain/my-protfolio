'use client';

import { useState, useEffect } from 'react';


const commonSlider = ({images}:any) => {
      const slides:any =images;

  const [current, setCurrent] = useState(0);

  // Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides?.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides?.length);
  };
  return (
    <>
          <div className="relative w-full">
      
      {/* Slides */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {slides?.map((src:string, index:number) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full  transition-opacity duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides?.map((_:any, index:number) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50">
          ❮
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50">
          ❯
        </span>
      </button>
    </div>
    </>
  )
}

export default commonSlider
