import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const CComponent = ({ text }) => {
  return (
    <div>
      <h3 className="flex items-center gap-1 px-4 py-1 rounded text-white_text_color font-open_sans bg-custom_color">
        {text} 
      </h3>
    </div>
  );
};

export default CComponent;
