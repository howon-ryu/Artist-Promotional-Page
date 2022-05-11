import React from "react";
import "./paintingdetails7.css";
import pic7 from "../img/pic7.jpg";

const PaintingDetails7 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={pic7} width="400" height="400" />
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

export default PaintingDetails7;
