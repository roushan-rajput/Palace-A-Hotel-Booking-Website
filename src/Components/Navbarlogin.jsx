import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between">
      
      <div className="flex gap-6">
        <NavLink to="/Loginhome">Home</NavLink>
        <NavLink to="/Bookingform">Book Rooms</NavLink>
        <NavLink to="">My Bookings</NavLink>
      </div>

      <div className="flex gap-4">
        <NavLink to="" className="hover:text-yellow-400">
          Profile
        </NavLink>
        <NavLink to="/"
          className="bg-yellow-500 text-black px-4 py-1 rounded-lg"
        >
          Logout
        </NavLink>
      </div>

    </nav>
  )
}
