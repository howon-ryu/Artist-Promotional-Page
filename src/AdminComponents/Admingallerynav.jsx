import React from "react";
import { NavLink } from "react-router-dom";
import "./Admingallerynav.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AdminGallerynav = () => {
  return (
    <div className="gnavbar">
      <div className="gnavCenter">
        <ul className="gnavList">
          <li className="gnavItem">
            
          </li>
          <li className="gnavItem">
            <NavLink
              to="/AdminPainting"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Painting
            </NavLink>
          </li>
          <li className="gnavItem">
            <NavLink
              to="/AdminSculpture"
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
export default AdminGallerynav;
