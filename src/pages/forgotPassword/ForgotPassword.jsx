import React from "react";
import Input from "../../components/Input/Input";
import personLogo from "./assets/forgotpassword.svg";

function forgotPassword() {
  return (
    <div>
      <div className="flex flex-row items-center w-full min-h-screen justify-center">
        <img src={personLogo} alt="Forgot pic" />
        <div>
          <form className="flex w-96 flex-col items-center ">
            <h3 className="mb-4 font-bold text-2xl">FORGOTTEN PASSWORD</h3>
            <Input type="text" name="email" placeholder="Email" />
            <Input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <Input type="text" name="password" placeholder="Password" />
            <button className="bg-blue-500 w-fit px-4 py-2 rounded text-white">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default forgotPassword;
