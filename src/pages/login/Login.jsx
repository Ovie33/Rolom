import React from "react";
import { Link } from "react-router-dom";
import LoginSvg from "./login.svg";

function Login() {
  return (
    <div>
      <div className="flex flex-row items-center w-full min-h-screen justify-center">
        <img src={LoginSvg} alt="login pic" />
        <form className="flex w-96 flex-col items-center ">
          <h3 className="mb-3 font-bold text-2xl">LOGIN</h3>
          <div className="flex flex-col mb-4 w-full">
            <input
              className="bg-gray-100 p-2 border-b-2 outline-none border-blue-700"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <input
              className="bg-gray-100 p-2 border-b-2 outline-none border-blue-700"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="bg-blue-500 w-fit px-4 py-2 rounded text-white">
            Login
          </button>
          <div className="flex justify-around w-full mt-8">
            <Link to="/forgot">Forgotten password? </Link>
            <Link to="/forgot">Not a User? </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
