import React from "react";
import RegistationRightImg from "../../../assets/RegistationAssets/signup.png";

const RegistationRight = () => {
  return (
    <>
      <div className="w-[40%]">
        <picture>
          <img
            src={RegistationRightImg}
            alt={RegistationRightImg}
            className="w-full h-screen"
          />
        </picture>
      </div>
    </>
  );
};

export default RegistationRight;
