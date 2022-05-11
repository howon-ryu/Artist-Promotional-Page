import React from "react";
import "./sculpturedetails5.css";
import scul5 from "../img/scul5.jpg";

const SculptureDetails5 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={scul5} width="400" height="400" />
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

export default SculptureDetails5;
