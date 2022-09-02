import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Navbar from "./components/nav bar/Navbar";
import Siderbar from './components/studentSidebar/StudentSidebar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Register />
        {/* <Siderbar /> */}
        <Routes>
          <Route path="/home" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
