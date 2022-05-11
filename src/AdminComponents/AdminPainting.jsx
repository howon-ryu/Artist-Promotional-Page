import React, { Component, useState } from "react";
import "./AdminPainting.css";
import AdminGallerynav from "./Admingallerynav";
import { Link } from "react-router-dom";

import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";
import pic4 from "../img/pic4.jpg";
import pic5 from "../img/pic5.jpg";
import pic6 from "../img/pic6.jpg";
import pic7 from "../img/pic7.jpg";
import pic8 from "../img/pic8.jpg";

import AdminNavbar from "./AdminNavbar";

const onepaint = <img src={pic1} width="200" height="200" />;
const twopaint = <img src={pic2} width="200" height="200" />;
const threepaint = <img src={pic3} width="200" height="200" />;
const fourpaint = <img src={pic4} width="200" height="200" />;

const Painting = () => {
  const [files, setFiles] = useState("");
  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  return (
    <div classname="adminnavbar">
      <AdminNavbar></AdminNavbar>
      <div>
        <AdminGallerynav />
        <Link to="/Picupload">
          <button type="button" class="g_upbtn" onclick={() => {}}>
            사진업로드
          </button>
        </Link>
        {/*<button type="button" class="btn" onclick = {()=>{}}>⚙</button>*/}
        <div className="grid-container">
          <div className="grid-item">
            <img src="" width="200" height="200" />
            <div className="re">
              {/*<input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>
          <div className="grid-item">
            <img src="" width="200" height="200" />
            <div className="re">
              {/*<input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>
          <div className="grid-item">
            <img src="" width="200" height="200" />
            <div className="re">
              {/*<input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>
          <div className="grid-item">
            <img src="" width="200" height="200" />
            <div className="re">
              {/*<input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>
          <div className="grid-item">
            <img src="" width="200" height="200" />
            <div className="re">
              {/*<input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>
          <div className="grid-item">
            <img src="" width="200" height="200" />
            <div className="re">
              {/*<input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>
          <div className="grid-item">
            <img src="" width="200" height="200" />
            <div className="re">
              {/*<input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>
          <div className="grid-item">
            <img src="" width="200" height="200" />
            <div className="re">
              {/*<input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { onepaint, twopaint, threepaint, fourpaint };

export default Painting;
