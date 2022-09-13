import React, { useState } from 'react'
import ExamBtn from '../../components/ExamBtn/ExamBtn'
import ExamInput from '../../components/ExamInput/ExamInput'
import ExamNumbers from '../../components/ExamNumbers/ExamNumbers'
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar'
import StudentSidebar from '../../components/StudentSidebar/StudentSidebar'
import Icon from '../TakeExam/flagIcon.svg'
import X from './NavCancel.svg'
import BarsLogo from './hambuger.svg'


function TakeExam() {
    const [question, setQuestion] = useState([
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 10},
        {number: 11},
        {number: 12},
        {number: 13},
        {number: 14},
        {number: 15}
    ])
    const [toggle, setToggle] = useState(false)

    
  return (
    <div className='flex justify-between w-full h-screen'>
        <div className={toggle === true? '': 'hidden'}>
        <StudentSidebar Logo={toggle === true? X : BarsLogo}
        onClick={()=>{setToggle(!toggle)}}/>
        </div>
       <div className='flex flex-col w-full'>
        <div>
           <StudentNavBar className={toggle===true? "hidden": ""} Logo={toggle===true? X: BarsLogo}
           onClick={()=>{setToggle(!toggle)}}/>
        </div>
         <div className='flex w-full h-full'>
         <div className='px-8 pt-5 flex flex-col justify-between mb-3'>
            <h1 className='font-bold text-3xl'>COURSE TITLE</h1>
            <div>
                <h2 className='mb-3 font-bold text-xl'>QUESTION 1 <span className='inline-block'><img src={Icon} alt="a flag" /></span></h2>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</p>
            </div>
            <div>
            <ExamInput name="option" label="option 1"/>
            <ExamInput name="option" label="option 2"/>
            <ExamInput name="option" label="option 3"/>
            <ExamInput name="option" label="option 4"/>
            </div>
            <div className='flex flex-row flex-wrap gap-4'>
            {question.map((num)=>{
                return(
                        <ExamNumbers number={num.number}/>
                        )
                    })}
                    </div> 

                <div className='flex gap-20'>
                    <ExamBtn text="Prev"/>
                    <ExamBtn text="Next"/>
                </div>
        </div>
        <div className='bg-blue-200 opacity-50 pt-20 w-60 flex flex-col items-center shadow-slate-700 shadow-md'>
               <h3 className='text-xl font-bold text-black'>TIMER</h3>
               <div className='flex text-2xl mb-96' >
                <span>0</span>
                <span>0</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
               </div>
               <ExamBtn text="SUBMIT"/>
        </div>
         </div>
       </div>
    </div>
  )
}

export default TakeExam