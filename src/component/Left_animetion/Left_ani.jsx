import React from "react";
import { GoDot } from "react-icons/go";
import Marquee from "react-fast-marquee";

const Left_ani = () => {
  return (
    <div className="bg-left_ani_Bgcolor">
      <div className="container">
        <div >
        <Marquee
        direction="left"
        speed={90}
        loop={0}
        pauseOnHover={false}
        gradient={false}
      >
      <div className=" py-[25px] flex gap-[50px] rounded">
            <div className="flex items-center">
              <GoDot className="text-[40px] text-white_text_color" />
              <h1 className="text-3xl font-bold text-ani_text_color font-open_sans">
              UI/UX Design
              </h1>
            </div>

            <div className="flex items-center">
              <GoDot className="text-[40px] text-white_text_color" />
              <h1 className="text-3xl font-bold text-ani_text_color font-open_sans">
              Web Development
              </h1>
            </div>

            <div className="flex items-center">
              <GoDot className="text-[40px] text-white_text_color" />
              <h1 className="text-3xl font-bold text-ani_text_color font-open_sans">
              App Development
              </h1>
            </div>

            <div className="flex items-center">
              <GoDot className="text-[40px] text-white_text_color" />
              <h1 className="text-3xl font-bold text-ani_text_color font-open_sans">
              Software Development
              </h1>
            </div>
          </div>
      </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Left_ani;
