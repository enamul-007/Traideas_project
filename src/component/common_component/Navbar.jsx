import React from "react";
import navimage from "../../assets/Nav_img.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const NavItem = [
    {
      id: 1,
      item: "Service",
      path: "Service",
    },
    {
      id: 2,
      item: "Case Study",
      path: "CaseStudies",
    },
    {
      id: 3,
      item: "About Us",
      path: "AboutUs",
    },
    {
      id: 4,
      item: "Career",
      path: "Career",
    },
  ];

  return (
    <div className={`${className}`}>
      <div className="container px-4 py-4 mx-auto bg-transparent sm:px-6 lg:px-8">
        <div className="h-[50px]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-[140px] sm:w-[175px] h-[38px]">
              <Link to="/">
                <picture>
                  <img 
                    src={navimage} 
                    alt="navimage" 
                    className="object-contain w-full h-full"
                  />
                </picture>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="items-center hidden gap-8 pt-1 lg:flex xl:gap-12">
              <ul className="flex items-center gap-6 cursor-pointer xl:gap-12 text-white_text_color font-open_sans">
                {NavItem?.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      to={`/${nav.path}`}
                      className="text-sm transition-colors duration-200 hover:text-navbar_color xl:text-base"
                    >
                      {nav.item}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 text-sm transition-colors duration-200 bg-transparent border rounded-md xl:px-5 xl:py-2 font-open_sans border-white_text_color text-white_text_color hover:text-navbar_color hover:bg-white_text_color xl:text-base">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white_text_color focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#2a2a2a] z-50 py-4 px-6 shadow-lg">
              <ul className="flex flex-col gap-6 text-white_text_color font-open_sans">
                {NavItem?.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      to={`/${nav.path}`}
                      className="block py-2 transition-colors duration-200 hover:text-navbar_color"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {nav.item}
                    </Link>
                  </li>
                ))}
                <li>
                  <button className="w-full px-5 py-2 transition-colors duration-200 bg-transparent border rounded-md font-open_sans border-white_text_color text-white_text_color hover:text-navbar_color hover:bg-white_text_color">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;