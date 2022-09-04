import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/blog/Blog";
import Login from "./pages/login/Login";
import AdminSidebar from "./components/adminSidebar/AdminSidebar.jsx";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword.jsx";
import Bloglist from "./pages/bloglist/Bloglist";
import CreateBlog from "./pages/create blog/createBlog";

import Register from "./pages/register/Register"
import Navbar from "./components/nav bar/Navbar";
import Siderbar from './components/studentSidebar/StudentSidebar'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <CreateBlog />
        <Routes>
          <Route path="/blogs" element={<Bloglist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
