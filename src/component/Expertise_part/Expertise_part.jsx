import React from "react";
import Common_overlay from "../common_component/Common_overlay";

const Expertise_part = () => {
  return (
    <div>
      <div className="bg-expertise_bg_color">
        <div className="container">
          <div className="flex flex-col pb-[64px]">
            <div>
              <div className="pt-6 pb-[63px]">
                <Common_overlay
                  title={"Our Expertise  "}
                  style={{ color: "white" }}
                />
              </div>
            </div>
            {/* =====cart part===== */}
            <div className="rounded-xl bg-cart_color ">
              <div className="pt-[117px] pb-[85px] pl-[96px]">
               <h1 className="text-4xl font-bold font-open_sans text-white_text_color">UI UX Design</h1>
               <p className="text-base font-medium font-open_sans text-white_text_color w-[450px] text-justify pt-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise_part;
