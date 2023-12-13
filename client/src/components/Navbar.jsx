import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <div className="container navBtn">
        <NavLink to="/">&lt; vit &gt;</NavLink>
        <div className="navBtns">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/service">Services</NavLink>
          {isLoggedIn ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
