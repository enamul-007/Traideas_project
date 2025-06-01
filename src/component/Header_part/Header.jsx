import React from "react";
import Common from "../common_component/CComponent";
import About_common from "../common_component/About_common";
import Common_overlay from "../common_component/Common_overlay";


const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="pt-[72px] ">
        <Common_overlay title={"Who we are"}/>
          <div className="flex items-center pt-[38px] justify-between">
            <h2 className="text-3xl font-bold font-open_sans ">
              About us Heading
            </h2>
            <Common text="Learn About Us" />
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <p className="text-base font-semibold font-open_sans h-[250px] text-justify pt-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
             
            </div>
           <div className="pb-[72px]">
           <div className="w-[1340px] bg-black_color h-[2px] "></div>
            <div className="py-[30px]">
              <div className="flex justify-between">
                <About_common title="5+" heading="Years of Experiences" />
                <div class="w-[2px] h-[120px] bg-black_color  "></div>
                <About_common title="10+" heading="Creative Pros" />
                <div class="w-[2px] h-[120px] bg-black_color  "></div>
                <About_common title="50+" heading="Project Delivered" />
                <div class="w-[2px] h-[120px] bg-black_color  "></div>
                <About_common title="20+" heading="Industries Served" />
              </div>
            </div>
            <div className="w-[1340px] bg-black_color h-[2px]  "></div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
