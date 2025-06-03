import React from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";
import Tecnology_img from "../../../assets/Tecnology_img.png"

const Technology_part = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#001e33e1] to-[#02548aeb]">
        <div className="container">
          <div>
            <div className="pt-12">
              <Common_overlay title="Technology" 
              style={{color:"white"}}
              />
            </div>

            <div className="pb-[88px] flex justify-between">
              <div >
                <h2 className="text-3xl font-bold font-open_sans text-white_text_color pt-9">Ai / ML</h2>
                <p className="text-base font-semibold text-justify font-open_sans text-white_text_color w-[587px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non occaecat
                </p>
              </div>
              <div>
                <picture>
                    <img src={Tecnology_img} alt={Tecnology_img} />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology_part;
