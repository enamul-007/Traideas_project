import React from "react";
import Common_overlay from "../common_component/Common_overlay";
import Card_common from "../common_component/Card_common";

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
           <div>
            <Card_common/>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise_part;
