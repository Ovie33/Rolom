import React from "react";
function StudentNavItem({icon, label}){
    return(
        <div>
            <button className='pb-3 flex gap-2 text-gray-600 hover:text-yellow-300' href="#">
            <img src={icon} alt={`a ${label} logo`} />
            {label}
            </button>
        </div>
    )
}

export default StudentNavItem