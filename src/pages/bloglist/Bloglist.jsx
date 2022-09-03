import Blog from "../../components/blog/Blog";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";

function Bloglist() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-10">
        <div className="p-3 mt-3">
          <h1 className="text-3xl font-bold">BLOG LIST</h1>
        </div>
        <div className="grid grid-cols-3 p-3">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default Bloglist;
