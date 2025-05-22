import React, { useState } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
        {/* After image (background) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        ></div>
        
        {/* Before image (foreground with clip) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${beforeImage})`,
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        ></div>
        
        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
        ></div>
        
        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white py-1 px-3 rounded-md text-sm">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white py-1 px-3 rounded-md text-sm">
          After
        </div>
        
        {/* Slider control */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute bottom-16 left-0 right-0 mx-auto w-3/4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BeforeAfter;