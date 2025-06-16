import React from "react";


const Common_overlay = ({ title, style }) => {
  return (
    <div>
      <div className="flex items-center gap-6 xs:gap-3">
        <div class="w-[70px] h-[2px] bg-cyan-400 xs:w-10  "></div>

        <h3
          className="text-2xl font-medium text-black_color font-open_sans xs:text-lg"
          style={style}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Common_overlay;
