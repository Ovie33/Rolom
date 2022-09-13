import React from 'react'
import Sidebar from '../../components/StudentSidebar/StudentSidebar'
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar'
import Input from '../../components/Input/Input'
import ExamBtn from '../../components/ExamBtn/ExamBtn'
import CheckBox from '../../components/CheckBox/CheckBox'
import Cancel from './cancel.svg'


function NewStudent() {
  return (
    <div className='flex h-screen'>
        <Sidebar />
           <div className='flex flex-col'>
           <div>
            <StudentNavBar />
            </div>
         <div className='flex gap-10 '>
             <div>
             <form action="">
         <div className='mx-16'>
             <h6 className='pt-4'>Hi Username!</h6>
             <h1 className='font-bold text-3xl py-3'>New Student</h1>
             <p className='py-2 font-bold'>Student Data</p>
             <div  className='' >
                    <div className='flex flex-row gap-6'>
                            <Input type="text" placeholder='Full Name'/>
                            <Input type="tel" placeholder='Phone'/>
                    </div>
                    <div className='flex flex-row gap-6'>
                        <Input type="text" placeholder='Gender'/>
                        <Input type="date" placeholder='Date of Birth'/>
                    </div>
                    <div className='flex flex-row gap-6'>
                        <Input type="text" placeholder='Religion'/>
                        <Input type="text" placeholder='State of Origin'/>
                    </div>
                <Input type="text" placeholder='Address'/>
             </div>
               <p className='py-2 font-bold'>Guardian Data</p>
             <div className='flex gap-6'>
                <div>
                    <Input type="text" placeholder='Full Name'/>
                </div>
                <div>
                    <Input type="tel" placeholder='Phone'/>
                </div>
             </div>
             <div>
             <Input type="text" placeholder='Relationship'/>
             <Input type="text" placeholder='Address'/>
             </div>
         </div>
             </form>
             </div>
         <div className='flex w-64 flex-col items-center justify-center pr-5'>
            <ExamBtn text='Add New Student'/>
            <div className='flex flex-col justify-center relative border-4 my-10 text-center border-dotted border-zinc-500 h-44 p-3'>
               <label>
                <span></span>
                <div>
                <p className='underline text-blue-300 '>Upload passport</p>
                <p>Drag &amp; Drop to upload</p>
                </div>
                <input type="file" name="" id="" className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 hidden' />
               </label>
            </div>
            <div>
                <p className='font-bold'>Courses</p>
                <table>
                    <tr>
                        <td>
                        <CheckBox className="px-2" label='Web Design'/>
                        </td>
                        <td>
                        <a href="">
                            <img src={Cancel} alt="" />
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <CheckBox className="px-2" label='Graphics Design' />
                        </td>
                        <td>
                        <a href="">
                            <img src={Cancel} alt="" />
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <CheckBox className="px-2" label='UI/UX Design' />
                        </td>
                        <td>
                        <a href="">
                            <img src={Cancel} alt="" />
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <CheckBox className="px-2" label='Blockchain' />
                        </td>
                        <td>
                        <a href="">
                            <img src={Cancel} alt="" />
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <CheckBox className="px-2"  label='Python' />
                        </td>
                        <td>
                        <a href="">
                            <img src={Cancel} alt="" />
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <CheckBox className="px-2"  label='PHP MYSQL' />
                        </td>
                        <td>
                        <a href="">
                            <img src={Cancel} alt="" />
                        </a>
                        </td>
                    </tr>
                </table>

            </div>
         </div> 
         </div>
           </div>
    </div>
  )
}

export default NewStudent