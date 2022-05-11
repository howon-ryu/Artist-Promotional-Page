import { NavLink } from "react-router-dom";
import "./Adminnavbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navCenter">
        <ul className="navList">
          <li className="navItem">
            {/*<Link to="/Admin" style={{ textDecoration: "none", color: "gray" }}>
              Login
            </Link>
            */}
          </li>
          <li className="navItem">
            <NavLink
              to="/Adminabout"
              style={{ textDecoration: "none", color: "gray" }}
            >
              About
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/Admingallery"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Gallery
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/Admincontact"
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
