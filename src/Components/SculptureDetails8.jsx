import React from "react";
import "./sculpturedetails8.css";
import scul8 from "../img/scul8.jpg";

const SculptureDetails8 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={scul8} width="400" height="400" />
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

export default SculptureDetails8;
