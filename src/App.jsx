import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Blogs from './components/blogs/Blogs'
import AdminSidebar from './components/adminSidebar/AdminSidebar.jsx'
import ForgotPassword from './components/forgotPassword/ForgotPassword.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AdminSidebar/>
      <ForgotPassword/>
    </div>
  )
}

export default App
