import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import Flag from "react-world-flags";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Copyright_common_part = () => {
  return (
    <div>
      <div className="bg-black_color">
        <div className="container">
          <div className="flex justify-between py-4">
            <div className="flex items-center gap-2 text-white_text_color">
              <FaRegCopyright />
              <p>2021 - 2024 Traideas</p>
            </div>
            <div className="flex items-center gap-2 text-white_text_color">
              <p className="text-base font-normal font-open_sans text-white_text_color">
                We are with you from Bangladesh
              </p>
              <Flag code="BD" style={{ width: "30px", borderRadius: "2px" }} />
            </div>
            <div className="flex items-center gap-3 text-4xl text-white_text_color">
              <CiFacebook />
              <FaInstagram />
              <FaGithub />
              <CiLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright_common_part;
