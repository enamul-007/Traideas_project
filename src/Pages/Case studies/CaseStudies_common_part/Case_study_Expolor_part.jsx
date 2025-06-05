import { button } from "framer-motion/client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const categories = [
  "All",
  "Software",
  "Tech",
  "E-Commerce",
  "Education",
  "Health Care",
  "Telecommunication",
  "Fintech",
  "Energy",
  'Construction'
];
const Case_study_Expolor_part = () => {
  const [active, setActive] = useState("All");
  return (
    <div>
      <div className="container">
        <div>
          <div>
            <div>
              <h3 className="pt-12 text-2xl font-bold font-open_sans text-black_color">Case Studies</h3>
              <p className="text-base font-medium text-justify font-open_sans text-black_color w-[770px] pt-9">
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
            <div>
                <h3 className="pt-6 pl-2 text-base font-semibold font-open_sans text-black_color" >Scroll to Explore</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 py-3 overflow-x-auto ">
          {categories.map((catagori) => (
            <button
              key={catagori}
              onClick={() => setActive(catagori)}
              className={`px-4 py-1 rounded-full text-sm border transition ${
                active === catagori
                  ? "bg-black text-white"
                  : "bg-[#E0E0E0] text-black border-gray-400"
              }`}
            >
              {catagori}
            </button>
          ))}

          {/* Arrow Icon Button */}
          <button className={`p-2 text-black border border-gray-400 rounded-full ` }>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Case_study_Expolor_part;
