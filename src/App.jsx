import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Staggeredmenu"


import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Signup from "./Pages/Signup/Signup"
import Login from "./Pages/Login/Login"
import Loginhome from "./Pages/Loginhome/Loginhome"
import Bookingform from "./Pages/Bookingform/Bookingform"
import Booking from "./Pages/Booking/Booking"
import Logout from "./Pages/Home/Home"





export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Loginhome" element={<Loginhome />} />
        <Route path="/Bookingform" element={<Bookingform />} />
        <Route path="/Booking" element={<Booking />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}
