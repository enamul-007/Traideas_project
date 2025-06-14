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
  
  const handleClick =() => {
    navigate ("/Inside_Career");
  };

  return (
    <div>
      <div>
        <div className="container">
          <div>
            <div>
              <div className="pb-10">
                <div className="flex justify-center ">
                  <h3 className="text-3xl font-bold font-open_sans text-black_color pt-9">
                    Current Opening
                  </h3>
                </div>
                <div className="flex justify-between pt-12">
                  <div className="relative flex items-center">
                    <div className="absolute pl-2 text-base">
                      <CiSearch />
                    </div>
                    <input
                      placeholder="search"
                      type="text"
                      id="name"
                      name="name"
                      className=" pl-8 py-1   border border-black_color rounded-md shadow-sm h-full w-[400px]"
                    />
                  </div>

                  <div className="relative flex items-center">
                    <div className="absolute right-0 w-10 pl-1 text-2xl">
                      <Toggole_icon
                        isLocationDown={isLocationDown}
                        handleToggle={handleToggle}
                      />
                    </div>
                    <input
                      placeholder="Location"
                      id="name"
                      name="name"
                      type="text"
                      className=" pl-3 pr-9 py-1  border border-black_color rounded-md shadow-sm fw-full w-[250px]"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <div className="absolute right-0 w-10 pl-1 text-2xl">
                      <Toggole_icon
                        isLocationDown={isDeptDown}
                        handleToggle={handleToggle2}
                      />
                    </div>
                    <input
                      placeholder="All Depertment"
                      id="name"
                      name="name"
                      type="text"
                      className=" pl-3 pr-9 py-1  border border-black_color rounded-md shadow-sm fw-full w-[250px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hoverable Row Outside Container for Full Width BG */}
        <div className="hover:bg-[#f4f4f4] transition  cursor-pointer" 
        onClick={handleClick}
        >
          <div className="container">
            <div className="flex items-start py-4">
              <div>
                <h2 className="text-lg font-medium text-black_color font-open_sans">
                  Junior Developer
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-medium text-black_color font-open_sans pl-[270px]">
                  Narayanganj
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-medium text-black_color font-open_sans pl-[120px]">
                  Web Development
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-medium text-black_color font-open_sans pl-[105px]">
                  Permanent - Full Time
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[85px]">
          <div className="hover:bg-[#f4f4f4] transition cursor-pointer " 
          onClick={handleClick}
          >
            <div className="container">
              <div className="flex items-start py-4">
                <div>
                  <h2 className="text-lg font-medium text-black_color font-open_sans">
                    Junior Developer
                  </h2>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-black_color font-open_sans pl-[270px]">
                    Narayanganj
                  </h2>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-black_color font-open_sans pl-[120px]">
                    Web Development
                  </h2>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-black_color font-open_sans pl-[105px]">
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
