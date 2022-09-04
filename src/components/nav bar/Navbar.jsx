import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row w-full p-3 justify-around text-center items-center absolute bg-blue-300">
      <h1>ICON</h1>
      <div>
        <ul className="flex flex-row">
          <Link to="/home">
            <li className="mx-4">Home</li>
          </Link>
          <Link to="/blogs">
            <li className="mx-4">Courses</li>
          </Link>
          <Link to="/home">
            <li className="mx-4">About</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link to="/login">
          <button className="mx-2 p-2 rounded-md bg-blue-600 text-white">
            Login
          </button>
        </Link>
        <Link to="/home">
          <button className="mx-2 p-2 rounded-md bg-blue-600 text-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
