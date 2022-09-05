import houseLogo from "./assets/house-line.svg";
import studentsLogo from "./assets/people-group.svg";
import coursesLogo from "./assets/book.svg";
import examinationLogo from "./assets/sharp-dashboard-customize.svg";
import staffLogo from "./assets/file-staff-one.svg";
import timtableLogo from "./assets/timetable.svg";
import attendanceLogo from "./assets/heavy-check-mark.svg";
import accountLogo from "./assets/account.svg";
import NavItem from "../navItem/NavItem";

function adminSidebar() {
  return (
    <div>
      <div className="flex p-9 h-screen flex-col w-64  bg-blue-200 opacity-40 shadow-slate-700 shadow-xl ">
        <div className="">LOGO</div>
        <div className=" h-1/2 flex mt-24 flex-col justify-between">
          <h1 className="text-black text-xl mb-3 font-bold">Menu</h1>
          <NavItem label="Dasboard" icon={houseLogo} alt="" />
          <NavItem label="Students" icon={studentsLogo} />
          <NavItem label="Staffs" icon={staffLogo} />
          <NavItem label="Courses" icon={coursesLogo} />
          <NavItem label="Time-Table" icon={timtableLogo} />
          <NavItem label="Attendance" icon={attendanceLogo} />
          <NavItem label="Examinations" icon={examinationLogo} />
        </div>
        <div className=" mt-auto">
          <NavItem label="Account" icon={accountLogo} />
        </div>
      </div>
    </div>
  );
}

export default adminSidebar;
