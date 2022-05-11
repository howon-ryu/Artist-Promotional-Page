import "./Adminabout.css";
import AdminNavbar from "./AdminNavbar";
import React, {useEffect, useState } from "react";
import axios from 'axios';
export default function About() {
  const [fname, setName] = useState('');
  const [faboutme, setaboutme] = useState('');
  const [ftitle, settitle] = useState('');
  const [fsns1, setsns1] = useState('');
  const [fsns2, setsns2] = useState('');
  const [faddress, setAddress] = useState('');
  const [fstatus, setstatus] = useState('');
  const [fphone_num, setPhone_num] = useState('');
  const [femail, setEmail] = useState('');
  const [fhistory, setHistory] = useState('');
  const [fsns3, setsns3] = useState('');
  const [fadminProfileImageUrl, seturl] = useState('');
  const [abouts, setabouts] = useState([
    {adminName : fname,adminProfileImageUrl:'null',adminTitle:ftitle,
     adminIntro:faboutme, adminHistory:fhistory, 
     adminAddress:faddress, adminPhone:fphone_num,
     adminEmail:femail, adminSNS1:fsns1,
     adminSNS3:fsns2, adminSNS3:fsns3
    }
  ])
  const patchdata = (props)=>{
    console.log(props)
    const url = 'http://api.1971artist.com:3000/admins/1';
    const user = {fname,faddress,fphone_num,femail,fhistory };
    axios.patch('http://api.1971artist.com:3000/admins/1',
       JSON.stringify({
        adminName : fname,
        adminProfileImageUrl:fadminProfileImageUrl,
        adminTitle:ftitle,
        adminIntro:faboutme, 
        adminHistory:fhistory, 
        adminAddress:faddress, 
        adminPhone:fphone_num,
        adminEmail:femail,     
        adminSNS1:fsns1, 
        adminSNS2:fsns2, 
        adminSNS3:fsns3,
        status:"active"
       }),
      {
        headers:
        { 
          "x-access-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NDA1OTk4MDcsImV4cCI6MTY3MjEzNTgwNywic3ViIjoidXNlckluZm8ifQ.FFgxskXgUuT2ARN0wKMF2K_YhxyhrLJ_8jfz7YE207Q',
          "Content-Type": 'application/json'
        }
      }
    ).then((response)=>console.log(response));
    
  }
  return (
    <div className="adminnavbar">
      <AdminNavbar></AdminNavbar>
      <div>
        <section id="about">
          <div className="adminaboutall">
            
            <div className="adminaboutpic">
            
              <img
                
                src="https://1971artist.s3.ap-northeast-2.amazonaws.com/%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84+-+1.jpeg"
                width = "500"
                height = "500"
              
              />
              
            </div>
            <form onSubmit = {function(event){
              event.preventDefault();

              settitle(event.target.ftitle.value);
              setName(event.target.fname.value);
              setAddress(event.target.faddress.value);
              setaboutme(event.target.faboutme.value);
              setPhone_num(event.target.fphone_num.value);
              setEmail(event.target.femail.value);
              setHistory(event.target.fhistory.value);
              
              setsns1(event.target.fsns1.value);
              setsns2(event.target.fsns2.value);
              setsns3(event.target.fsns3.value);
              setabouts(event.target.value);
              seturl("https://1971artist.s3.ap-northeast-2.amazonaws.com/%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84+-+1.jpeg");
              patchdata(event.target.fname.value);
            }}>
              
              <div className="adminim">
  <input className = "savebtn" type = "submit"  value="save"/>
<input type="text" placeholder = "Name" id="fname" name="fname" defaultvalue="name"/>
<br/>
<input type="text" placeholder = "Title" id="ftitle" name="ftitle" defaultvalue="title"/>

<p>
<textarea
      className = "adminabouttext"
      placeHolder = "history"
      defaultValue=""
      rows="5"
      cols="55"
      id="fhistory"
      name="fhistory"
    
    />
</p>

<p>
<textarea
      className = "adminabouttext"
      placeHolder = "intro"
      defaultValue=""
      rows="5"
      cols="55"
      id="faboutme"
      name="faboutme"
    
    />
</p>

<div className="row">
  <div className="columns contact-details">
    <p className="address">
      <br />
      <span>
      <input type="text" placeholder = "Address" id="faddress" name="faddress" defaultvalue="address"/>
        <br />
        <br />
      </span>

      <span><input type="text" placeholder = "Phone_num" id="fphone_num" name="fphone_num" defaultvalue="phone_num"/></span>
      <br />
      <br />
      <span><input type="text" placeholder = "Email" id="femail" name="femail" defaultvalue="email"/></span>
      <br />
      <br />
      <span><input type="text" placeholder = "sns1" id="fsns1" name="fsns1" defaultvalue="sns1"/></span>
      <br />
      <span><input type="text" placeholder = "sns2" id="fsns2" name="fsns2" defaultvalue="sns2"/></span>
      <br />
      <span><input type="text" placeholder = "sns3" id="fsns3" name="fsns3" defaultvalue="sns3"/></span>
    </p>
  </div>
</div>
</div>
          </form>
          </div>
        </section>
      </div>
    </div>
  );
}
