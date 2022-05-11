import React from "react";
import "./Sculpture.css";
import Gallerynav from "./gallerynav";
import Navbar from "./Navbar";
import scul1 from "../img/scul1.jpg";
import scul2 from "../img/scul2.jpg";
import scul3 from "../img/scul3.jpg";
import scul4 from "../img/scul4.jpg";
import scul5 from "../img/scul5.jpg";
import scul6 from "../img/scul6.jpg";
import scul7 from "../img/scul7.jpg";
import scul8 from "../img/scul8.jpg";
import { Link } from "react-router-dom";

const onesculp = <img src={scul1} width="200" height="200" />;
const twosculp = <img src={scul2} width="200" height="200" />;
const threesculp = <img src={scul3} width="200" height="200" />;
const foursculp = <img src={scul4} width="200" height="200" />;

const Sculpture = () => {
  return (
    <div classname="navbar">
      <Navbar></Navbar>
      <div>
        <Gallerynav />
        {/*<button type="button" class="btn" onclick = {()=>{}}>⚙</button>*/}
        <div class="Sculpturegrid-container">
          <div class="Sculpturegrid-item">
            <Link to="/Sculpture/1">
              <img src={scul1} width="200" height="200" />
            </Link>
          </div>
          <div class="Sculpturegrid-item">
            <Link to="/Sculpture/2">
              <img src={scul2} width="200" height="200" />
            </Link>
          </div>
          <div class="Sculpturegrid-item">
            <Link to="/Sculpture/3">
              <img src={scul3} width="200" height="200" />
            </Link>
          </div>
          <div class="Sculpturegrid-item">
            <Link to="/Sculpture/4">
              <img src={scul4} width="200" height="200" />
            </Link>
          </div>
          <div class="Sculpturegrid-item">
            <Link to="/Sculpture/5">
              <img src={scul5} width="200" height="200" />
            </Link>
          </div>
          <div class="Sculpturegrid-item">
            <Link to="/Sculpture/6">
              <img src={scul6} width="200" height="200" />
            </Link>
          </div>
          <div class="Sculpturegrid-item">
            <Link to="/Sculpture/7">
              <img src={scul7} width="200" height="200" />
            </Link>
          </div>
          <div class="Sculpturegrid-item">
            <Link to="/Sculpture/8">
              <img src={scul8} width="200" height="200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { onesculp, twosculp, threesculp, foursculp };

export default Sculpture;
