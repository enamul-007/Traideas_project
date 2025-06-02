import React from "react";
import Home from "./Pages/Home_Page/Home";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Service_page from "./Pages/Service_page/Service_page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service_page/>} />
  </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
