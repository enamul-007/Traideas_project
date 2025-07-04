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
      <div className="container px-8 ">
        <div className="pt-[72px] xs:pt-5 ">
          <div
            className={`text-xl font-semibold text-gray-800 transition-all duration-700 ease-out lg:pl-7 sm:pl-3 xs:pl-2 md:pl-4 xl:pl-10  ${
              animate
                ? "translate-x-0 opacity-100 scale-105"
                : "-translate-x-full opacity-0 scale-90"
            }`}
          >
            <Common_overlay title={"Who we are"} />
          </div>
          <div className="flex items-center lg:pt-[38px] justify-between xs:flex-col xs:items-start xs:justify-normal xs:pt-2 xs:gap-2 lg:flex-row lg:justify-between md:flex-row md:justify-between md:pt-8">
            <h2 className="text-3xl font-bold font-open_sans ">
              <SplitText
                text="About us Heading"
                className="text-3xl font-bold font-open_sans xs:text-2xl"
              />
            </h2>
            <div>
              <Common text="Learn About Us" />
            </div>
          </div>
          <div className="px-4 mx-auto lg:w-full xs:px-0">
            {/* Text Content Section */}
            <div className="flex flex-col items-center">
              <p className="py-6 text-base font-semibold text-justify sm:text-lg font-open_sans sm:py-9 xs:text-xs xs:font-normal xs:text-justify">
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

            {/* Stats Section */}
            <div className="pt-6 pb-12">
              <div className="h-[2px] w-full bg-black_color mx-2"></div>
              <div className="pt-[29px] pb-[30px] lg:pt-4 lg:pb-[15px] md:pt-[22px] md:pb-[17px] xs:pt-2 xs:pb-[7px] ">
                <div className="flex justify-between xs:gap-[15px] xs:pl-[15px] xl:gap-0 xl:pl-0">
                  <div className="lg:pt-3 md:pt-4">
                    <About_common title="5+" heading="Years of Experiences" />
                  </div>
                  <div class="w-[1.5px] h-[120px] bg-black_color md:h-[80px] sm:h-10  xs:h-[60px]"></div>
                  <div className="lg:pt-3 md:pt-4">
                    <About_common title="10+" heading="Creative Pros" />
                  </div>
                  <div class="w-[2px] h-[120px] bg-black_color md:h-[80px]  sm:h-10 xs:w-[1.84px] xs:h-[60px]"></div>
                  <div className="lg:pt-3 md:pt-4">
                    <About_common title="50+" heading="Project Delivered" />
                  </div>
                  <div class="w-[1.5px] h-[120px] bg-black_color md:h-[80px]  sm:h-10 xs:h-[60px] "></div>
                  <div className="lg:pt-3 md:pt-4">
                    <About_common title="20+" heading="Industries Served" />
                  </div>
                </div>
              </div>
              <div className="h-[2px] w-full bg-black_color mx-2 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
