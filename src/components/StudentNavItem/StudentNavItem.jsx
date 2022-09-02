import React from "react";
function StudentNavItem({icon, label}){
    return(
        <div>
            <a className='pb-3 flex gap-2 text-gray-600 hover:text-yellow-300' href="#">
            <img src={icon} alt={`a ${label} logo`} />
            {label}
            </a>
        </div>
    )
}

export default StudentNavItem