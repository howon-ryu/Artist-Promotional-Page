import React, { useEffect, useState } from "react";
import "./header.css";
import Navbar from "./Navbar";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import axios from "axios";
import Headerimg from "./Headerimg";
export default function Header() {
  const [container, setcontainer] = useState("container");
  const [img1, setimg1]= useState('');
  const [img2, setimg2]= useState('');
  const [img3, setimg3]= useState('');
  const [imgall, setimg]=useState('');
  useEffect(()=>{axios.get('http://api.1971artist.com:3000/admins/backgrounds/1')
  .then(response => {
    console.log(response.data);
    setimg(response.data);
    
    setimg1(imgall&&imgall.result[0].backgroundImageUrl);
    setimg2(imgall&&imgall.result[1].backgroundImageUrl);
    setimg3(imgall&&imgall.result[2].backgroundImageUrl);
      // console.log("시작");
      // const imgList = imgall&&imgall?.result.map((result)=>(<div>{result.backgroundImageUrl}</div>));
      // console.log("[");
      // setimg1(imgList[0]);   
      // console.log(img1);
      // setimg2(imgList[1]);   
      // console.log(img1);
      // setimg3(imgList[2]);   
      // console.log(img1);
      
      // console.log("]");

      // if(imgList&&imgList.length<=0)
      // {
      // let threeimg = imgList.pop();
      // setimg3(threeimg);
      // console.log(img3);
      // let twoimg = imgList.pop();
      // setimg2(twoimg);
      // let oneimg = imgList.pop();
      // setimg1(oneimg);
      // console.log("if");
      // }
      // else{
      //   setimg1(img1);
      //   setimg2(img2);
      //   setimg3(img3);
      //   console.log("끝");
      // }
  })
  })

  const changeimg1 = () => {
    console.log("1");
    setcontainer("container");
  };
  const changeimg2 = () => {
    console.log("2");
    setcontainer("container2");
  };
  const changeimg3 = () => {
    console.log("3");
    setcontainer("container3");
  };
  const changeleft = () =>{
    console.log("le");
    
    if(container==="container2")
    {
      setcontainer("container"); 
    }
    if(container=="container3")
    {
      setcontainer("container2"); 
    }
  }
  const changeright = () =>{
    console.log("ri");
    if(container==="container")
    {
      setcontainer("container2"); 
    }
    if(container=="container2")
    {
      setcontainer("container3"); 
    }
  }
  
  return (
    <div classame="navbar">
      <Navbar></Navbar>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitle">Choi WooSun</span>
        </div>
        <div className="over">
          <div className={container}>
            <div className="inner">
              <img
                className="headerImg"
                 src={img1}
                alt=""
              ></img>
            </div>
            <div className="inner">
              <img className="headerImg" 
               src={img2}
              alt=""></img>
            </div>
            <div className="inner">
              <img className="headerImg" 
              src={img3}
              alt=""></img>
            </div>
          </div>
        </div>
        <div className="btns">
          <button className= "left" onClick={changeleft}> 《 </button>
          
          <button className="btn1" onClick={changeimg1}>
            1
          </button>
          <button className="btn2" onClick={changeimg2}>
            2
          </button>
          <button className="btn3" onClick={changeimg3}>
            3
          </button>
          <button className= "right" onClick={changeright}>》</button>
        </div>
        <div>

         
        </div>
      </div>
    </div>
  );
}
