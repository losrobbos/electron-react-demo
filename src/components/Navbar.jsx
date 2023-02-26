import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return <nav style={{ display: 'flex', justifyContent: "center", gap: 30 }}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </nav>
}