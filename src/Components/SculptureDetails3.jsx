import React from "react";
import "./sculpturedetails3.css";
import scul3 from "../img/scul3.jpg";

const SculptureDetails3 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={scul3} width="400" height="400" />
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

export default SculptureDetails3;
