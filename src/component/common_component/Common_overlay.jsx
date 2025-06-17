import React from "react";

const Common_overlay = ({ title, style }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {/* Responsive line */}
        <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-0.5 sm:h-[1.5px] md:h-[2px] bg-cyan-400 flex-shrink-0"></div>
        
        {/* Responsive title */}
        <h3
          className="font-sans text-base font-medium leading-tight text-gray-900 sm:text-lg md:text-xl lg:text-2xl"
          style={style}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Common_overlay;
