import React from "react";
import SideBar from "../../components/studentSidebar/StudentSidebar";
import Input from "../../components/Input/Input";

function CreateBlog() {
  return (
    <div className="flex w-screen justify-between ">
      <SideBar />
      <form className="flex flex-col w-6/12 pt-44 ">
        <h1 className=" text-3xl font-semibold mb-14 ">CREATE BLOG</h1>
        <Input type="text" name="title" id="" placeholder="Title" />
        <textarea
          name=""
          id=""
          placeholder="description"
          className="p-3 w-full outline-none resize-none bg-gray-100 border-b-4 mt-2 border-blue-400 text-sm"
          cols="44"
          rows="10"
        ></textarea>
        <button className="bg-blue-500 w-fit px-4 py-2 ml-auto mt-6 rounded text-white">
          Publish
        </button>
      </form>
      <div className=" w-64 flex flex-col items-center bg-blue-100 shadow-md shadow-gray-200">
        <div className="mt-28">
          <select
            className=" w-48 bg-zinc-50 border-b-2 p-3 border-blue-400 outline-none text-sm mb-4"
            name=""
            id=""
          >
            <option value="">Select a Category</option>
            <option value="">Web Desgin</option>
            <option value="">Web Development</option>
            <option value="">UI/UX desgin</option>
          </select>
          <Input placeholder="upload feature image" />
          <button className="bg-blue-500 w-fit px-4 py-2 ml-auto mt-6 rounded text-white">
            Save to draft
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
