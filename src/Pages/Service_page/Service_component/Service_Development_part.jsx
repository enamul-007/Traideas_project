import React from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";
import Development_img from "../../../assets/Development_img.png";

const Service_Development_part = () => {
  return (
    <div>
      <div className="bg-black_color">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="pt-8 md:pt-11">
              <Common_overlay title="Development" style={{ color: "white" }} />
            </div>

            {/* Web Development Section */}
            <div className="flex flex-col items-center justify-between gap-6 pt-6 lg:flex-row md:pt-9 md:gap-8 xl:w-full">
              <div className="order-1 w-full lg:order-1 lg:w-1/2">
                <h2 className="text-2xl font-bold sm:text-3xl font-open_sans text-white_text_color">
                  Web Development
                </h2>
                <p className="text-sm sm:text-base font-semibold font-open_sans text-white_text_color w-full lg:w-[580px] text-justify pt-4 sm:pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non occaecat
                </p>
              </div>
              <div className="flex justify-center order-2 w-full lg:order-2 lg:w-1/2 xl:pl-28">
                <picture>
                  <img
                    src={Development_img}
                    alt="Web Development"
                    className="w-full max-w-md mx-auto"
                  />
                </picture>
              </div>
            </div>

            {/* Software Development Section */}
            <div className="flex flex-col items-center justify-between gap-6 pt-6 lg:flex-row md:pt-9 md:gap-8">
              <div className="flex justify-center order-2 w-full lg:order-1 lg:w-1/2 xl:justify-start">
                <picture>
                  <img
                    src={Development_img}
                    alt="Software Development"
                    className="w-full max-w-md mx-auto"
                  />
                </picture>
              </div>
              <div className="order-1 w-full lg:order-2 lg:w-1/2">
                <h2 className="text-2xl font-bold sm:text-3xl font-open_sans text-white_text_color">
                  Software Development
                </h2>
                <p className="text-sm sm:text-base font-semibold font-open_sans text-white_text_color w-full lg:w-[580px] text-justify pt-4 sm:pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non occaecat
                </p>
              </div>
            </div>

            {/* Mobile App Development Section */}
            <div className="flex flex-col items-center justify-between gap-6 pt-6 lg:flex-row md:pt-9 md:gap-8">
              <div className="order-1 w-full lg:order-1 lg:w-1/2">
                <h2 className="text-2xl font-bold sm:text-3xl font-open_sans text-white_text_color">
                  Mobile App Development
                </h2>
                <p className="text-sm sm:text-base font-semibold font-open_sans text-white_text_color w-full lg:w-[580px] text-justify pt-4 sm:pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non occaecat
                </p>
              </div>
              <div className="flex justify-center order-2 w-full lg:order-2 lg:w-1/2 xl:pl-28">
                <picture>
                  <img
                    src={Development_img}
                    alt="Mobile App Development"
                    className="w-full max-w-md mx-auto"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_Development_part;
