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
    setFileName(file ? file.name : "Attach Résumé / CV");
  };

  return (
    <div className="bg-[#d9d9d94a] min-h-screen">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="pt-8 sm:pt-12">
          <div className="flex items-center justify-center gap-1 sm:justify-start lg:pl-[40%] md:pl-[30%] sm:pl-[30%]">
            <PiLessThan className="cursor-pointer" onClick={handleClick} />
            <p
              className="text-sm font-medium underline cursor-pointer font-roboto_sans "
              onClick={handleClick}
            >
              Looking for Junior Web Developer
            </p>
          </div>
          <h2 className="pt-4 pb-8 text-3xl font-bold text-center sm:text-4xl font-roboto_sans sm:text-left sm:pb-12 lg:pl-[48%] xl:pl-[44%] md:pl-[40%] sm:pl-[40%]">
            Apply
          </h2>
        </div>

        {/* Form Section */}
        <div className="pb-8 sm:pb-16">
          <div className="max-w-4xl mx-auto overflow-hidden bg-white_text_color">
            <div className="p-4 sm:p-8 md:p-12">
              {/* Section 1: Personal Details */}
              <div className="mb-8">
                <ol className="list-decimal list-inside">
                  <li className="text-xl font-semibold text-black sm:text-2xl font-roboto_sans">
                    1. Personal Details
                  </li>
                </ol>
                <p className="pt-2 text-base font-medium text-gray-600 sm:pt-4 sm:text-lg font-roboto_sans">
                  We'll need these details in order to be able to contact you.
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <label className="block mb-2 text-base font-medium text-black sm:text-lg font-roboto_sans">
                      First Name*
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded shadow-sm "
                      type="text"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-base font-medium text-black sm:text-lg font-roboto_sans">
                      Last Name*
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded shadow-sm"
                      type="text"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-base font-medium text-black sm:text-lg font-roboto_sans">
                      Email Address*
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded shadow-sm"
                      type="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-base font-medium text-black sm:text-lg font-roboto_sans">
                      Phone*
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded shadow-sm "
                      type="tel"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Profile */}
              <div className="mb-8">
                <ol className="list-decimal list-inside">
                  <li className="text-xl font-semibold text-black sm:text-2xl font-roboto_sans">
                    2. Profile
                  </li>
                </ol>

                <div className="mt-6">
                  <label className="block mb-2 text-base font-medium text-black sm:text-lg font-roboto_sans">
                    Resume / CV*
                  </label>
                  <p className="mb-4 text-base font-medium text-gray-600 sm:text-lg font-roboto_sans">
                    Accepted file formats are .pdf and .docx
                  </p>

                  <label
                    htmlFor="resume"
                    className="flex items-center justify-between p-4 xl:pl-[300px]  transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-black_color xl:py-10"
                  >
                    <div className="flex items-center">
                      <FaPaperclip className="mr-3 text-gray-500" />
                      <span className=" text-gray_text_color">{fileName}</span>
                    </div>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    onChange={handleChange}
                    accept=".pdf,.docx"
                    className="hidden"
                    required
                  />
                </div>

                <div className="mt-8">
                  <label className="block mb-2 text-base font-medium text-black sm:text-lg font-roboto_sans">
                    Personal Summary
                  </label>
                  <p className="mb-4 text-base font-medium text-gray-600 sm:text-lg font-roboto_sans">
                    This section is optional. Use it to tell us a little more
                    about yourself.
                  </p>

                  <textarea
                    className="w-full h-40 p-3 border border-gray-300 rounded shadow-sm "
                    placeholder="Write something here..."
                  ></textarea>
                </div>
              </div>

              {/* Section 3: Questions - With Box Style Yes/No Buttons */}
              <div className="mb-8">
                <ol className="list-decimal list-inside">
                  <li className="text-xl font-semibold text-black sm:text-2xl font-roboto_sans">
                    3. Questions
                  </li>
                </ol>

                <div className="mt-6 space-y-8">
                  {/* Degree Question */}
                  <div>
                    <p className="mb-4 text-base font-medium text-gray-600 sm:text-lg font-roboto_sans">
                      Do you have an undergraduate degree? *
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row xl:gap-[40px]">
                      {/* Yes Button */}
                      <div className="relative">
                        <input
                          type="radio"
                          name="degree"
                          id="degreeYes"
                          className="absolute w-5 h-5 top-4 left-3"
                          required
                        />
                        <label
                          htmlFor="degreeYes"
                          className="flex items-center justify-center h-12 px-6 border border-black rounded-none cursor-pointer peer-checked:bg-gray-200 w-full sm:w-[255px] xl:w-[380px]  md:w-[295px] lg:w-[390px] "
                        >
                          <span className="text-gray-700">Yes</span>
                        </label>
                      </div>

                      {/* No Button */}
                      <div className="relative">
                        <input
                          type="radio"
                          name="degree"
                          id="degreeNo"
                          className="absolute w-5 h-5 top-4 left-3"
                        />
                        <label
                          htmlFor="degreeNo"
                          className="flex items-center justify-center h-12 px-6 border border-black rounded-none cursor-pointer peer-checked:bg-gray-200 w-full sm:w-[255px]  xl:w-[380px]  md:w-[295px] lg:w-[390px]"
                        >
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Experience Question */}
                  <div>
                    <p className="mb-4 text-base font-medium text-gray-600 sm:text-lg font-roboto_sans">
                      Do you have any prior experiences in this type of role? *
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row xl:gap-[40px]">
                      {/* Yes Button */}
                      <div className="relative">
                        <input
                          type="radio"
                          name="experience"
                          id="expYes"
                          className="absolute w-5 h-5 top-4 left-3"
                          required
                        />
                        <label
                          htmlFor="expYes"
                          className="flex items-center justify-center h-12 px-6 border border-black rounded-none cursor-pointer peer-checked:bg-gray-200 w-full sm:w-[255px] xl:w-[380px] md:w-[295px] lg:w-[390px]"
                        >
                          <span className="text-gray-700">Yes</span>
                        </label>
                      </div>

                      {/* No Button */}
                      <div className="relative">
                        <input
                          type="radio"
                          name="experience"
                          id="expNo"
                          className="absolute w-5 h-5 top-4 left-3"
                        />
                        <label
                          htmlFor="expNo"
                          className="flex items-center justify-center h-12 px-6 border border-black rounded-none cursor-pointer peer-checked:bg-gray-200 w-full sm:w-[255px] xl:w-[380px]  md:w-[295px] lg:w-[390px]"
                        >
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Submit Application */}
              <div>
                <ol className="list-decimal list-inside">
                  <li className="text-xl font-semibold text-black sm:text-2xl font-roboto_sans">
                    4. Submit Application
                  </li>
                </ol>

                <div className="mt-6">
                  <p className="mb-4 text-base font-medium text-gray-600 sm:text-lg font-roboto_sans">
                    In order to contact you with future jobs that you may be
                    interested in, we need to store your personal data. If you
                    are happy for us to do so please click the checkbox below.
                  </p>

                  <div className="flex items-start space-x-3">
                    <input
                      id="information"
                      type="checkbox"
                      className="w-5 h-5 mt-1 text-white_text_color "
                    />
                    <label
                      htmlFor="information"
                      className="text-base font-medium text-gray-600 sm:text-lg font-roboto_sans"
                    >
                      Allow us to process your personal information.
                    </label>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#005572] px-8 sm:px-16 py-3 font-roboto_sans font-semibold text-lg sm:text-xl text-white rounded-xl hover:bg-[#00415a] transition-colors"
                  >
                    Submit Application
                  </button>
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
