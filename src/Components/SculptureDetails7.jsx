import React from "react";
import "./sculpturedetails7.css";
import scul7 from "../img/scul7.jpg";

const SculptureDetails7 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={scul7} width="400" height="400" />
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

export default SculptureDetails7;
