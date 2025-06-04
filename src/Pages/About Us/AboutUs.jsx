import React from "react";
import AboutUs_nav from "./AboutUs_common/AboutUs_nav";
import Common_Footer from "../../component/common_component/Common_Footer";
import Copyright_common_part from "../../component/common_component/Copyright_common_part";
import About_us from "./AboutUs_common/About_us";
import About_Heading from "./AboutUs_common/About_Heading";
import About_deatils from "./AboutUs_common/About_deatils";

const AboutUs = () => {
  return (
    <div>
      <AboutUs_nav />
      <About_us />
      <About_Heading />
      <About_deatils />
      <Common_Footer />
      <Copyright_common_part />
    </div>
  );
};

export default AboutUs;
