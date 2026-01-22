import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between">
      
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="flex gap-4">
        <NavLink to="/login" className="hover:text-yellow-400">
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-yellow-500 text-black px-4 py-1 rounded-lg"
        >
          Signup
        </NavLink>
      </div>

    </nav>
  )
}
