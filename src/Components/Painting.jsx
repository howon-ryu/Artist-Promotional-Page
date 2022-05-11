import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Painting.css";
import Gallerynav from "./gallerynav";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";
import pic4 from "../img/pic4.jpg";
import pic5 from "../img/pic5.jpg";
import pic6 from "../img/pic6.jpg";
import pic7 from "../img/pic7.jpg";
import pic8 from "../img/pic8.jpg";
import Navbar from "./Navbar";

const onepaint = <img src={pic1} width="200" height="200" />;
const twopaint = <img src={pic2} width="200" height="200" />;
const threepaint = <img src={pic3} width="200" height="200" />;
const fourpaint = <img src={pic4} width="200" height="200" />;
const Painting = () => {
  return (
    <div classname="navbar">
      <Navbar></Navbar>
      <div>
        <Gallerynav />
        {/*<button type="button" class="btn" onclick = {()=>{}}>⚙</button>*/}
        <div class="Paintinggrid-container">
          <div class="Paintinggrid-item">
            <Link to="/Painting/1">
              <img src={pic1} width="200" height="200" />
            </Link>
          </div>
          <div class="Paintinggrid-item">
            <Link to="/Painting/2">
              <img src={pic2} width="200" height="200" />
            </Link>
          </div>
          <div class="Paintinggrid-item">
            <Link to="/Painting/3">
              <img src={pic3} width="200" height="200" />
            </Link>
          </div>
          <div class="Paintinggrid-item">
            <Link to="/Painting/4">
              <img src={pic4} width="200" height="200" />
            </Link>
          </div>
          <div class="Paintinggrid-item">
            <Link to="/Painting/5">
              <img src={pic5} width="200" height="200" />
            </Link>
          </div>
          <div class="Paintinggrid-item">
            <Link to="/Painting/6">
              <img src={pic6} width="200" height="200" />
            </Link>
          </div>
          <div class="Paintinggrid-item">
            <Link to="/Painting/7">
              <img src={pic7} width="200" height="200" />
            </Link>
          </div>
          <div class="Paintinggrid-item">
            <Link to="/Painting/8">
              <img src={pic8} width="200" height="200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { onepaint, twopaint, threepaint, fourpaint };

export default Painting;
