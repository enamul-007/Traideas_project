import React from "react";
import RegistationLeft from "../../assets/Components/RegistationComponent/RegistationLeft.jsx";
import RegistationRight from "../../assets/Components/RegistationComponent/RegistationRight.jsx";

const Registation = () => {
  return (
  <>
    <div className="flex items-center justify-between h-screen ">
      <RegistationLeft />
      <RegistationRight />
      
    </div>
  </>
  );
};

export default Registation;
