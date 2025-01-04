import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "../ParticleConfig/particleConfig";

export default function ParticleBg({ customInit }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Particles 
        options={particleConfig} 
        init={customInit}  // Pass customInit here
      />
    </div>
  );
}
