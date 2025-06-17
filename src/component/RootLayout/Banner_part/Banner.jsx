import { useEffect, useState } from "react";
import Banner_img from "../../../assets/Banner.png";
import Common from "../../common_component/CComponent";
import Navbar from "../../common_component/Navbar";

const Banner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-sky-300 via-violet-600 to-indigo-600">
      {/* NavBar */}
      <div>
        <Navbar />
      </div>

      {/* Banner Content */}
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className=" md:pt-4 lg:pt-12">
          <div className="flex flex-col items-center justify-between lg:flex-row lg:items-center">
            {/* Text Content */}
            <div className="w-full mb-8 lg:w-1/2 lg:mb-0">
              <div
                className={`transition-all duration-700 ease-out ${
                  animate
                    ? "translate-x-[13px] opacity-100 scale-105"
                    : "-translate-x-full opacity-0 scale-90"
                }`}
              >
                <h1 className="text-2xl sm:text-3xl md:text-3xl font-open_sans font-bold text-white_text_color max-w-[332px] sm:max-w-full xs:text-xl ">
                  Making technology work for you
                </h1>
                <p className="xs:pt-2 sm:pt-4 md:pt-5 text-sm sm:text-base font-semibold text-white_text_color max-w-full md:max-w-[594px] xl:text-justify xl:w-[550px]">
                  Feels like a team that can think, design, code, and scale your
                  product from MVP to Market Ready exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
              </div>
            </div>

            {/* Common Component */}
            <div
              className={`w-full lg:w-auto transition-all duration-700 ease-out ${
                animate
                  ? "translate-x-0 opacity-100 scale-105"
                  : "translate-x-full opacity-0 scale-90"
              }`}
            >
              <div className="pt-4 sm:pt-1 md:pt-2 xs:pt-1 xs:pl-3 xl:pt-16">
                <Common text="We're here - let's talk" />
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="px-4 sm:px-8 md:px-16 lg:px-[135px] pt-6 sm:pt-8 md:pt-[35px] pb-8 sm:pb-12 md:pb-[135px]">
            <picture>
              <img 
                src={Banner_img} 
                alt="Banner" 
                className="w-full h-auto"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;