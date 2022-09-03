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
      <div className="w-64 h-screen bg-blue-200 opacity-40 shadow-slate-700 shadow-xl ">
        <div className="pl-7 pt-7">LOGO</div>
        <div className="pl-7 pt-12">
          <h1 className="text-black text-xl font-bold">Menu</h1>
          <NavItem
            label="Dasboard"
            icon={<img src={houseLogo} alt="" className="pr-2" />}
          />
          <NavItem
            label="Students"
            icon={<img src={studentsLogo} alt="" className="pr-2" />}
          />
          <NavItem
            label="Staffs"
            icon={<img src={staffLogo} alt="" className="pr-2" />}
          />
          <NavItem
            label="Courses"
            icon={<img src={coursesLogo} alt="" className="pr-2" />}
          />
          <NavItem
            label="Time-Table"
            icon={<img src={timtableLogo} alt="" className="pr-2" />}
          />
          <NavItem
            label="Attendance"
            icon={<img src={attendanceLogo} alt="" className="pr-2" />}
          />
          <NavItem
            label="Examinations"
            icon={<img src={examinationLogo} alt="" className="pr-2" />}
          />
        </div>
        <div className="flex pt-52 pl-7">
          <NavItem
            label="Account"
            icon={<img src={accountLogo} alt="" className="pr-2" />}
          />
        </div>
      </div>
    </div>
  );
}

export default adminSidebar;
