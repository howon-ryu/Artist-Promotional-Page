import React from "react";
import Gallerynav from "./Admingallerynav";
import Painting from "./AdminPainting";
import Sculpture from "./AdminSculpture";
import AdminNavbar from "./AdminNavbar";
import "./Admingallery.css";

import AdminGallerynav from "./Admingallerynav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <AdminGallerynav />
      
    </div>
  );
};

export default Gallery;
