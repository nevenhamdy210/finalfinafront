import React from "react";
import { FooterDesc,FooterSection,FooterTitle,Icon,Logo,ProfileList,ProfileItem,ProfileItemSpan } from "./style";
const Footer =()=>{
    //<Logo src="../images/logo2.jpg" alt="react"></Logo>
    return( 
    <div>  
    <FooterSection>
        <br/>
        <FooterTitle> Autism Awareness</FooterTitle>
        <ProfileList>
        <ProfileItem >
         <ProfileItemSpan>Phone</ProfileItemSpan>
         : 123-456-7890
        </ProfileItem>
        <ProfileItem >
     <ProfileItemSpan>Fax</ProfileItemSpan>
     : 123.456.7890
 </ProfileItem>
        </ProfileList>
        <div>
        <Icon className= "icon fa fa-facebook fa-lg"></Icon>
        <Icon className= "icon fa fa-pinterest fa-lg"></Icon>
        <Icon className= "icon fa fa-twitter fa-lg"></Icon>
        
        </div>
        <FooterDesc>© 2023 - Autism All Right Reserved <br/>
        
         </FooterDesc>
    </FooterSection>
    </div>
    )
}
export default Footer ;