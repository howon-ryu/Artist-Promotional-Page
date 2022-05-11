import React from "react";
import "./sculpturedetails4.css";
import scul4 from "../img/scul4.jpg";

const SculptureDetails4 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={scul4} width="400" height="400" />
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

export default SculptureDetails4;
