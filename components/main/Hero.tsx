import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden" id="about-me">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        
      >
        <source src="/12716-241674181_small.mp4" type="video/webm" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-80 z-10 pointer-events-none" style={{ backgroundColor: 'rgba(26, 2, 50, 0.7)' }} />

      {/* Content */}
      <div className="relative z-20">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;