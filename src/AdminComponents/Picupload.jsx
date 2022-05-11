import React from "react";
import "./Picupload.css";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";
import axios from "axios";
import { findRenderedComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min";

const Picupload = () => {
  const [userFiles, setFiles] = useState("");
  const [userTitle, setTitle] = useState("");
  const [userIntro, setIntro] = useState("");
  const [userCate, setCate] = useState("");
  const [userIngr, setIngr] = useState("");

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputIntro = (e) => {
    setIntro(e.target.value);
  };

  const handleInputCatep = (e) => {
    // console.log("[");
    // console.log(e.target.Painting.value);
    // console.log("[");
    // if(e.target.Painting.value==="Painting"){
      setCate(1);
    // }


    
  };
  const handleInputCates = (e) => {
    // console.log("[");
    // console.log(e.target.Sculpture.value);
    // console.log("[");

    // if(e.target.Sculpture.value==="Sculpture"){
      setCate(2);
    // }
    // else
    // {
    //   console.log("err");
    // }
    
  };
  const handleInputIngr = (e) => {
    setIngr(e.target.value);
  };

  const onLoadFile = (e) => {
    setFiles(URL.createObjectURL(e.target.files[0]));
    console.log(userFiles);
    setFiles(e.target.files[0]);
    console.log(userFiles);
  };

  const handleFileUpload = () => {
    console.log("[");
    let file = userFiles;
    console.log(file);
    console.log("]");
    const formData = new FormData();

    
    // formData.append("result",file);
    
    // console.log(formData.get("result"));
    // formData.append("json",JSON.stringify({
    //   postTitle: userTitle,
    //   postIntro: userIntro,
    //   postCategory: 1,
    //   postIngredient: userIngr
    // }))
    // console.log(formData.get("json"));
    const data = {
      // image: userFiles,
      postTitle: userTitle,
      postIntro: userIntro,
      postCategory: 1,
      postIngredient: userIngr
    };
    formData.append("image",file);
    formData.append("postTitle",userTitle);
    formData.append("postIntro",userIntro);
    formData.append("postCategory",userCate);
    formData.append("postIngredient",userIngr);
    const config = {
      headers: {
        "x-access-token":
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NDA2MTc5MDYsImV4cCI6MTY3MjE1MzkwNiwic3ViIjoidXNlckluZm8ifQ.aOC6HO4TRf__izxleFMD0EL-r0t9d-X22GY3Zx_Disk',
      }
    };
    console.log(data);
    for (let value of formData.values()) {
      console.log(value);
    }
   
    
    
    
    axios
      .post("http://api.1971artist.com:3000/posts/1", formData,
      {
        headers: 
        {
            "x-access-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NDA1OTk4MDcsImV4cCI6MTY3MjEzNTgwNywic3ViIjoidXNlckluZm8ifQ.FFgxskXgUuT2ARN0wKMF2K_YhxyhrLJ_8jfz7YE207Q'
             ,"Content-Type": 'application/json'
           



        }
        
    
      }
      )
      .then((res) => {
        console.log("1");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
   };

    

  return (
    <div className="adminnavbar">
      <AdminNavbar></AdminNavbar>
      <div className="down">
        <div className="f_container">
          <div className="img">
            <img src={userFiles} alt="" width="400" height="400" />
            <input
              type="file"
              id="image"
              accept="img/*"
              onChange={onLoadFile}
            />
          </div>

          <div className="setting">
            <br />
            <textarea
              type="text"
              placeholder="제목"
              cols="50"
              rows="3"
              id="uploadcomment"
              value={userTitle}
              onChange={handleInputTitle}
            />
            <br />
            <br />

            <textarea
              type="text"
              placeholder="설명"
              cols="50"
              rows="6"
              id="uploadcomment"
              value={userIntro}
              onChange={handleInputIntro}
            />
            <br />
            <br />
            <textarea
              type="text"
              placeholder="재료"
              cols="50"
              rows="3"
              id="uploadcomment"
              value={userIngr}
              onChange={handleInputIngr}
            />
            <br />
            <br />
            <div className="wrapper">
              <div className="p">
                <input
                  type="radio"
                  name="cate"
                  id="Painting"
                  value="1"
                  onChange={handleInputCatep}
                />
                painting
              </div>
              <div className="s">
                <input
                  type="radio"
                  name="cate"
                  id="Sculpture"
                  value="2"
                  onChange={handleInputCates}
                />
                sculpture
              </div>
              <button className="upbtn" onClick={handleFileUpload}>
                업로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picupload;