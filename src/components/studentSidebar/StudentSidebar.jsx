import React from 'react';
import StudentNavItem from '../StudentNavItem/StudentNavItem'
import dashboardLogo from '../studentSidebar/dashboard.svg'
import coursesLogo from '../studentSidebar/courses.svg'
import examinationLogo from '../studentSidebar/examination.svg'
import blogLogo from '../studentSidebar/brand-blogger.svg'
import resultLogo from '../studentSidebar/result.svg'
import AttendanceLogo from '../studentSidebar/list-check.svg'

function StudentSidebar() {
  return (
    <div>
      <div className='bg-blue-200 w-2/12 h-screen p-5'>
        <h4 className='mt-5'>LOGO</h4>
        <p className='text-zinc-400 mt-10'>MENU</p>
        <div className='flex flex-col pl-3 pt-4'>
              <StudentNavItem icon={dashboardLogo} label='Dashboard'/>
              <StudentNavItem icon={coursesLogo} label='Courses'/>
              <StudentNavItem icon={blogLogo} label='Blog'/>
              <StudentNavItem icon={examinationLogo} label='Examination'/>
              <StudentNavItem icon={resultLogo} label='Results'/>
              <StudentNavItem icon={AttendanceLogo} label='Attendance'/>
        </div>
    </div>
    </div>
  )
}

export default StudentSidebar