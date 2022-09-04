import React from "react";
import SideBar from "../../components/studentSidebar/StudentSidebar";
import Input from "../../components/Input/Input";

function CreateBlog() {
    return(
        <div className="flex" >
            <div className="bg-red-300" >
            <SideBar />
            </div>
            <div className="flex flex-col justify-center items-center" style={{width: 900+'px'}}>
            <Input type='text' name="title" id="" placeholder="Title"/>
            <textarea name="" id="" placeholder="description" className="p-3 outline-none resize-none bg-zinc-50 border-b-2 border-blue-400 text-sm" cols="44" rows="10"></textarea>
            </div>
            <div className="w-60 flex flex-col items-center pt-28 bg-blue-200">
               <div>
               <select className="w-44 bg-zinc-50 border-b-2 border-blue-400 outline-none text-sm" name="" id="">
                <option value="">Select Category</option>
               </select>
               </div>
            </div>
        </div>
    )
}

export default CreateBlog