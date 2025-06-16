import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import Flag from "react-world-flags";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Copyright_common_part = () => {
  return (
    <div className="bg-black_color">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
          {/* Copyright Text - Left */}
          <div className="flex items-center gap-2 text-sm text-white_text_color sm:text-base">
            <FaRegCopyright className="text-xs sm:text-sm" />
            <span>2021 - 2024 Traideas</span>
          </div>

          {/* Social Icons - Center on mobile, Right on desktop */}
          <div className="flex items-center order-first gap-3 text-2xl sm:text-3xl text-white_text_color sm:order-none">
            <a href="#" className="transition-colors hover:text-blue-400">
              <CiFacebook />
            </a>
            <a href="#" className="transition-colors hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="transition-colors hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="#" className="transition-colors hover:text-blue-600">
              <CiLinkedin />
            </a>
          </div>

          {/* Country Info - Right */}
          <div className="flex items-center gap-2 text-sm text-white_text_color sm:text-base">
            <p className="font-open_sans">We are with you from Bangladesh</p>
            <Flag 
              code="BD" 
              className="w-6 sm:w-7 rounded-[2px]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright_common_part;