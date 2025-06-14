import React from "react";
import Navbar from "../../component/common_component/Navbar";
import Footer_part from "../../component/Footer_part/Footer_part";
import Copyright_part from "../../component/Copyright_part/Copyright_part";
import Looking_devloper from "./Inside_Career_common_part/Looking_devloper";


const Inside_Career = () => {
 
  return (
    <div>
      <div className="bg-gradient-to-r from-[#243468] to-[#200E3E]">
        <Navbar />
      </div>
      <Looking_devloper />

      <Footer_part />
      <Copyright_part />
    </div>
  );
};

export default Inside_Career;
