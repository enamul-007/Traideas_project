import React from "react";
import CaseStudies_Nav from "./CaseStudies_common_part/CaseStudies_Nav";
import CaseStudie_footer from "./CaseStudies_common_part/CaseStudie_footer";
import CaseStudies_copyright from "./CaseStudies_common_part/CaseStudies_copyright";
import Case_study_Expolor_part from "./CaseStudies_common_part/Case_study_Expolor_part";
import CaseStady_project_part from "./CaseStudies_common_part/CaseStady_project_part";
import Case_discuss_part from "./CaseStudies_common_part/Case_discuss_part";

const CaseStudies = () => {
  return (
    <div>
      <CaseStudies_Nav />
      <Case_study_Expolor_part />
      <CaseStady_project_part/>
      <Case_discuss_part/>
      <CaseStudie_footer />
      <CaseStudies_copyright />
    </div>
  );
};

export default CaseStudies;
