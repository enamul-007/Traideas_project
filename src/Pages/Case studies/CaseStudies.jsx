import React from "react";
import CaseStudies_Nav from "./CaseStudies_common_part/CaseStudies_Nav";
import CaseStudie_footer from "./CaseStudies_common_part/CaseStudie_footer";
import CaseStudies_copyright from "./CaseStudies_common_part/CaseStudies_copyright";

const CaseStudies = () => {
  return (
    <div>
      <CaseStudies_Nav />
      <CaseStudie_footer />
      <CaseStudies_copyright/>
    </div>
  );
};

export default CaseStudies;
