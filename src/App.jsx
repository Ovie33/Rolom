<<<<<<< HEAD
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Siderbar from './components/studentSidebar/StudentSidebar'
import Register from './Pages/Register'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Register />
    </div>
  )
=======
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Login from "./pages/login/Login";
import Navbar from "./components/nav bar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
>>>>>>> d667073609d928220e2110083d30cb52df363220
}

export default App;
