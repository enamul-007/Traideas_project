import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const CComponent = ({ text }) => {
  return (
    <div className="w-fit "> 
      <h3 className="flex items-center gap-1 px-3 py-1 text-sm truncate rounded sm:px-4 text-white_text_color font-open_sans bg-custom_color sm:text-base">
        {text} <HiArrowUpRight className="flex-shrink-0 text-xs sm:text-sm" />
      </h3>
    </div>
  );
};

export default CComponent;