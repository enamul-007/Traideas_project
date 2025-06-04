import React from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const Toggole_icon = ({ isLocationDown, handleToggle  , isDeptDown , handleToggle2 }) => {
  return (
    <div>
      <div onClick={handleToggle ||handleToggle2 }>
        {isLocationDown || handleToggle2 ? <MdKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
      </div>
      
    </div>
  );
};

export default Toggole_icon;
