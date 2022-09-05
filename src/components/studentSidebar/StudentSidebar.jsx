import React from "react";
import dashboardLogo from "./assets/dashboard.svg";
import coursesLogo from "./assets/courses.svg";
import examinationLogo from "./assets/examination.svg";
import blogLogo from "./assets/brand-blogger.svg";
import resultLogo from "./assets/result.svg";
import AttendanceLogo from "./assets/list-check.svg";
import { Link } from "react-router-dom";
import NavItem from "../navItem/NavItem";

function StudentSidebar() {
  return (
    <div>
      <div className="flex p-9 h-screen flex-col w-64  bg-blue-200 opacity-40 shadow-slate-700 shadow-md ">
        <h4>LOGO</h4>

        <div className="h-1/2 flex mt-24 flex-col justify-between">
          <h1 className="text-black text-xl mb-3 font-bold">Menu</h1>
          <Link to="/home">
            <NavItem icon={dashboardLogo} label="Dashboard" />
          </Link>
          <Link to="/home">
            <NavItem icon={coursesLogo} label="Courses" />
          </Link>
          <Link to="/home">
            <NavItem icon={blogLogo} label="Blog" />
          </Link>
          <Link to="/home">
            <NavItem icon={examinationLogo} label="Examination" />
          </Link>
          <Link to="/home">
            <NavItem icon={resultLogo} label="Results" />
          </Link>
          <Link to="/home">
            <NavItem icon={AttendanceLogo} label="Attendance" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentSidebar;
