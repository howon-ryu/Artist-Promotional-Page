import React from "react";
import "./sculpturedetails6.css";
import scul6 from "../img/scul6.jpg";

const SculptureDetails6 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={scul6} width="400" height="400" />
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

export default SculptureDetails6;
