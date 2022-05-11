import React from "react";
import "./sculpturedetails2.css";
import scul2 from "../img/scul2.jpg";

const SculptureDetails2 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={scul2} width="400" height="400" />
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

export default SculptureDetails2;