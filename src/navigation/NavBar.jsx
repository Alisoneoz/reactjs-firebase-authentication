import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className=" bg-neutral-700 text-stone-400 p-4">
      <NavLink to="/" className="px-2 font-semibold">Home</NavLink>
      <NavLink to="/register" className="px-2 font-semibold">Register</NavLink>
      <NavLink to="/login" className="px-2 font-semibold">Login</NavLink>
    </div>
  )
}

export default NavBar