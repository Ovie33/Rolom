import React from "react";

function NavItem({ label, icon }) {
  return (
    <div>
      <a className="pb-3 flex gap-2 text-black hover:text-yellow-300" href="#">
        <img src={icon} alt={`a ${label} logo`} />
        {label}
      </a>
    </div>
  );
}

export default NavItem;
