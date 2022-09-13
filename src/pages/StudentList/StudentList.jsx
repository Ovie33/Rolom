import React from 'react'
import Sidebar from '../../components/StudentSidebar/StudentSidebar'
import ListItems from '../../components/StudentListTable/StudentListItems'
import Input from '../../components/Input/Input'
import ExamBtn from '../../components/ExamBtn/ExamBtn'
import Pagination from '../../components/Pagination/Pagination'
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar'




function StudentList() {
  return (
    <div className='flex'>
       <Sidebar />
      <div className='mx-10'>
        <StudentNavBar />
          <h6 className='pt-4'>Hi Username!</h6>
          <div className='flex py-4 justify-between'>
          <h1 className='font-bold text-3xl'>Students</h1>
          <ExamBtn text="Add New Student"/>
          </div>
          <div className='flex justify-between items-center content-center'>
              <div className='flex items-center relative w-fit'>
                <Input type="text" name="search" id="" placeholder="Search Students"/>
                <img src={SearchIcon} alt="search icon" className='absolute right-2 bottom-1/2'/>
              </div>
              <div className='flex items-center relative w-fit mb-4'>
                <img src={FilterIcon} alt="fliter icon" className='absolute left-2 bottom-1/4' />
                <select name="filter" className='bg-zinc-50 py-2 px-11 font-bold' id="">
                  <option value="filter">Filter</option>
                </select>
              </div>
          </div>
        <ListItems />
           <div className='float-right'>
            <Pagination />
           </div>
        </div>
    </div>
  )
}

export default StudentList