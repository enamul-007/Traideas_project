import React from "react";
import Career_nav from "./Career_common/Career_nav";
import Common_Footer from "../../component/common_component/Common_Footer";
import Copyright_part from "../../component/Copyright_part/Copyright_part";
import Careear_joinUs_part from "./Career_common/Careear_joinUs_part";
import Career_Opening_part from "./Career_common/Career_Opening_part";

const Career = () => {
  return (
    <div>
      <Career_nav />
      <Careear_joinUs_part />
      <Career_Opening_part/>

      <Common_Footer />
      <Copyright_part />
    </div>
  );
};

export default Career;
