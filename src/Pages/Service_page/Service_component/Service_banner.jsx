import React from "react";
import Service_banner_img from "../../../assets/Service_banner_img.png";

const Service_banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-300 via-violet-600 to-indigo-600">
        <div className="container">
          <div>
            <div className="py-[48px]">
              <h2 className="text-4xl font-bold font-open_sans text-white_text_color">
                Service
              </h2>
              <p className="text-base font-semibold font-open_sans text-white_text_color w-[770px] text-justify pt-[38px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Lorem ipsum dolor sit amet,
                consectetur a
              </p>
            </div>
            <div className="pb-[48px]">
              <picture>
                <img className="w-full" src={Service_banner_img} alt={Service_banner_img} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_banner;
