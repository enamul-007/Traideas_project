import React from "react";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Looking_devloper = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/Apply");
  };

  return (
    <div className="bg-[#f8f9fa]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="pt-8 sm:pt-12">
          {/* Main Content */}
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold sm:text-4xl font-open_sans text-black_color">
                Looking for Junior Web Developer
              </h1>

              <p className="mt-6 text-base font-medium text-justify text-black font-open_sans sm:mt-8 sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Key Responsibilities */}
              <div className="mt-10 sm:mt-12">
                <h4 className="text-2xl font-bold font-open_sans text-black_color">
                  Key Responsibilities
                </h4>
                <div className="mt-4 space-y-3">
                  {[
                    "Conduct in-depth research using a variety of online sources, tools, and databases.",
                    "Analyze collected data to extract meaningful insights and identify trends, patterns, and opportunities.",
                    "Prepare detailed, professional reports and create high-quality content based on research findings.",
                    "Design and deliver impactful presentations, including charts, graphs, and other visual aids to present insights effectively.",
                    "Write clear, concise, and engaging content for our portal, ensuring all information is accurate and relevant.",
                    "Lead research projects from start to finish, ensuring timelines and quality standards are met.",
                    "Perform SWOT analysis and develop actionable recommendations to support strategic decision-making.",
                    "Collaborate with cross-functional teams to ensure alignment of research outputs with business goals.",
                    "Stay updated on industry trends, market dynamics, and emerging opportunities to inform ongoing research.",
                  ].map((item, index) => (
                    <p
                      key={index}
                      className="flex items-start text-lg font-medium font-open_sans"
                    >
                      <BsDot className="flex-shrink-0 mt-1 mr-2 text-2xl" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Required Skills & Qualifications */}
              <div className="mt-10 sm:mt-12">
                <h4 className="text-2xl font-bold font-open_sans text-black_color">
                  Required Skills & Qualifications
                </h4>
                <div className="mt-4 space-y-3">
                  {[
                    "4+ years of experience in a research role with demonstrated expertise in data analysis and reporting.",
                    "Bachelor's in Business, Economics, Engineering, or a related field.",
                    "Excellent written and verbal communication skills, with a flair for writing and presenting complex ideas clearly.",
                    "High-level presentation skills with the ability to create compelling visual narratives.",
                    "Strong attention to detail, organizational skills, and the ability to manage multiple projects.",
                    "Familiarity with SEO and digital marketing concepts is an advantage.",
                  ].map((item, index) => (
                    <p
                      key={index}
                      className="flex items-start text-lg font-medium font-open_sans"
                    >
                      <BsDot className="flex-shrink-0 mt-1 mr-2 text-2xl" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-10 sm:mt-12">
                <h4 className="text-2xl font-bold font-open_sans text-black_color">
                  Benefits
                </h4>
                <div className="mt-4 space-y-3">
                  {[
                    "Yearly salary review.",
                    "Performance-based bonus.",
                    "Eid festival bonus (100% of Gross).",
                    "Hybrid work model.",
                    "Complementary meals and snacks.",
                    "Two weekly holidays (Saturday & Thursday).",
                  ].map((item, index) => (
                    <p
                      key={index}
                      className="flex items-start text-lg font-medium font-open_sans"
                    >
                      <BsDot className="flex-shrink-0 mt-1 mr-2 text-2xl" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* About Company */}
              <div className="mt-10 sm:mt-12">
                <h2 className="text-2xl font-bold font-open_sans text-black_color">
                  About Traideas Solutions
                </h2>
                <p className="mt-4 text-base font-normal text-justify font-open_sans sm:text-lg">
                  Enosis Solutions is an engineering powerhouse and trusted
                  partner for software development and testing services. We
                  design and develop web, desktop, and mobile applications for
                  our clients that are compelling, interactive, and easy to use.
                  Since our inception, we have been providing operational gains
                  to startup, emerging, and established organizations throughout
                  North America and Europe.
                </p>
              </div>

              {/* Apply Button (Bottom) */}
              <div className="flex justify-center mt-12 mb-8 sm:mt-16 sm:mb-12">
                <button
                  className="px-8 py-4 text-xl font-semibold text-white transition-colors duration-300 bg-[#005572] rounded-lg font-open_sans hover:bg-[#00415a] focus:outline-none focus:ring-2 focus:ring-[#005572] focus:ring-offset-2 sm:text-2xl"
                  onClick={handleClick}
                >
                  Apply Now
                </button>
              </div>

              {/* Hiring Process */}
              <div className="py-8 border-t border-gray-300 sm:py-12">
                <h5 className="text-xl font-semibold text-center font-open_sans sm:text-2xl">
                  Our Hiring Process
                </h5>
                <div className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-4 sm:gap-4">
                  {[
                    { stage: "Stage 1", title: "Applied" },
                    { stage: "Stage 2", title: "Review" },
                    { stage: "Stage 3", title: "Initial Interview" },
                    { stage: "Stage 4", title: "Discussion Session" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <h2 className="text-xl font-semibold font-roboto_sans">
                        {item.stage}
                      </h2>
                      <p className="mt-2 text-lg font-normal font-roboto_sans">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="xs:pb-5">
              <div className="w-full p-6 bg-gray-200 rounded-lg lg:w-[350px] lg:sticky lg:top-4 lg:h-fit">
                <div className="flex justify-center mt-4">
                  <button
                    className="w-full px-6 py-3 text-xl font-semibold text-white transition-colors duration-300 bg-[#005572] rounded-lg font-open_sans hover:bg-[#00415a] focus:outline-none focus:ring-2 focus:ring-[#005572] focus:ring-offset-2 sm:w-auto sm:px-8 sm:py-4"
                    onClick={handleClick}
                  >
                    Apply Now
                  </button>
                </div>

                <div className="mt-8 space-y-6 ">
                  {[
                    {
                      title: "Application Deadline:",
                      value: "December 1, 2025",
                    },
                    { title: "Department:", value: "Web Development" },
                    {
                      title: "Employment Type:",
                      value: "Permanent - Full Time",
                    },
                    { title: "Location:", value: "Narayanganj" },
                    { title: "Workplace Type:", value: "Hybrid" },
                    {
                      title: "Compensation:",
                      value: "$35,000 - $50,000 / Month",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold font-open_sans text-black_color">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-base font-normal font-open_sans text-[#535353]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Looking_devloper;
