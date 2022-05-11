import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navCenter">
        <ul className="navList">
          <li className="navItem">
            <NavLink to="/" style={{ textDecoration: "none", color: "gray" }}>
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/about"
              style={{ textDecoration: "none", color: "gray" }}
            >
              About
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/gallery"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Gallery
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/contact"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
