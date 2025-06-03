import React from "react";

import Service_nav from "./Service_component/Service_nav";
import Service_banner from "./Service_component/Service_banner";
import Service_Development_part from "./Service_component/Service_Development_part";
import Service_footer from "./Service_component/Service_footer";
import Service_copyright_part from "./Service_component/service_copyright_part";
import UI_XI_Part from "./Service_component/UI_XI_Part";
import Technology_part from "./Service_component/Technology_part";
import Transform_part from "./Service_component/Transform_part";

const Service_page = () => {
  return (
    <div>
      <Service_nav />
      <Service_banner />
      <Service_Development_part />
      <UI_XI_Part />
      <Technology_part />
      <Transform_part />
      <Service_footer />
      <Service_copyright_part />
    </div>
  );
};

export default Service_page;
