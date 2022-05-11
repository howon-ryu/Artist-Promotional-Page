import React from "react";
import "./alldetails4.css";
import pic4 from "../img/pic4.jpg";

const AllDetails4 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={pic4} width="400" height="400" />
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

export default AllDetails4;
