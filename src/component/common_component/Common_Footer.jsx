import React from "react";
import nav_img from "../../assets/Nav_img.png";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Common_Footer = () => {
  const Footer_Item = [
    { id: 1, item: `Services`, path: `Service` },
    { id: 2, item: `Case Studies`, path: `CaseStudies` },
    { id: 3, item: `About Us`, path: "AboutUs" },
    { id: 4, item: `Career`, path: "Career" },
    { id: 5, item: `Contact us`, path: "Contact" }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#5F9BD5] via-[#6e32efc9] to-[#A4C4D2]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-[74px]">
          {/* Logo and Description */}
          <div className="space-y-4">
            <picture>
              <img src={nav_img} alt="Company Logo" className="h-auto w-[120px] lg:w-auto" />
            </picture>
            <p className="text-sm sm:text-base font-semibold font-open_sans text-white_text_color max-w-[319px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun,
            </p>
          </div>

          {/* Menu Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-open_sans text-white_text_color">Menu</h3>
            <ul className="space-y-2">
              {Footer_Item.map((item) => (
                <li key={item.id}>
                  <Link 
                    to={`/${item.path}`}
                    className="text-sm font-semibold transition-all sm:text-base font-open_sans text-white_text_color hover:underline"
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-open_sans text-white_text_color">Office</h3>
            <address className="text-sm sm:text-base font-semibold font-open_sans text-white_text_color not-italic max-w-[180px] sm:max-w-[240px]">
              6/2, S. S Alam Khandaker Road, Masdair, Narayanganj-1400.
            </address>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-open_sans text-white_text_color">Contact Us</h3>
            <div className="space-y-2">
              <a 
                href="mailto:info@traideas.com" 
                className="flex items-center gap-2 text-sm font-semibold sm:text-base font-open_sans text-white_text_color hover:underline"
              >
                <MdMailOutline className="text-lg" />
                info@traideas.com
              </a>
              <a 
                href="tel:+8801922293117" 
                className="flex items-center gap-2 text-sm font-semibold sm:text-base font-open_sans text-white_text_color hover:underline"
              >
                <FaPhoneAlt className="text-base" />
                +8801922293117
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Common_Footer;