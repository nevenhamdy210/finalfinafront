import React from "react";
import {HomeSection ,HomeTitle,HomeInfo, HomeDesc, HomeButton} from "./style";
const Home =()=>{
return(
    <HomeSection>
    <div >
        <HomeInfo> 
            <HomeTitle>Autism</HomeTitle>
            <HomeDesc>
            We can help you with  how to deal with mental health related to autism 
            </HomeDesc>
            <HomeButton>Let's Begin swipe down for more information</HomeButton>
        </HomeInfo>
    </div>
    </HomeSection>
  );
};

export default Home ;