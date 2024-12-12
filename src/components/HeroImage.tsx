import React from 'react';

export function HeroImage() {
  return (
    <div className="absolute inset-0">
      {/* Gradient overlay with angle */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(105deg, 
            rgb(17, 24, 39) 0%,
            rgba(17, 24, 39, 0.95) 20%,
            rgba(17, 24, 39, 0.8) 40%,
            rgba(17, 24, 39, 0.4) 60%,
            rgba(17, 24, 39, 0.1) 80%,
            rgba(17, 24, 39, 0) 100%
          )`
        }}
      />
      
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
        alt="Remote workers collaborating"
        className="h-full w-full object-cover"
      />
    </div>
  );
}