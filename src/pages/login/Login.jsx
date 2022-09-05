import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import LoginSvg from "./asset/login.svg";

function Login() {
  return (
    <div>
      <div className="flex flex-row items-center w-full min-h-screen justify-center">
        <img src={LoginSvg} alt="login pic" />
        <div>
          <form className="flex w-96 flex-col items-center ">
            <h3 className="mb-3 font-bold text-2xl">LOGIN</h3>
            <Input type="text" name="email" placeholder="Email" />
            <Input type="text" name="password" placeholder="Password" />
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
    </div>
  );
}

export default Login;
