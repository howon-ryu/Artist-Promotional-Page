import React from "react";
import Gallerynav from "./gallerynav";
import Painting from "./Painting";
import Sculpture from "./Sculpture";
import "./gallery.css";
import All from "./All";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <div className="gnavbar">
        <div className="gnavCenter">
          <ul className="gnavList">
            <li className="gnavItem">
              <Link to="/All" style={{ textDecoration: "none", color: "gray" }}>
                All
              </Link>
            </li>
            <li className="gnavItem">
              <Link
                to="/Painting"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Painting
              </Link>
            </li>
            <li className="gnavItem">
              <Link
                to="/Sculpture"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Sculpture
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route exact path="/Painting" element={<Painting />} />

        <Route exact path="/Sculpture" element={<Sculpture />} />
        <Route exact path="/All" element={<All />} />
      </Routes>
    </div>
  );
};

export default Gallery;
