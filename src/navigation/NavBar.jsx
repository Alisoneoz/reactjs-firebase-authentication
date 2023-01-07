import { NavLink } from "react-router-dom"
import Logout from "../components/Logout"

const NavBar = () => {
  return (
    <nav>
      <div className=" bg-neutral-700 text-stone-400 p-4 flex justify-between">
        <div className="flex">      
          <NavLink to="/" className="px-2 font-semibold">Home</NavLink>
          <NavLink to="/register" className="px-2 font-semibold">Register</NavLink>
          <NavLink to="/login" className="px-2 font-semibold">Login</NavLink>
        </div>

        <div className="flex">
          <Logout />
        </div>
      </div>
    </nav>
  )
}

export default NavBar