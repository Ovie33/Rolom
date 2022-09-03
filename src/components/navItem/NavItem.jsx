import React from "react";

function NavItem({ label, icon }) {
  return (
    <div>
      <a
        href="#"
        className="p-4 text-black flex hover:text-yellow-500 hover:font-bold"
      >
        {icon}
        {label}
      </a>
    </div>
  );
}

export default NavItem;
