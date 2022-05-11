import React from "react";
import "./sculpturedetails1.css";
import scul1 from "../img/scul1.jpg";

const SculptureDetails1 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={scul1} width="400" height="400" />
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

export default SculptureDetails1;
