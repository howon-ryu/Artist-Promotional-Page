import React, {useEffect, useState} from "react";
import "./Admincontact.css";
import axios from 'axios';
import UserList from './contactimf';
import AdminNavbar from "./AdminNavbar";
import ww from "../img/ww.jpeg";
{
  /*import pic1 from '../img/pic1.jpg'*/
}
const Contact = () => {


  const[users, setUsers] = useState();
    
    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response =>{
        // {/*'https://jsonplaceholder.typicode.com/users'*/}
        //     setUsers(response.data);
        // });
        axios.get('http://api.1971artist.com:3000/contacts/1',
        {
          headers:
          { 
            "x-access-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NDA1OTk4MDcsImV4cCI6MTY3MjEzNTgwNywic3ViIjoidXNlckluZm8ifQ.FFgxskXgUuT2ARN0wKMF2K_YhxyhrLJ_8jfz7YE207Q'
            
          }
        })
        .then(response =>{
            
            setUsers(response.data);
        });
    },[]);


  return (
    <div className="adminnavbar">
      <AdminNavbar></AdminNavbar>
      <div>

          <div className = "adminqw">
            
            <img             
              src={ww}

              alt=""
              width="500"
              height="600"
            />
            
            
          </div>
            <div className = "userscomment">
            <UserList users={users}/>
            
            </div>
          

          

          

        </div>
      
    </div>
  );
};

export default Contact;
