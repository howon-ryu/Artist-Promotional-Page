import React from "react";
import "./paintingdetails5.css";
import pic5 from "../img/pic5.jpg";

const PaintingDetails5 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={pic5} width="400" height="400" />
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

export default PaintingDetails5;
