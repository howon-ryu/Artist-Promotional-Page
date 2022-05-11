import React from "react";
import "./paintingdetails8.css";
import pic8 from "../img/pic8.jpg";

const PaintingDetails8 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={pic8} width="400" height="400" />
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

export default PaintingDetails8;
