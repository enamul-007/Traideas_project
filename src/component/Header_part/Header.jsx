import { useEffect, useState } from "react";
import Common from "../common_component/CComponent";
import About_common from "../common_component/About_common";
import Common_overlay from "../common_component/Common_overlay";
import SplitText from "../Animetion/SplitText";


const Header = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="pt-[72px] ">
          <div
            className={`text-xl font-semibold text-gray-800 transition-all duration-700 ease-out ${
              animate
                ? "translate-x-0 opacity-100 scale-105"
                : "-translate-x-full opacity-0 scale-90"
            }`}
          >
            <Common_overlay title={"Who we are"} />
          </div>
          <div className="flex items-center pt-[38px] justify-between">
            <h2 className="text-3xl font-bold font-open_sans ">
              <SplitText text="About us Heading" className="text-3xl font-bold font-open_sans " />
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
              <div className="h-[2px] w-full bg-black_color mx-2"></div>
              <div className="py-[30px]">
                <div className="flex justify-between">
                  <About_common title="5+" heading="Years of Experiences" />
                  <div class="w-[1.5px] h-[120px] bg-black_color  "></div>
                  <About_common title="10+" heading="Creative Pros" />
                  <div class="w-[2px] h-[120px] bg-black_color  "></div>
                  <About_common title="50+" heading="Project Delivered" />
                  <div class="w-[1.5px] h-[120px] bg-black_color  "></div>
                  <About_common title="20+" heading="Industries Served" />
                </div>
              </div>
              <div className="h-[1.5px] w-full bg-black_color mx-2 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
