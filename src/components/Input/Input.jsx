import React from "react";

function Input({ type, name, placeholder, id }) {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="bg-gray-100 p-4 border-b-4 outline-none border-blue-400 w-full mb-4"
      />
    </div>
  );
}

export default Input;
