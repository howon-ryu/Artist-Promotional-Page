import React from "react";
import "./alldetails3.css";
import pic3 from "../img/pic3.jpg";

const AllDetails3 = () => {
  return (
    <div className="down">
      <div className="f_container">
        <div className="img">
          <img src={pic3} width="400" height="400" />
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

export default AllDetails3;
