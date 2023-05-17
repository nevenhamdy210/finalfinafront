import React from "react";
import { Link } from "react-router-dom";
import { LogoImg,NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,LinkItem } from "./style.js"
const Navbar = () => {
  return (
    <NavbarSection>
            
    <div className="container">
        
        <Logo>
        <LogoImg src="../images/logo2.jpg" alt="react"/>
         <LogoText>Autism</LogoText>
        </Logo>
        
       
        
        <UlList>
          
            <ListItem><LinkItem to="/">Home</LinkItem></ListItem>
            <ListItem><LinkItem to="/appointment">Appointments </LinkItem></ListItem>
            <ListItem><LinkItem to="/questionnaire">Questionnaire </LinkItem></ListItem>
            <ListItem><Anchor href="#">Treatments </Anchor></ListItem>
            <ListItem><LinkItem to="/About">About</LinkItem></ListItem>
            <ListItem><LinkItem to="/contact">Contact</LinkItem></ListItem>
            <ListItem><LinkItem to="/Login">Login</LinkItem></ListItem>
        </UlList>
        
    </div>
    
</NavbarSection>
  );
}

export default Navbar;
