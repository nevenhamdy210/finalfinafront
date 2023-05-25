import styled from "styled-components";

export const FooterSection =styled.div` 
text-align: center;
//background: linear-gradient(to left,#A3C1AD,#fcf7f1); 
color: white;
//background:linear-gradient(to left, #5F9EA0, #A3C1AD);

background: linear-gradient(to right,#5F9EA0,#A3C1AD);
//background: linear-gradient(to right, #AFDBF5,#72A0C1); 

background:linear-gradient(to right, #A3C1AD, #8DA399);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;    ;

`
export const Logo =styled.img`

border-radius:200px;
width:50px;
margin-top:20px;

`
export const FooterTitle =styled.div` 
margin-top:5%;
font-size:40px;
color:white;
b//ackground-color:#8DA399;
border-radius:200px;
margin-left:30%;
margin-right:30%;

font-family:Impact, fantasy;
`
export const FooterDesc =styled.div` 
bottom:0px;
width:100%;
background:rgba(0, 0, 0, 0.2);
//background: linear-gradient(to left,rgba(0, 0, 0, 0.4) ,black);
color:white;
margin-top:2%;
padding:30px;
`

export const Icon =styled.i`
margin-top:4%;
margin-right:25px;
font-size:28px;
//background-color:white;
padding:10px;
border-radius: 20px;
color:black;
&:hover {
    background-color:#85d5a5;
    color: white;
    }
`
export const ProfileList = styled.ul`
    list-style: none;
    margin-top:50px;
`

export const ProfileItem= styled.li`
    margin-bottom: 8px;
    margin-right:100px;
    color:rgba(0, 0, 0, 0.5);
    font-family:Bradley Hand, cursive;
`

export const ProfileItemSpan= styled.div`
    display: inline-block;
    width: 100px;
    color:black;
    font-family:Luminari, fantasy;
`
