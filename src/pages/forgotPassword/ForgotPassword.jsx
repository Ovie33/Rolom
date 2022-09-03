import React from "react";
import personLogo from "./assets/forgotpassword.svg";

function forgotPassword() {
  return (
    <div className="lg:flex justify-center items-center h-screen pl-40 pr-40">
      <div>
        <img src={personLogo} alt="" />
      </div>
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-2xl font-bold mb-8">Forgotten Password</h1>
        <form className="flex w-96 flex-col items-center">
          <div className="flex flex-col mb-4 w-full">
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-100 p-2 border-b-2 outline-none border-blue-700"
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-gray-100 p-2 border-b-2 outline-none border-blue-700"
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <input
              type="text"
              placeholder="New Password"
              className="bg-gray-100 p-2 border-b-2 outline-none border-blue-700"
            />
          </div>
          <button className="bg-blue-500 pt-3 pb-3 pl-4 pr-4 lg:pl-4 lg:pr-4 rounded-lg text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default forgotPassword;
