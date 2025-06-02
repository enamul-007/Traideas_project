import React from "react";

import Service_nav from "./Service_component/Service_nav";
import Service_banner from "./Service_component/Service_banner";
import Service_Development_part from "./Service_component/Service_Development_part";

const Service_page = () => {
  return (
    <div>
      <Service_nav />
      <Service_banner />
      <Service_Development_part />
    </div>
  );
};

export default Service_page;
