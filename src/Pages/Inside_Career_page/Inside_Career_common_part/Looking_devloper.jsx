import React from "react";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Looking_devloper = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/Apply");
  };

  return (
    <div>
      <>
        <div>
          <div className="container ">
            <div className="relative pt-[50px] ">
              <div>
                <h1 className="text-4xl font-bold font-open_sans text-black_color">
                  Looking for Junior Web Developer
                </h1>
                <p className="text-base font-medium text-justify text-black font-open_sans w-[674px] pt-[64px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="w-[600px]  ">
                  <h4 className="text-2xl font-bold font-open_sans text-black_color pt-[76px]">
                    Key Responsibilities
                  </h4>
                  <div>
                    <p className="flex pt-6 text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "28px" }} />
                      Conduct in-depth research using a variety of online
                      sources, tools, and databases.
                    </p>
                  </div>
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "30px" }} />
                      Analyze collected data to extract meaningful insights and
                      identify trends, patterns, and opportunities.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "30px" }} />
                      Prepare detailed, professional reports and create
                      high-quality content based on research findings.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "35px" }} />
                      Design and deliver impactful presentations, including
                      charts, graphs, and other visual aids to present insights
                      effectively.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "35px" }} />
                      Write clear, concise, and engaging content for our portal,
                      ensuring all information is accurate and relevant.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "30px" }} />
                      Lead research projects from start to finish, ensuring
                      timelines and quality standards are met.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "35px" }} />
                      Perform SWOT analysis and develop actionable
                      recommendations to support strategic decision-making.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "30px" }} />
                      Collaborate with cross-functional teams to ensure
                      alignment of research outputs with business goals.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "32px" }} />
                      Stay updated on industry trends, market dynamics, and
                      emerging opportunities to inform ongoing research.
                    </p>
                  </div>
                </div>
                <div className="w-[327px] h-[600px] bg-[#D9D9D9] absolute top-[60px] right-[0px]     rounded">
                  <div>
                    <div className="pt-[64px] pl-[75px] ">
                      <button
                        className=" bg-[#005572] px-8 py-4 rounded font-open_sans font-semibold text-2xl text-white_text_color"
                        onClick={handleClick}
                      >
                        Apply Now
                      </button>
                    </div>

                    <div className="pl-[45px]">
                      <div>
                        <h3 className="text-xl font-semibold font-open_sans text-black_color pt-[40px]">
                          Application Deadline:
                        </h3>
                        <p className="text-base font-normal font-open_sans text-[#535353] pt-1">
                          December 1, 2025
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-open_sans text-black_color pt-[15px]">
                          Department:
                        </h3>
                        <p className="text-base font-normal font-open_sans text-[#535353] pt-1">
                          Web Development
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-open_sans text-black_color pt-[15px]">
                          Employment Type:
                        </h3>
                        <p className="text-base font-normal font-open_sans text-[#535353] pt-1">
                          Permanent - Full Time
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-open_sans text-black_color pt-[15px]">
                          Location:
                        </h3>
                        <p className="text-base font-normal font-open_sans text-[#535353] pt-1">
                          Narayanganj
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-open_sans text-black_color pt-[15px]">
                          Workplace Type:
                        </h3>
                        <p className="text-base font-normal font-open_sans text-[#535353] pt-1">
                          Hybrid
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-open_sans text-black_color pt-[15px]">
                          Compensation:
                        </h3>
                        <p className="text-base font-normal font-open_sans text-[#535353] pt-1">
                          $ 35,000 - $ 50,000 / Month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[600px]  ">
                  <h4 className="text-2xl font-bold font-open_sans text-black_color pt-[76px]">
                    Require Skills & Qualifications
                  </h4>
                  <div>
                    <p className="flex pt-6 text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "30px" }} />
                      4+ years of experience in a research role with
                      demonstrated expertise in data analysis and reporting.
                    </p>
                  </div>
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "22px" }} />
                      Bachelor’s in Business, Economics, Engineering, or a
                      related field.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "30px" }} />
                      Excellent written and verbal communication skills, with a
                      flair for writing and presenting complex ideas clearly
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "25px" }} />
                      High-level presentation skills with the ability to create
                      compelling visual narratives.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "28px" }} />
                      Strong attention to detail, organizational skills, and the
                      ability to manage multiple projects.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "22px" }} />
                      Familiarity with SEO and digital marketing concepts is an
                      advantage.
                    </p>
                  </div>{" "}
                </div>
                <div className="w-[600px]  ">
                  <h4 className="text-2xl font-bold font-open_sans text-black_color pt-[76px]">
                    Benefits
                  </h4>
                  <div>
                    <p className="flex pt-6 text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "25px" }} />
                      Yearly salary review.
                    </p>
                  </div>
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "25px" }} />
                      Performance-based bonus.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "25px" }} />
                      Eid festival bonus (100% of Gross).
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "25px" }} />
                      Hybrid work model.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "25px" }} />
                      Complementary meals and snacks.
                    </p>
                  </div>{" "}
                  <div>
                    <p className="flex text-lg font-medium font-open_sans">
                      <BsDot style={{ fontSize: "25px" }} />
                      Two weekly holidays (Saturday & Thursday).
                    </p>
                  </div>{" "}
                </div>
                <div className="pt-[76px] w-[500px] ">
                  <h2 className="text-2xl font-bold font-open_sans text-black_color ">
                    About Traideas Solutions
                  </h2>
                  <p className="pt-6 text-sm font-normal text-justify font-open_sans">
                    Enosis Solutions is an engineering powerhouse and trusted
                    partner for software development and testing services. We
                    design and develop web, desktop, and mobile applications for
                    our clients that are compelling, interactive, and easy to
                    use. Since our inception, we have been providing operational
                    gains to startup, emerging, and established organizations
                    throughout North America and Europe.
                  </p>
                </div>

                <div className="px-[40%] py-[72px]" 
                onClick={handleClick}
                >
                  <button className=" bg-[#005572] px-8 py-4 rounded font-open_sans font-semibold text-2xl text-white_text_color">
                    Apply Now
                  </button>
                </div>

                <div className="pb-[72px]">
                  <div className="h-[1.5px] w-[1170px] bg-[#5353536f] "></div>
                </div>
                <div className="pb-[72px]">
                  <h5 className="text-xl font-semibold font-open_sans pl-[450px]">
                    Our Hiring Process
                  </h5>
                  <div className="flex px-[183px] justify-between">
                    <div className="pt-12">
                      <h2 className="text-xl font-semibold font-roboto_sans">
                        Stage 1
                      </h2>
                      <p className="pt-3 text-lg font-normal font-roboto_sans">
                        Applied
                      </p>
                    </div>
                    <div className="pt-12">
                      <h2 className="text-xl font-semibold font-roboto_sans">
                        Stage 2
                      </h2>
                      <p className="pt-3 text-lg font-normal font-roboto_sans">
                        Review
                      </p>
                    </div>
                    <div className="pt-12">
                      <h2 className="text-xl font-semibold font-roboto_sans">
                        Stage 3
                      </h2>
                      <p className="pt-3 text-lg font-normal font-roboto_sans">
                        Initial Interview
                      </p>
                    </div>
                    <div className="pt-12">
                      <h2 className="text-xl font-semibold font-roboto_sans">
                        Stage 4
                      </h2>
                      <p className="pt-3 text-lg font-normal font-roboto_sans">
                        Discussion Session
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Looking_devloper;
