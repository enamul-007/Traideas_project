import  { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import {
  EmailValidator,
  FullNameValidator,
} from "../../../../Utils/Validation";

const RegistationLeft = () => {
  const [Fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [eyeopen, seteyeopen] = useState(false);

  // for error
  const [emailError, setemailError] = useState("");
  const [FullnameError, setFullnameError] = useState("");
  console.log(FullnameError);
  
  const [passwordError, setpasswordError] = useState("");
  

  /**
   * todo :   handleEmail function implement
   * @param ({event})
   */
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  /**
   * todo :   handleFullname function implement
   * @param ({event})
   */
  const handleFullname = (event) => {
    setFullname(event.target.value);
  };

  /**
   * todo :   handlePassword function implement
   * @param ({event})
   */

  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  /**
   * todo : handleeye function implement
   * @param ({event})
   */

  const handleEye = () => {
    seteyeopen(!eyeopen);
  };

  /**
   * todo : handleSubmit function implement
   * @param ({event})
   */

  const handleSubmit = () => {
    if (!email || !EmailValidator(email)) {
      setemailError("Invalid Email");
    } else if (!Fullname || !FullNameValidator(Fullname))  {
      setemailError("");
      setFullnameError("Enter 6-12 charecter");
    } else if (!password) {
      setFullnameError("");
      setpasswordError("Enter Your Password");
    } else {
      setpasswordError("");
      alert("everithing is okk");
    }
  };

  return (
    <>
      <div className=" w-[60%] h-screen">
        <div className="flex items-center justify-center h-full ">
          <div className="flex flex-col gap-y-10">
            <div>
              <h1 className=" font-Nunito text-[34px] font-semibold text-auth_primary_Color">
                Get started with easily register
              </h1>
              <p className="text-xl font-normal font-Nunito text-auth_secondary_Color">
                Free register and you can enjoy it
              </p>
            </div>

            <div className="flex flex-col gap-y-8">
              <div>
                <fieldset className="px-3 border rounded-md border-auth_secondary_Color ">
                  <legend className=" px-4 text-[13px] font-semibold opacity-[70%] text-auth_primary_Color  font-Nunito">
                    Email Address
                  </legend>

                  <input
                    type="email"
                    name="email"
                    onChange={handleEmail}
                    id="full name"
                    className="w-full py-3 pl-3 placeholder:font-Nunito placeholder:text-xl placeholder:font-medium"
                    placeholder="enter your email"
                  />
                </fieldset>
                <span className="text-xl font-medium text-red-500 font-Nunito">
                  {emailError}
                </span>
              </div>

              <div>
                <fieldset className="px-3 border rounded-md border-auth_secondary_Color ">
                  <legend className=" px-4 text-[13px] font-semibold opacity-[70%] text-auth_primary_Color  font-Nunito">
                    Full Name
                  </legend>

                  <input
                    type="text"
                    name="full name"
                    onChange={handleFullname}
                    id="full name"
                    className="w-full py-3 pl-3 placeholder:font-Nunito placeholder:text-xl placeholder:font-medium"
                    placeholder=" enter your name"
                  />
                </fieldset>
                <span className="text-xl font-medium text-red-500 font-Nunito">
                  {FullnameError}
                </span>
              </div>

              <div>
                <fieldset className="px-3 border rounded-md border-auth_secondary_Color ">
                  <legend className=" px-4 text-[13px] font-semibold opacity-[70%] text-auth_primary_Color  font-Nunito">
                    Full Name
                  </legend>

                  <div className="flex items-center">
                    <input
                      className="w-full py-3 pl-3 placeholder:font-Nunito placeholder:text-xl placeholder:font-medium"
                      type={eyeopen ? "text" : "password"}
                      name="password"
                      onChange={handlePassword}
                      id="password"
                      placeholder=" enter password"
                    />
                    <span className="cursor-pointer " onClick={handleEye}>
                      {eyeopen ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </fieldset>
                <span className="text-xl font-medium text-red-500 font-Nunito">
                  {passwordError}
                </span>
              </div>

              <div className="cursor-pointer " onClick={handleSubmit}>
                <button className="w-full py-5 font-semibold text-white rounded-full font-Nunito bg-gradient-to-r from-primaryBlue via-pink-600 via-purple-600 to-red-700">
                  Sign up
                </button>
              </div>
              <div className="flex justify-center pt-9 ">
                <p className="font-bold font-Nunito text-[#03014C]">
                  Already have an account ?
                  <span className="font-Nunito font-bold text-[#EA6C00]">
                    {" "}
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistationLeft;
