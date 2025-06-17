import React from "react";
import Common_overlay from "../common_component/Common_overlay";
import software_card_img from "../../assets/software_card_img.png";
import software_card_img2 from "../../assets/software_card_img2.png";
import software_card_img3 from "../../assets/software_card_img3.png";
import software_card_img4 from "../../assets/software_card_img4.png";
import software_card_img5 from "../../assets/software_card_img5.png";

const Industry_part = () => {
  return (
    <div
      id="industrySection"
      className="pb-[72px] bg-Industry_bg_color pt-9 transition-colors duration-500  "
    >
      <div className="container xl:overflow-hidden">
        <div>
          <Common_overlay title="Industry We served" />
          <h3 className="font-bold xl:text-3xl font-open_sans text-black_color pt-9 xs:text-xl xs:pt-3">
            Heading of your choice
          </h3>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex xl:gap-9 xs:gap-5 xs:flex-col xl:flex-row">
            {/* =========1============ */}
            <div
              className="bg-gradient-to-r from-[#200E3E] to-[#243468] xl:h-[569px] xl:w-[664px] rounded-3xl mt-5 xs:w-[325px] xs:h-[300px] "
              onMouseEnter={() =>
                document
                  .getElementById("industrySection")
                  .classList.add("bg-[#243468]")
              }
              onMouseLeave={() =>
                document
                  .getElementById("industrySection")
                  .classList.remove("bg-[#243468]")
              }
            >
              <div>
                <picture>
                  <img src={software_card_img} alt="" />
                </picture>
                <div className="xl:w-[568px] xl:p-[48px]  flex flex-col xs:w-[300px] xs:p-2 ">
                  <h2 className="xl:font-bold xl:text-3xl font-open_sans text-white_text_color xs:text-lg xs:font-semibold xs:pl-4">
                    Software
                  </h2>
                  <p className="text-justify xl:font-semibold xl:text-base xl:pt-6 font-open_sans text-white_text_color xs:text-xs xs:pl-4 xs:font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
            {/* ---------2--------- */}
            <div
              className="bg-gradient-to-r from-[#13262C] to-[#0894A6] xl:h-[569px] xl:w-[470px] rounded-3xl xl:mt-5 xs:w-[325px] xs:h-[300px] xs:mt-2"
              onMouseEnter={() =>
                document
                  .getElementById("industrySection")
                  .classList.add("bg-[#0894A6]")
              }
              onMouseLeave={() =>
                document
                  .getElementById("industrySection")
                  .classList.remove("bg-[#0894A6]")
              }
            >
              <div>
                <div className="xl:w-[568px] xl:p-[48px]  flex flex-col xs:w-[300px] xs:p-4">
                  <h2 className="xl:font-bold xl:text-3xl font-open_sans text-white_text_color xs:text-xl">
                    Startup
                  </h2>
                  <p className="xl:text-base xl:font-semibold text-justify font-open_sans text-white_text_color xl:w-[374px] xs:w-[250px] xl:pt-6 xs:pt-2 xs:text-xs xs:font-medium  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div>
                <picture>
                  <img src={software_card_img2} alt="" />
                </picture>
              </div>
            </div>

            {/* =========3=========== */}
            <div
              className="bg-gradient-to-r from-[#200E3E] to-[#243468] xl:h-[569px] xl:w-[664px] rounded-3xl xs:w-[325px] xs:h-[300px] xs:mt-[63px] xl:mt-0 "
              onMouseEnter={() =>
                document
                  .getElementById("industrySection")
                  .classList.add("bg-[#200E3E]")
              }
              onMouseLeave={() =>
                document
                  .getElementById("industrySection")
                  .classList.remove("bg-[#200E3E]")
              }
            >
              <div>
                <picture>
                  <img src={software_card_img3} alt={software_card_img3} />
                </picture>
                <div className="xl:w-[568px] xl:p-[48px] xs:w-[375px]  flex flex-col">
                  <h2 className="xl:font-bold xl:text-3xl font-open_sans text-white_text_color xs:font-bold xs:text-2xl xs:pl-4">
                    Telco
                  </h2>
                  <p className="text-justify xl:font-semibold xl:text-base xl:pt-6 font-open_sans text-white_text_color xs:text-xs xs:font-normal xl:w-[374px] xs:w-[300px] xs:pl-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex xl:gap-9 xs:flex-col xl:flex-row">
            {/* ==========4========== */}
            <div
              className="bg-gradient-to-r from-[#13262C] to-[#0894A6] xl:h-[569px] xl:w-[470px] rounded-3xl xl:mt-4 xs:w-[325px] xs:h-[300px] "
              onMouseEnter={() =>
                document
                  .getElementById("industrySection")
                  .classList.add("bg-[#0894A6]")
              }
              onMouseLeave={() =>
                document
                  .getElementById("industrySection")
                  .classList.remove("bg-[#0894A6]")
              }
            >
              <div>
                <div className="xl:w-[568px] xl:p-[48px]  flex flex-col">
                  <h2 className="xl:font-bold xl:text-3xl font-open_sans text-white_text_color xs:font-semibold xs:pl-5 xs:text-xl xs:pt-5">
                    Education
                  </h2>
                  <p className="xl:text-base xl:font-semibold text-justify font-open_sans text-white_text_color xl:w-[374px] xl:pt-6  xs:w-[300px] xs:pl-5 xs:text-xs xs:font-normal xs:pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div>
                <picture>
                  <img src={software_card_img4} alt="" />
                </picture>
              </div>
            </div>

            {/* ============5========= */}

            <div
              className="bg-gradient-to-r from-[#200E3E] to-[#243468] xl:h-[569px] xl:w-[664px] rounded-3xl xl:mt-4 xs:mt-[65px] xs:w-[325px] xs:h-[300px]"
              onMouseEnter={() =>
                document
                  .getElementById("industrySection")
                  .classList.add("bg-[#243468]")
              }
              onMouseLeave={() =>
                document
                  .getElementById("industrySection")
                  .classList.remove("bg-[#243468]")
              }
            >
              <div>
                <picture>
                  <img src={software_card_img5} alt="" />
                </picture>
                <div className="xl:w-[568px] xl:p-[48px]  flex flex-col xs:w-[300px]">
                  <h2 className="xl:font-bold xl:text-3xl font-open_sans text-white_text_color xs:font-semibold xs:text-xl xs:py-1 xs:pl-5">
                    Healthcare
                  </h2>
                  <p className="text-justify xs:font-normal xl:font-semibold xl:text-base xl:pt-6 font-open_sans text-white_text_color xs:text-xs xs:pl-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
            {/* =========6=========== */}
            <div
              className="bg-gradient-to-r from-[#13262C] to-[#0894A6] xl:h-[569px] xl:w-[470px] rounded-3xl xs:mt-5 xs:w-[325px] xl:mt-0 "
              onMouseEnter={() =>
                document
                  .getElementById("industrySection")
                  .classList.add("bg-[#0894A6]")
              }
              onMouseLeave={() =>
                document
                  .getElementById("industrySection")
                  .classList.remove("bg-[#0894A6]")
              }
            >
              <div>
                <div className="xl:w-[568px] xl:p-[48px]  flex flex-col xs:w-[300px] xs:pt-4 xs:pl-5">
                  <h2 className="xs:text-xl xl:font-bold xl:text-3xl font-open_sans text-white_text_color xs:font-semibold ">
                    E- Commerce
                  </h2>
                  <p className="xl:text-base xl:font-semibold text-justify font-open_sans text-white_text_color xl:w-[374px] xl:pt-6 xs:w-[300px] xs:text-xs xs:pb-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div>
                <picture>
                  <img src={software_card_img4} alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry_part;
