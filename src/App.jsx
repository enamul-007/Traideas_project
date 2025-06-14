import React from "react";
import Home from "./Pages/Home_Page/Home";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Service_page from "./Pages/Service_page/Service_page";
import CaseStudies from "./Pages/Case studies/CaseStudies";
import AboutUs from "./Pages/About Us/AboutUs";
import Career from "./Pages/Career_page/Career";
import Inside_Career from "./Pages/Inside_Career_page/Inside_Career";
import Apply from "./Pages/Apply/Apply";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service_page />} />
      <Route path="/CaseStudies" element={<CaseStudies />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/Inside_Career" element={<Inside_Career />} />
      <Route path="/Apply" element={<Apply />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
