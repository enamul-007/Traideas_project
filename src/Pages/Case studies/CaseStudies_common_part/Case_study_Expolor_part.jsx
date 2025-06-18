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
        <div className="w-full">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="w-full">
              <div>
                <div>
                  <h3 className="pt-6 text-xl font-bold md:pt-12 sm:text-2xl font-open_sans text-black_color">
                    Case Studies
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-justify font-open_sans text-black_color w-full md:w-[90%] lg:w-[770px] pt-4 sm:pt-6 md:pt-9">
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
                  <h3 className="pt-4 pl-1 text-sm font-semibold sm:pt-6 sm:pl-2 sm:text-base font-open_sans text-black_color">
                    Scroll to Explore
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {categories.map((catagori) => (
                <button
                  key={catagori}
                  onClick={() => setActive(catagori)}
                  className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm border transition ${
                    active === catagori
                      ? "bg-black text-white"
                      : "bg-[#E0E0E0] text-black border-gray-400"
                  }`}
                >
                  {catagori}
                </button>
              ))}

              {/* Arrow Icon Button */}
              <button className={`p-1 sm:p-2 text-black border border-gray-400 rounded-full`}>
                <IoIosArrowForward className="text-sm sm:text-base" />
              </button>
            </div>
          </div>
        </div>
      );
    };

    export default Case_study_Expolor_part; 