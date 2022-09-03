import React from 'react'
import houseLogo from './house-line.svg'
import studentsLogo from './people-group.svg'
import coursesLogo from './book.svg'
import examinationLogo from './sharp-dashboard-customize.svg'
import staffLogo from './file-staff-one.svg'
import timtableLogo from './timetable.svg'
import attendanceLogo from './heavy-check-mark.svg'
import accountLogo from './account.svg'
import NavItem from '../navItem/NavItem'

function adminSidebar() {
  return (
    <div>
        <div className='w-64 h-screen bg-slate-200'>
            <div className='pl-7 pt-7'>
                LOGO
            </div>
            <div className='pl-7 pt-12'>
                <h1 className='text-gray-500 text-xl font-bold'>Menu</h1>
                <NavItem label="Dasboard" icon={<img src={houseLogo} alt="" className='pr-2'/>}/>
                <NavItem label="Students" icon={<img src={studentsLogo} alt="" className='pr-2'/>}/>
                <NavItem label="Staffs" icon={<img src={staffLogo} alt="" className='pr-2'/>}/>
                <NavItem label="Courses" icon={<img src={coursesLogo} alt="" className='pr-2'/>}/>
                <NavItem label="Time-Table" icon={<img src={timtableLogo} alt="" className='pr-2'/>}/>
                <NavItem label="Attendance" icon={<img src={attendanceLogo} alt="" className='pr-2'/>}/>
                <NavItem label="Examinations" icon={<img src={examinationLogo} alt="" className='pr-2'/>}/>
            </div>
            <div className='flex pt-52 pl-7'>
                <NavItem label="Account" icon={<img src={accountLogo} alt="" className='pr-2'/>}/>
            </div>
        </div>
    </div>
  )
}

export default adminSidebar

