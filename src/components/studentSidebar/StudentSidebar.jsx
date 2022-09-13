import React from 'react';
import StudentNavItem from '../StudentNavItem/StudentNavItem'
import dashboardLogo from './dashboard.svg'
import coursesLogo from './courses.svg'
import examinationLogo from './examination.svg'
import blogLogo from './brand-blogger.svg'
import resultLogo from './result.svg'
import AttendanceLogo from './list-check.svg'
import { Link } from "react-router-dom";
import NavItem from "../navItem/NavItem";

function StudentSidebar({onClick, Logo}) {
  return (
     <div className='bg-blue-200 opacity-40 w-64 h-full p-9 flex flex-col shadow-slate-700 shadow-md'>
       <div className='flex justify-between items-center'>
       <h4>LOGO</h4>
        <button onClick={onClick}>
            <img className='' src={Logo} alt="toggle icon" />
        </button>
       </div>
        <div className='h-1/2 flex flex-col justify-between mt-24'>
        <p className='text-black text-xl mb-3 font-bold'>MENU</p>
              <Link to="/dashboard">
              <StudentNavItem icon={dashboardLogo} label='Dashboard'/>
              </Link>
              <Link to="/home">
              <StudentNavItem icon={coursesLogo} label='Courses'/>
              </Link>
              <Link to="#">
              <StudentNavItem icon={blogLogo} label='Blog'/>
              </Link>
              <Link to="/exam">
              <StudentNavItem icon={examinationLogo} label='Examination'/>
              </Link>
              <Link to="/home">
              <StudentNavItem icon={resultLogo} label='Results'/>
              </Link>
              <Link to="/home">
              <StudentNavItem icon={AttendanceLogo} label='Attendance'/>
              </Link>
        </div>
      </div>
  )
}

export default StudentSidebar;
