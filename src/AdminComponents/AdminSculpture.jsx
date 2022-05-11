import React, { Component, useState } from "react";
import "./AdminSculpture.css";
import AdminGallerynav from "./Admingallerynav";
import { Link } from "react-router-dom";
import scul1 from "../img/scul1.jpg";
import scul2 from "../img/scul2.jpg";
import scul3 from "../img/scul3.jpg";
import scul4 from "../img/scul4.jpg";
import scul5 from "../img/scul5.jpg";
import scul6 from "../img/scul6.jpg";
import scul7 from "../img/scul7.jpg";
import scul8 from "../img/scul8.jpg";
import AdminNavbar from "./AdminNavbar";

const onesculp = <img src={scul1} width="200" height="200" />;
const twosculp = <img src={scul2} width="200" height="200" />;
const threesculp = <img src={scul3} width="200" height="200" />;
const foursculp = <img src={scul4} width="200" height="200" />;

const Sculpture = () => {
  const [files, setFiles] = useState("");

  const onLoadFile = (e) => {
    setFiles(URL.createObjectURL(e.target.files[0]));

    {
      /*
    const file = e.target.files;
    
    console.log(file);
    setFiles(file);
    */
    }
  };
  return (
    <div classname="adminnavbar">
      <AdminNavbar></AdminNavbar>
      <div>
        <AdminGallerynav />
        <Link to="/Picupload">
          <button type="button" class="s_upbtn" onclick={() => {}}>
            사진업로드
          </button>
        </Link>
        <div className="grid-container">
          <div className="grid-item">
            <img src={files} width="200" height="200" />
            <div className="re">
              {/*} <input
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              />
              */}
            </div>
          </div>

          <div className="grid-item">
            <img src={files} width="200" height="200" />
            <div className="re">
              {/*} <input
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
              {/*} <input
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
              {/*} <input
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
              {/*} <input
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
              {/*} <input
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
              {/*} <input
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
              {/*} <input
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

export { onesculp, twosculp, threesculp, foursculp };

export default Sculpture;
