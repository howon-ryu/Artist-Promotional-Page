import React from "react";
import { NavLink } from "react-router-dom";
import "./gallerynav.css";

const Gallerynav = () => {
  return (
    <div className="gnavbar">
      <div className="gnavCenter">
        <ul className="gnavList">
          <li className="gnavItem">
            <NavLink
              to="/All"
              style={{ textDecoration: "none", color: "gray" }}
            >
              All
            </NavLink>
          </li>
          <li className="gnavItem">
            <NavLink
              to="/Painting"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Painting
            </NavLink>
          </li>
          <li className="gnavItem">
            <NavLink
              to="/Sculpture"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Sculpture
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Gallerynav;
