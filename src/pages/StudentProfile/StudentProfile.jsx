import React, { useState } from 'react'
import AboutComponent from '../../components/AboutComponent/AboutComponent'
import ExamBtn from '../../components/ExamBtn/ExamBtn'
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar'
import StudentSidebar from '../../components/StudentSidebar/StudentSidebar'
import Passport from './passport.svg'
import Cancel from './cancel.svg'
import X from './NavCancel.svg'
import Deposit from '../../components/Deposit/Deposit'
import BarsLogo from './hambuger.svg'


function StudentProfile() {
   const [toggle, setToggle] = useState(false)

  return (
    <div className='flex w-full h-full'>
        <div className={toggle === true? "" : "hidden"}>
        <StudentSidebar Logo={toggle === true? X : BarsLogo}
                onClick={()=> setToggle(!toggle)}/>
        </div>
        <div className='flex flex-col w-full'>
            <StudentNavBar className={toggle === true? "hidden": ""}
            Logo={toggle === true? X : BarsLogo}
                onClick={()=> setToggle(!toggle)}/>
            <div className='px-10'>
            <h6 className='pt-4'>Hi Username!</h6>
            <div className='flex my-5 justify-between'>
            <h1 className='font-bold text-3xl'>Mohammed profile</h1>
            <ExamBtn text='Add New Student'/>
            </div>
            <div className='flex justify-between py-7 shadow-lg mb-7 border h-max mt-10 bg-white'>
                 <div className='px-8'>
                    <img src={Passport} alt="" />
                 </div>
                 <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-2xl'>About Me 
                    <span className='block border-b-4 border-orange-300 w-14'></span>
                    </h1>
                     <AboutComponent Title="Name:" property="Mohammed"/>
                     <AboutComponent Title="Gender:" property="Male"/>
                     <AboutComponent Title="Phone:" property="+23491*****"/>
                     <AboutComponent Title="Date of Birth:" property="13th July, 2000"/>
                     <AboutComponent Title="State of Origin:" property="Delta State"/>
                     <AboutComponent Title="Religion:" property="Christainity"/>
                     <AboutComponent Title="Admission Date:" property="20th Jan, 2022"/>

                     <h1 className='font-bold text-2xl'>Guardian
                     <span className='block border-b-4 border-orange-300 w-14'></span>
                     </h1>
                     <AboutComponent Title="Name:" property="Mohammed Morris"/>
                     <AboutComponent Title="Gender:" property="Male"/>
                     <AboutComponent Title="Phone:" property="+23491*****"/>
                 </div>
                 <div className='w-60 px-3'>
                 <div className="courses">
                 <h1 className='font-bold text-2xl'>Courses
                 <span className='block border-b-4 border-orange-300 w-14'></span>
                 </h1>
                <div className='mt-4'>
                   <div className='flex justify-between items-center w-40'>
                   <p>
                        Graphics Design
                    </p>
                    <a href="#">
                    <img src={Cancel} alt="" />
                    </a>
                   </div>
                    <div className='flex justify-between items-center w-40 pb-3'>
                    <p>
                        Animation
                    </p>
                    <a href="#">
                    <img src={Cancel} alt="" />
                    </a>
                    </div>
                    <div className='flex justify-between items-center w-40 border-t-2 border-black'>
                    <p className='font-bold '>
                       Total
                    </p>
                     <p>
                        # 100000
                     </p>
                    </div>
                 </div>

                 <div className="payment mt-10 ">
                 <h1 className='font-bold text-2xl'>Payments
                 <span className='block border-b-4 border-orange-300 w-14'></span>
                 </h1>
                 <p className='font-bold'>Add payment</p>

                  <form action="">
                   <input type="text" placeholder='Amount' className='w-full border-b-2 border-blue-400 bg-zinc-50 outline-none my-2 p-2 text-sm'/>
                   <ExamBtn text="Add payment" />
                  </form>
                  
                  <div className='my-3'>
                     <Deposit ammount="#4,000"/>
                     <Deposit ammount="#10,000"/>
                     <Deposit ammount="#50,000"/>
                  </div>

                  <div className="total border-y-4 py-1 border-black">
                     <p>
                     <span className='pr-20 font-bold'>Total</span>
                     <span>#64,000</span>
                     </p>
                    </div>                                
                 </div>

                 <p>
                    <span className='font-bold '>Pending Balance</span>
                    <span>#150,000</span> 
                </p>
                </div>
                    
                 </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default StudentProfile