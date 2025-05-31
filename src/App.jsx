import React from "react";
import Navbar from "./component/RootLayout/Navbar/Navbar";
import Banner from "./component/RootLayout/Banner_part/Banner";
import Header from "./component/Header_part/Header";
import Left_ani from "./component/Left_animetion/Left_ani";
import Expertise_part from "./component/Expertise_part/Expertise_part";
import Work_part from "./component/Work_part/Work_part";
import Industry_part from "./component/Industry_part/Industry_part";

const App = () => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-sky-300 via-violet-600 to-indigo-600">
          <Navbar />
          <Banner />
        </div>
        <Header />
        <Left_ani />
        <Expertise_part />
        <Work_part/>
        <Industry_part/>
      </div>
    </div>
  );
};

export default App;
