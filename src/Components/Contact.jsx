import React, { useEffect, useState } from "react";
import "./contact.css";
import Navbar from "./Navbar";
import axios from "axios";

import ss from "../img/ss.jpeg";
<meta name="viewport" content="width = device-width, initial-scale=1.0" />;

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [uurl, setuurl] = useState("d");
  const postdata = (props) => {
    console.log(props);
    
    // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
    const user = { "contactName" : "r", "contactResponse": "y", "contactIntro":"u" };
    axios.post('http://api.1971artist.com:3000/contacts/1',JSON.stringify({
      contactName: name,
      contactResponse: contact,
      contactIntro: comment
    }),
    {
      headers: 
      {"Content-Type": 'application/json'}
    }
    ).then((response) => console.log(response));
  };

  return (
    <div className="whole">
      
      <div classname="navbar">
        <Navbar></Navbar>

        <div className="wrap">
          <div className="qw">
            <img
              src={ss}
              width="500"
              height="600"
              alt=""
            />
          </div>

          {/*<img className = "contactimg" src={pic1} width='300' height='300'/>*/}
          {/*<button type="button" class="btn" onclick = {()=>{}}>⚙</button>*/}
          <form
            onSubmit={function (event) {
              event.preventDefault();
              console.log(event.target.contactName.value);
              console.log(event.target.contactcontact.value);
              console.log(event.target.contactcomment.value);

              setName(event.target.contactName.value);
              setContact(event.target.contactcontact.value);
              setComment(event.target.contactcomment.value);
              postdata(event.target.contactName.value);
            }}
          >
            <div className="contactinput">
              <div className="c_name">
                <label htmlFor="contactName">
                  <span className="letter">Name</span>{" "}
                  <span className="required">*</span>
                </label>
                <br />
                <textarea
                  type="text"
                  defaultValue=""
                  cols="40"
                  rows="2"
                  id="contactName"
                  name="contactName"
                />
              </div>

              <div className="c_contact">
                <label htmlFor="c_contacthtml">
                  <span className="letter">Contact</span>{" "}
                  <span className="required">*</span>
                </label>
                <br />
                <textarea
                  type="text"
                  defaultValue=""
                  cols="40"
                  rows="2"
                  id="contactcontact"
                  name="contactcontact"
                />
              </div>

              <div className="c_comment">
                <label htmlFor="contactcommnet">
                  <span className="letter">Comment </span>
                  <span className="required">*</span>
                </label>
                <br />
                <textarea
                  defaultValue=""
                  rows="10"
                  cols="40"
                  id="contactcomment"
                  name="contactcomment"
                />
              </div>
              <input className="subbutton" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
