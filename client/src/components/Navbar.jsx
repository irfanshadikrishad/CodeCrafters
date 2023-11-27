import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container navBtn">
        <NavLink to="/">vit</NavLink>
        <div className="navBtns">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/service">Services</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
    </nav>
  );
}
