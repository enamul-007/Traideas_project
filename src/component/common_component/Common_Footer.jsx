import React from "react";
import nav_img from "../../assets/Nav_img.png";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Common_Footer = () => {
  const Footer_Item = [
    {
      id: 2,
      item: `Services`,
    },

    {
      id: 3,
      item: `Case Studies`,
    },

    {
      id: 4,
      item: `About Us`,
    },

    {
      id: 5,
      item: `Career`,
    },

    {
      id: 6,
      item: `Contact us`,
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-r from-[#5F9BD5] via-[#6e32efc9] to-[#A4C4D2]">
        <div className="container">
          <div className="flex justify-between py-[74px]">
            <div>
              <picture>
                <img src={nav_img} alt="" />
              </picture>

              <h3 className="text-base font-semibold font-open_sans text-white_text_color w-[319px] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididun,
              </h3>
            </div>
            <div>
              <p className="text-lg font-bold font-open_sans text-white_text_color">
                Menu
              </p>
              <ul className="text-base font-semibold cursor-pointer font-open_sans text-white_text_color">
                {Footer_Item?.map((Footer) => (
                  <li key={Footer.id}> {Footer.item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold font-open_sans text-white_text_color">
                Office
              </h3>
              <p className="w-[140px] text-base font-semibold font-open_sans text-white_text_color">
                6/2, S. S Alam Khandaker Road, Masdair, Narayanganj-1400.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold font-open_sans text-white_text_color">
                Contact Us
              </h3>
              <p className="flex items-center gap-1 text-base font-semibold cursor-pointer font-open_sans text-white_text_color">
                <MdMailOutline />
                info@traideas.com
              </p>
              <h4 className="flex items-center gap-1 text-base font-semibold font-open_sans text-white_text_color">
                <FaPhoneAlt />
                +8801922293117
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common_Footer;
