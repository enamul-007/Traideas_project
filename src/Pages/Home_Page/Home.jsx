import React from "react";
import Banner from "../../component/RootLayout/Banner_part/Banner"
import Header from "../../component/Header_part/Header";
import Left_ani from "../../component/Left_animetion/Left_ani";
import Expertise_part from "../../component/Expertise_part/Expertise_part";
import Work_part from "../../component/Work_part/Work_part";
import Industry_part from "../../component/Industry_part/Industry_part";
import Chose_part from "../../component/Chose_part/Chose_part";
import Build_part from "../../component/Build_part/Build_part";
import Footer_part from "../../component/Footer_part/Footer_part";
import Copyright_part from "../../component/Copyright_part/Copyright_part";

const Home = () => {
  return (
    <div>
     <Banner/>
      <Header />
      <Left_ani />
      <Expertise_part />
      <Work_part />
      <Industry_part />
      <Chose_part />
      <Build_part />
      <Footer_part />
      <Copyright_part />
    </div>
  );
};

export default Home;
