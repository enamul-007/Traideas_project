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
    return () => clearTimeout(timer); // ✅ Correct cleanup
  }, []);

  return (
    <div className="bg-gradient-to-r from-sky-300 via-violet-600 to-indigo-600">
      {/* NavBar */}
      <div>
        <Navbar />
      </div>

      {/* Animated Text */}

      <div className="container">
        <div className="items-center pt-12">
          <div className="flex justify-between">
            <div>
              <div
                className={` transition-all duration-700 ease-out ${
                  animate
                    ? "translate-x-[13px] opacity-100 scale-105"
                    : "-translate-x-full opacity-0 scale-90"
                }`}
              >
                <h1 className="w-[332px] font-open_sans font-bold text-4xl text-white_text_color">
                  Making technology work for you
                </h1>
                <p className="w-[594px] pt-8 font-semibold text-base text-white_text_color">
                  Feels like a team that can think, design, code, and scale your
                  product from MVP to Market Ready exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
              </div>
            </div>
            <div  className={` transition-all duration-700 ease-out ${
                  animate
                    ? "translate-x-0 opacity-100 scale-105"
                    : "translate-x-full opacity-0 scale-90"
                }`}>
              <div className="pt-[130px]">
                <Common text="We’re here - let’s talk" />
              </div>
            </div>
          </div>

          <div className="pl-[135px] pr-[135px] pt-[35px] pb-[135px]">
            <picture>
              <img src={Banner_img} alt="Banner" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
