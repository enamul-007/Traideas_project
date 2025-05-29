import React from "react";
import Navbar from "./component/RootLayout/Navbar/Navbar";
import Banner from "./component/RootLayout/Banner_part/Banner";

const App = () => {
  return (
    <div  >
      <div>
     <div className="bg-gradient-to-r from-sky-300 via-violet-600 to-indigo-600">
     <Navbar />
     <Banner />
     </div>
      </div>
    </div>
  );
};

export default App;
