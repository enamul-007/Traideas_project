import React from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";
import Development_img from "../../../assets/Development_img.png";

const Service_Development_part = () => {
  return (
    <div>
      <div className="bg-black_color">
        <div className="container">
          <div>
            <div className="pt-11">
              <Common_overlay title="Development" style={{ color: "white" }} />
            </div>

            <div className="flex items-center justify-between pt-9">
              <div>
                <h2 className="text-3xl font-bold font-open_sans text-white_text_color">
                  Web Development
                </h2>
                <p className="text-base font-semibold font-open_sans text-white_text_color w-[580px] text-justify pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non occaecat{" "}
                </p>
              </div>
              <div>
                <picture>
                  <img src={Development_img} alt={Development_img} />
                </picture>
              </div>
            </div>

            <div className="flex items-center justify-between pt-9">
              <div>
                <picture>
                  <img src={Development_img} alt={Development_img} />
                </picture>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-open_sans text-white_text_color">
                  Software Development
                </h2>
                <p className="text-base font-semibold font-open_sans text-white_text_color w-[580px] text-justify pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non occaecat{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-9">
              <div>
                <h2 className="text-3xl font-bold font-open_sans text-white_text_color">
                  Mobile App Development
                </h2>
                <p className="text-base font-semibold font-open_sans text-white_text_color w-[580px] text-justify pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non occaecat{" "}
                </p>
              </div>
              <div>
                <picture>
                  <img src={Development_img} alt={Development_img} />
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
