import React from "react";
import "./paintingdetails2.css";
import pic2 from "../img/pic2.jpg";

const PaintingDetails2 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={pic2} width="400" height="400" />
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

export default PaintingDetails2;
