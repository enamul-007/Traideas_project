import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Toggole_icon from "../../../component/common_component/Toggole_icon";
import { useNavigate } from "react-router-dom";

const Career_Opening_part = () => {
  const [isLocationDown, setIsLocationDown] = useState(true);
  const [isDeptDown, setIsDeptDown] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLocationDown((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsDeptDown((prev) => !prev);
  };

  const handleClick = () => {
    navigate("/Inside_Career");
  };

  return (
    <div className="w-full">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="pb-8 md:pb-10">
          {/* Header */}
          <div className="flex justify-center pt-6 md:pt-9">
            <h3 className="text-2xl font-bold md:text-3xl font-open_sans text-black_color">
              Current Opening
            </h3>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col gap-4 pt-6 md:flex-row md:gap-6 md:pt-12">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiSearch className="text-gray-500" />
              </div>
              <input
                placeholder="Search"
                type="text"
                className="w-full py-2 pl-10 pr-3 border rounded-md shadow-sm border-black_color"
              />
            </div>

            {/* Location Filter */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Toggole_icon
                  isLocationDown={isLocationDown}
                  handleToggle={handleToggle}
                />
              </div>
              <input
                placeholder="Location"
                className="w-full py-2 pl-3 pr-10 border rounded-md shadow-sm border-black_color"
              />
            </div>

            {/* Department Filter */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Toggole_icon
                  isLocationDown={isDeptDown}
                  handleToggle={handleToggle2}
                />
              </div>
              <input
                placeholder="All Department"
                className="w-full py-2 pl-3 pr-10 border rounded-md shadow-sm border-black_color"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-4 pb-10 md:pb-[85px]">
          {/* Job Listing 1 */}
          <div
            className="xl:hover:bg-[#f4f4f4] lg:hover:bg-[#f4f4f4] md:hover:bg-[#f4f4f4] transition cursor-pointer rounded-lg xs:hover:bg-white_text_color"
            onClick={handleClick}
          >
            <div
              className="hover:bg-[#f4f4f4] transition cursor-pointer rounded-lg border border-transparent hover:border-gray-200"
              onClick={handleClick}
            >
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col gap-3 py-3 xs:gap-4 xs:py-4 sm:gap-5 sm:py-4 md:flex-row md:items-center">
                  {/* Job Title */}
                  <div className="flex-1 min-w-[50%] xs:min-w-[160px] sm:min-w-[180px]">
                    <h2 className="text-sm xs:text-base sm:text-[17px] md:text-lg font-medium text-black_color font-open_sans">
                      Junior Developer
                    </h2>
                  </div>

                  {/* Location */}
                  <div className="flex-1 min-w-[50%] xs:min-w-[120px] sm:min-w-[140px]">
                    <h2 className="text-sm xs:text-base sm:text-[17px] md:text-lg font-medium text-black_color font-open_sans">
                      Narayanganj
                    </h2>
                  </div>

                  {/* Department - hidden on smallest screens */}
                  <div className="hidden xs:block flex-1 min-w-[50%] xs:min-w-[150px] sm:min-w-[170px]">
                    <h2 className="text-sm xs:text-base sm:text-[17px] md:text-lg font-medium text-black_color font-open_sans">
                      Web Development
                    </h2>
                  </div>

                  {/* Job Type */}
                  <div className="flex-1 min-w-[50%] xs:min-w-[180px] sm:min-w-[200px]">
                    <h2 className="text-sm xs:text-base sm:text-[17px] md:text-lg font-medium text-black_color font-open_sans">
                      Permanent - Full Time
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listing 2 */}
          <div
            className="hover:bg-[#f4f4f4] transition cursor-pointer rounded-lg border border-transparent hover:border-gray-200"
            onClick={handleClick}
          >
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3 py-3 xs:gap-4 xs:py-4 sm:gap-5 sm:py-4 md:flex-row md:items-center">
                {/* Job Title */}
                <div className="flex-1 min-w-[50%] xs:min-w-[160px] sm:min-w-[180px]">
                  <h2 className="text-sm xs:text-base sm:text-[17px] md:text-lg font-medium text-black_color font-open_sans">
                    Junior Developer
                  </h2>
                </div>

                {/* Location */}
                <div className="flex-1 min-w-[50%] xs:min-w-[120px] sm:min-w-[140px]">
                  <h2 className="text-sm xs:text-base sm:text-[17px] md:text-lg font-medium text-black_color font-open_sans">
                    Narayanganj
                  </h2>
                </div>

                {/* Department - hidden on smallest screens */}
                <div className="hidden xs:block flex-1 min-w-[50%] xs:min-w-[150px] sm:min-w-[170px]">
                  <h2 className="text-sm xs:text-base sm:text-[17px] md:text-lg font-medium text-black_color font-open_sans">
                    Web Development
                  </h2>
                </div>

                {/* Job Type */}
                <div className="flex-1 min-w-[50%] xs:min-w-[180px] sm:min-w-[200px]">
                  <h2 className="text-sm xs:text-base sm:text-[17px] md:text-lg font-medium text-black_color font-open_sans">
                    Permanent - Full Time
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career_Opening_part;
