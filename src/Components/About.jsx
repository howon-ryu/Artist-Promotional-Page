import React, {useEffect, useState} from "react";
import "./about.css";
import axios from 'axios';
import Navbar from "./Navbar";

import AboutmeList from "./AboutmeList";
<meta name="viewport" content="width = device-width, initial-scale=1.0" />;
const About=()=> {
  const[aboutme, setAbout] = useState('');
  const[fname,setname] = useState('');
  const [ftitle, settitle] = useState('');
  const [fsns1, setsns1] = useState('');
  const [fsns2, setsns2] = useState('');
  const [faddress, setAddress] = useState('');
  const [fintro,setIntro] = useState('');
  const [fphone_num, setPhone_num] = useState('');
  const [femail, setEmail] = useState('');
  const [fhistory, setHistory] = useState('');
  const [fsns3, setsns3] = useState('');
  const [fstatus, setstatus] = useState('');
  const [fadminProfileImageUrl, seturl] = useState('');
    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response =>{
        // {/*'https://jsonplaceholder.typicode.com/users'*/}
        //     setUsers(response.data);
        // });
        axios.get('http://api.1971artist.com:3000/admins/1',
        {
          headers:
          { 
            "x-access-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NDA2MTc5MDYsImV4cCI6MTY3MjE1MzkwNiwic3ViIjoidXNlckluZm8ifQ.aOC6HO4TRf__izxleFMD0EL-r0t9d-X22GY3Zx_Disk'
          }
        })
        .then(response =>{
            console.log(response.data);
            setAbout(response.data);
            // console.log(aboutme.result.adminName);
            // console.log(aboutme.result.adminTitle);
            setname(aboutme&&aboutme.result.adminName);
            settitle(aboutme&&aboutme.result.adminTitle);
            setHistory(aboutme&&aboutme.result.adminHistory);
            setIntro(aboutme&&aboutme.result.adminIntro);
            setAddress(aboutme&&aboutme.result.adminAddress);
            setPhone_num(aboutme&&aboutme.result.adminPhone);
            setEmail(aboutme&&aboutme.result.adminEmail);
            setsns1(aboutme&&aboutme.result.adminSNS1);
            setsns2(aboutme&&aboutme.result.adminSNS2);
            setsns3(aboutme&&aboutme.result.adminSNS3);
            seturl(aboutme&&aboutme.result.adminProfileImageUrl);
            setstatus(aboutme&&aboutme.result.Status);
            seturl(aboutme&&aboutme.result.adminProfileImageUrl);
            
        });
    });
  return (
    
    <div >
      <div className="navbar">
        <Navbar></Navbar>
        
      </div>
      
      
    
    <div>
        <section id="about">
          
          <div className="useraboutall">
            <div className="useraboutpic">
              <img
                // src="https://images.unsplash.com/photo-1637541615205-8654ee01a032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzODE5NDYyNA&ixlib=rb-1.2.1&q=80&w=1080"
                src={fadminProfileImageUrl}
                width="500"
                height="500"
              />
            </div>
            <div className="userim">
              <h2>{fname}</h2>
              <h2>{ftitle}</h2>
              <p className= "history">
              {fhistory}
              </p>
              <p className = "intro">
                {fintro}
              </p>
              
              <span>
              {faddress}
              <br/><br/>
              </span>
              <span>{fphone_num}</span>
                    <br />
                    <br />
                    <span>{femail}</span>
                    <br />
                    <br />
                    <span>{fsns1}</span>
                    <br />
                    <span>{fsns2}</span>
                    <br />
                    <span>{fsns3}</span>
                    
            {/* <AboutmeList aboutme={aboutme}/> */}
            </div>
          </div>
          
        </section>
      </div>
    </div>
    
  );
}
export default About;