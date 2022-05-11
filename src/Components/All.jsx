import React from "react";
import "./All.css";
import Gallerynav from "./gallerynav";
import { Link, NavLink } from "react-router-dom";
import { onepaint, twopaint, threepaint, fourpaint } from "./Painting";
import { onesculp, twosculp, threesculp, foursculp } from "./Sculpture";
import Navbar from "./Navbar";

const All = () => {
  return (
    <div classname="navbar">
      <Navbar></Navbar>
      <div>
        <Gallerynav />
        {/*<button type="button" class="btn" onclick = {()=>{}}>⚙</button>*/}
        <div class="Allgrid-container">
          <Link to="/All/1">
            <div class="Allgrid-item">{onepaint}</div>
          </Link>
          <Link to="/All/2">
            <div class="Allgrid-item">{twopaint}</div>
          </Link>
          <Link to="/All/3">
            <div class="Allgrid-item">{threepaint}</div>
          </Link>
          <Link to="/All/4">
            <div class="Allgrid-item">{fourpaint}</div>
          </Link>
          <Link to="/All/5">
            <div class="Allgrid-item">{onesculp}</div>
          </Link>
          <Link to="/All/6">
            <div class="Allgrid-item">{twosculp}</div>
          </Link>
          <Link to="/All/7">
            <div class="Allgrid-item">{threesculp}</div>
          </Link>
          <Link to="/All/8">
            <div class="Allgrid-item">{foursculp}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default All;
