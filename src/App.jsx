import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Login from "./pages/login/Login";
import AdminSidebar from "./components/adminSidebar/AdminSidebar.jsx";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword.jsx";
import Bloglist from "./pages/bloglist/Bloglist";

import Navbar from "./components/nav bar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Bloglist />
        <AdminSidebar />
        <ForgotPassword />
        <Routes>
          <Route path="/home" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
