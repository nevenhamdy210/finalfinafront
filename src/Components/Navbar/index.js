import React from "react";
import { Link } from "react-router-dom";
import { LogoImg,NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,LinkItem } from "./style.js"
const Navbar = () => {
  return (
    <NavbarSection>
            
    <div className="container">
        
        <Logo>
        <LogoImg src="../images/logo.jpg" alt="react"/>
         <LogoText>Autism</LogoText>
        </Logo>
        
       
        
        <UlList>
          
            <ListItem><LinkItem to="/">Home</LinkItem></ListItem>
            <ListItem><LinkItem to="/appointment">Appointments </LinkItem></ListItem>
            <ListItem><Anchor href="/questionnaire">Questionnaire </Anchor></ListItem>
            <ListItem><Anchor href="#">Treatments </Anchor></ListItem>
            <ListItem><Anchor href="#">About</Anchor></ListItem>
            <ListItem><LinkItem to="/contact">Contact</LinkItem></ListItem>
            <ListItem><LinkItem to="/Login">Login</LinkItem></ListItem>
        </UlList>
        
    </div>
    
</NavbarSection>
  );
}

export default Navbar;
