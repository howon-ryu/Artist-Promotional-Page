import React from "react";
import "./alldetails1.css";
import pic1 from "../img/pic1.jpg";

const AllDetails1 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={pic1} width="400" height="400" />
        </div>
        <div className="setting">
          <br />
          <p>Title</p>
          <br />
          <br />
          <p>Explantion</p>
          <br />
          <br />
          <p>Material</p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AllDetails1;
