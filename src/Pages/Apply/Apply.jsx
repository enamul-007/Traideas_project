import { useState } from "react";
import { PiLessThan } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa";

const Apply = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("Attach Résumé / CV");
  const handleClick = () => {
    navigate("/Inside_Career");
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("Attach Résumé / CV");
    }
  };
  return (
    <div className="bg-[#d9d9d94a]">
      <div className="container ">
        <div>
          <div className="flex items-center gap-1 pl-[430px] pt-[72px]">
            <PiLessThan />
            <p
              className="text-sm font-medium underline cursor-pointer font-roboto_sans "
              onClick={handleClick}
            >
              Looking for Junior Web Developer
            </p>
          </div>
          <h2 className="text-4xl font-bold font-roboto_sans pl-[490px] pt-6 pb-[72px]">
            {" "}
            Apply
          </h2>
        </div>
        <div className="pl-[60px] pb-[133px]">
          <div className="shadow bg-white_text_color max-w-[1000px] flex justify-center ml-20px">
            <div className="pb-[72px]">
              <div>
                <div className="pt-[90px] pl-[40px] ">
                  <ol className="list-decimal">
                    <li className="text-2xl font-semibold font-roboto_sans text-black_color ">
                      1. Personal Details
                    </li>
                  </ol>
                  <p className="pt-4 text-lg font-medium text-gray_text_color font-roboto_sans">
                    We'll need these details in order to be able to contact you.
                  </p>

                  <div>
                    <p className="pb-6 text-lg font-medium font-roboto_sans text-black_color pt-9">
                      First Name*
                    </p>
                    <input
                      className="w-[800px] h-full py-3 px-3 border  shadow-sm border-black_color"
                      type="text"
                    />
                  </div>

                  <div>
                    <p className="pb-6 text-lg font-medium font-roboto_sans text-black_color pt-9">
                      Last Name*
                    </p>
                    <input
                      className="w-[800px] h-full py-3 px-3 border  shadow-sm border-black_color"
                      type="text"
                    />
                  </div>

                  <div>
                    <p className="pb-6 text-lg font-medium font-roboto_sans text-black_color pt-9">
                      Email Address*
                    </p>
                    <input
                      className="w-[800px] h-full py-3 px-3 border  shadow-sm border-black_color"
                      type="text"
                    />
                  </div>

                  <div>
                    <p className="pb-6 text-lg font-medium font-roboto_sans text-black_color pt-9">
                      Phone*
                    </p>
                    <input
                      className="w-[800px] h-full py-3 px-3 border  shadow-sm border-black_color"
                      type="text"
                    />
                  </div>
                  <div>
                    <div>
                      <ol className="list-decimal">
                        <li className="pt-12 text-2xl font-semibold font-roboto_sans text-black_color">
                          2. Profile
                        </li>
                      </ol>
                      <h6 className="pt-6 text-lg font-medium font-roboto_sans text-black_color">
                        Resume / CV*
                      </h6>

                      <p className="pt-4 pb-4 text-lg font-medium text-gray_text_color font-roboto_sans">
                        Accepted file formats are .pdf and .docx
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="resume"
                        className="flex items-center justify-center text-gray-500 transition-colors duration-200 border cursor-pointer border-black_color"
                      >
                        <FaPaperclip />
                        <span className="py-10 pl-5">{fileName}</span>
                      </label>
                      <input
                        type="file"
                        id="resume"
                        onChange={handleChange}
                        accept=".pdf,.docx"
                        className="hidden"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <ol className="list-decimal">
                        <li className="pt-12 text-2xl font-semibold font-roboto_sans text-black_color">
                          3. Questions
                        </li>
                      </ol>
                      <h6 className="pt-6 text-lg font-medium font-roboto_sans text-black_color">
                        Personal Summary
                      </h6>

                      <p className="pt-4 pb-4 text-lg font-medium text-gray_text_color font-roboto_sans">
                        Do you have an undergraduate degree? *
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-[50px]">
                        <div className="relative ">
                          <label
                            htmlFor="degree"
                            className="flex h-12 items-center justify-center text-gray-500 transition-colors border cursor-pointer border-black_color w-[380px]"
                          >
                            Yes
                          </label>

                          <input
                            id="degree"
                            type="checkbox"
                            className="absolute w-5 h-5 top-4 left-3"
                          />
                        </div>
                        <div className="relative ">
                          <label
                            htmlFor="NOdegree"
                            className="flex h-12 items-center justify-center text-gray-500 transition-colors border cursor-pointer border-black_color w-[380px]"
                          >
                            No
                          </label>

                          <input
                            id="NOdegree"
                            type="checkbox"
                            className="absolute w-5 h-5 top-4 left-3"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="pt-6 pb-6 text-lg font-medium text-gray_text_color font-roboto_sans">
                            Do you have any prior experiences in this type of
                            role? *
                          </p>
                          <div className="flex gap-[50px]">
                            <div className="relative ">
                              <label
                                htmlFor="experiences"
                                className="flex h-12 items-center justify-center text-gray-500 transition-colors border cursor-pointer border-black_color w-[380px]"
                              >
                                Yes
                              </label>

                              <input
                                id="experiences"
                                type="checkbox"
                                className="absolute w-5 h-5 top-4 left-3"
                              />
                            </div>
                            <div className="relative ">
                              <label
                                htmlFor="noexperiences"
                                className="flex h-12 items-center justify-center text-gray-500 transition-colors border cursor-pointer border-black_color w-[380px]"
                              >
                                No
                              </label>

                              <input
                                id="noexperiences"
                                type="checkbox"
                                className="absolute w-5 h-5 top-4 left-3"
                              />
                            </div>
                          </div>

                          <div>
                            <div>
                              <div>
                                <div>
                                  <ol className="list-decimal">
                                    <li className="pt-12 text-2xl font-semibold font-roboto_sans text-black_color">
                                      4. Submit Application
                                    </li>
                                  </ol>

                                  <p className="pt-4 text-lg font-medium text-gray_text_color font-roboto_sans w-[800px]">
                                    In order to contact you with future jobs
                                    that you may be interested in, we need to
                                    store your personal data.
                                  </p>
                                  <span className="text-lg font-medium text-gray_text_color font-roboto_sans">
                                    If you are happy for us to do so please
                                    click the checkbox below.
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <input
                                    id="information"
                                    className="w-5 h-5"
                                    type="checkbox"
                                  />
                                  <label
                                    className="text-lg font-medium text-gray_text_color font-roboto_sans"
                                    htmlFor="information"
                                  >
                                    Allow us to process your personal
                                    information.
                                  </label>
                                </div>
                              </div>

                              <div className="pt-[72px] pl-[120px]">
                                <button className=" bg-[#005572] px-[200px] py-3 rounded font-roboto_sans font-semibold text-2xl text-white_text_color">
                                  Submit Application
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
