import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarSection = styled.div`
    overflow: hidden;
    background: #fff;
    position: relative;
   border-bottom: 0.1px solid gray;
    margin:0px;
`

export const Logo = styled.div`
    width: 47%;
    float: left;
   display:flex;
   
`

export const LogoText = styled.h2`
    font-size: 43px;
    font-weight: bold
`

export const UlList = styled.ul`
    width: 52%;
    float: left;
    list-style: none;
    padding: 0%;
    margin-top:40px;
`

export const ListItem = styled.li`
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424

    }
`

export const LinkItem = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424

    }
`
export const LogoImg =styled.img`
margin-top:7%;
border-radius:200px;
width:50px;
height:40px;

`