import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const [isPopped, setIsPopped] = useState(false);

  const navmenu = () => {
    setIsPopped((prev) => !prev);
  }
  return (
    <nav>
      <div className="container navBtn">
        <NavLink to="/">CodeCrafters</NavLink>
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
        <div className="navbarMobile">
          <button onClick={navmenu} className="navbarMobileBtn">{<HiBars3 />}</button>
          {isPopped && <div className="navbarMobileContent">
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
          </div>}
        </div>
      </div>
    </nav>
  );
}
