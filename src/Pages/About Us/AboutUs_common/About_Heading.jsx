import React from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";
import About_common from "../../../component/common_component/About_common";
import { FaImage } from "react-icons/fa6";
import CComponent from "../../../component/common_component/CComponent";
import AI_Tecnology_img from "../../../assets/AI_Tecnology_img.png";

const About_Heading = () => {
  return (
    <div className="w-full">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="pt-6 md:pt-9">
          {/* Intro Section */}
          <div>
            <Common_overlay
              title="Why It's Called Traideas"
              style={{ color: "black" }}
            />
          </div>
          
          <div className="mt-4 md:mt-6">
            <h1 className="text-2xl font-bold md:text-3xl font-open_sans text-black_color">
              Heading of your choice
            </h1>
            <p className="mt-4 text-sm font-semibold text-justify md:mt-6 md:text-base font-open_sans text-black_color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mt-8 md:mt-12">
            <div className="flex flex-col gap-6 lg:flex-row md:gap-8 xl:gap-0">
              <div className="w-full lg:w-1/2 xl:pt-6">
                <Common_overlay
                  title="Our Mission"
                  style={{ color: "black" }}
                />
                <h2 className="mt-4 text-2xl font-bold md:mt-6 md:text-3xl font-open_sans text-black_color">
                  Heading of your choice
                </h2>
                <p className="mt-4 text-sm font-semibold text-justify md:mt-6 md:text-base font-open_sans text-black_color xl:w-[600px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-[4/3] lg:rounded-lg xs:rounded-lg xl:rounded-none overflow-hidden">
                <img
                  src={AI_Tecnology_img}
                  alt="Technology"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mt-8 md:mt-12 xl:mt-0">
            <div className="flex flex-col gap-6 lg:flex-row-reverse md:gap-8 xl:gap-0">
              <div className="w-full lg:w-1/2 xl:pl-8 xl:pt-6">
                <Common_overlay
                  title="Our Vision"
                  style={{ color: "black" }}
                />
                <h2 className="mt-4 text-2xl font-bold md:mt-6 md:text-3xl font-open_sans text-black_color">
                  Heading of your choice
                </h2>
                <p className="mt-4 text-sm font-semibold text-justify md:mt-6 md:text-base font-open_sans text-black_color  xl:w-[600px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden xl:rounded-none">
                <img
                  src={AI_Tecnology_img}
                  alt="Technology"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="pb-8 mt-8 md:mt-12">
            <Common_overlay
              title="Some of Our Happiness Moment"
              style={{ color: "black" }}
            />
            <div className="mt-4 md:mt-6">
              <div className="flex gap-4 pb-4 overflow-x-auto xl:overflow-hidden md:gap-6 scrollbar-hide">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[370px] h-[220px] sm:h-[250px] md:h-[304px] rounded-lg md:rounded-xl overflow-hidden"
                  >
                    <img
                      src={AI_Tecnology_img}
                      alt={`Gallery ${i + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Heading;