import React from "react";
import "./paintingdetails6.css";
import pic6 from "../img/pic6.jpg";

const PaintingDetails6 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={pic6} width="400" height="400" />
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

export default PaintingDetails6;
