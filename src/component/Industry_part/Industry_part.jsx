import React from "react";
import Common_overlay from "../common_component/Common_overlay";
import software_card_img from "../../assets/software_card_img.png";
import software_card_img2 from "../../assets/software_card_img2.png";
import software_card_img3 from "../../assets/software_card_img3.png";

const Industry_part = () => {
  return (
    <div className="pb-[72px] bg-Industry_bg_color pt-9">
      <div className="container">
        <div>
          <Common_overlay title="Industry We served" />
          <h3 className="text-3xl font-bold font-open_sans text-black_color pt-9">
            Heading of your choice
          </h3>
        </div>
        <div className="flex gap-9 ">
          <div className="bg-gradient-to-r from-[#200E3E] to-[#243468] h-[569px] w-[664px] rounded-3xl">
            <div>
              <picture>
                <img src={software_card_img} alt="" />
              </picture>
              <div className="w-[568px] p-[48px]  flex flex-col">
                <h2 className="text-3xl font-bold font-open_sans text-white_text_color">
                  Software
                </h2>
                <p className="pt-6 text-base font-semibold text-justify font-open_sans text-white_text_color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam,
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#13262C] to-[#0894A6] h-[569px] w-[470px] rounded-3xl">
            <div>
              <div className="w-[568px] p-[48px]  flex flex-col">
                <h2 className="text-3xl font-bold font-open_sans text-white_text_color">
                  Software
                </h2>
                <p className="text-base font-semibold text-justify font-open_sans text-white_text_color w-[374px] pt-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
              </div>
            </div>
            <div>
              <picture>
                <img src={software_card_img2} alt="" />
              </picture>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#200E3E] to-[#243468] h-[569px] w-[664px] rounded-3xl">
          <div>
            <picture>
              <img src={software_card_img3} alt="" />
            </picture>
            <div className="w-[568px] p-[48px]  flex flex-col">
              <h2 className="text-3xl font-bold font-open_sans text-white_text_color">
              Telco
              </h2>
              <p className="pt-6 text-base font-semibold text-justify font-open_sans text-white_text_color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Industry_part;
