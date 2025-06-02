import React from "react";
import navimage from "../../assets/Nav_img.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavItem = [
    {
      id: 1,
      item: "Service",
      path: "Service",
    },
    {
      id: 2,
      item: `Case Study`,
      path: "",
    },
    {
      id: 3,
      item: `About Us`,
      path: "",
    },
    {
      id: 3,
      item: `Career `,
      path: "",
    },
  ];
  return (
    <div className="container bg-transparent">
      <div className="h-[50px]">
        <div className="">
          <div className="flex items-center justify-between">
            <div className=" w-[175px] h-[38px]  ">
              <Link to="/">
                <picture>
                  <img src={navimage} alt="navimage" />
                </picture>
              </Link>
            </div>
            <div className="flex gap-12 pt-1">
              <ul className="flex items-center gap-12 cursor-pointer text-white_text_color font-open_sans ">
                {NavItem?.map((nav) => (
                  <Link
                    to={`/${nav.path}`}
                    className="hover:text-navbar_color"
                    key={nav.id}
                  >
                    {nav.item}
                  </Link>
                ))}
              </ul>
              <button className="px-5 py-2 bg-transparent border rounded-md font-open_sans border-white_text_color text-white_text_color hover:text-navbar_color hover:bg-white_text_color">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
