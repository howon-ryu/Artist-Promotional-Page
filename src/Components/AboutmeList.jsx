import React from 'react';


const AboutmeList = ({aboutme}) => {

     console.log(aboutme)
    return(
        
        <div>
            {aboutme&&aboutme.result.map((result) =>{
                return(
                <div key={result.adminName}>
                 {result.adminName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminProfileImageUrl}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminIntro}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminHistory}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminAddress}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminPhone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminEmail}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminSNS1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminSNS2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {result.adminSNS3}
                 </div>
                
                )
            })}
        
            
            
            

        </div>
        
    );
};

export default AboutmeList;