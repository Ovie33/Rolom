import React from "react";

function ExamInput({name, id, label}) {
    return (
         <div className="flex items-center gap-2">
              <input type="radio" width="" name={name} id={id} />
               <label>{label}</label>
         </div>
    )
}

export default ExamInput 