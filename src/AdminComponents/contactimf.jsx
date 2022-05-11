import React from 'react';
import {useState } from "react";
import "./contactimf.css";
const UserList = ({users}) => {
    const [name, setName] = useState("j");
    console.log(users)
    return(
        
        <div>
            {users&&users.result.map((result) =>{
                return(
                <div className = "comment" key={result.contactName}>
                 이름 : {result.contactName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                 회신주소 : {result.contactResponse}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                 내용 : {result.contactIntro}<br/>
                 <br/>
                </div>
                
                )
            })}
        
            
            
            

        </div>
        
    );
};

export default UserList;