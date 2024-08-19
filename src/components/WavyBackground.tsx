import React from "react";
import Image from "next/image";
import eventImage from "@/images/logo-cumbre.png";

const WavyBackground = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-10 mx-auto flex items-center justify-center pb-2 md:pb-6">
        <Image className="w-2/3" src={eventImage} alt="" unoptimized />
      </div>
    </div>
  );
};

export default WavyBackground;
