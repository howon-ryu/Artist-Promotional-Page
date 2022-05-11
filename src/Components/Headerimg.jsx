import React from 'react';
import {useState} from "react";



const UserList = ({imgall}) => {
    const [oneimg, setone] = useState('');
    const [twoimg, settwo] = useState('');
    const [threeimg, setthree] = useState('');
    console.log(imgall);
    
    if (imgall&&imgall.length>0){
        const imgList = imgall&&imgall?.result.map((result)=>(<div>{result.backgroundImageUrl}</div>));
        console.log(1);
        console.log(imgList);
        console.log(imgList[0]);
        console.log(imgList[1]);
        console.log(imgList[2]);
        setone(imgList[0]);
        console.log(1);
    }

    const imgList = imgall&&imgall?.result.map((result)=>(<div>{result.backgroundImageUrl}</div>));
    
    
    
    
    // settwo(imgList[1]);
    // setthree(imgList[2]);
    return(
        
        // <div>
        //     {imgall&&imgall.result.map((result) =>{
                
        //         <div key={result.id}>
        //          사진 : {result.backgroundImageUrl}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                    
        //          <br/>
        //         </div>
                
                
        //     })}
                

        // </div>
        <div>
            {imgList}
             
            
            

        </div>
        
    );
};

export default UserList;