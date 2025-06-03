import React from "react";
import About_img from "../../../assets/About_img.png"

const About_us = () => {
  return (
    <div>
      <div >
        <div className="container">
          <div>
            <div>
              <h2 className="pt-12 text-4xl font-bold font-open_sans text-black_color">About us</h2>
              <p className="justify-center text-base font-semibold font-open_sans text-black_color py-9 w-[770px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Lorem ipsum dolor sit amet,
                consectetur a
              </p>
            </div>
          </div>
          <div>
            <picture>
                <img src={About_img} alt={About_img} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
