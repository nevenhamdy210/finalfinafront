import styled from "styled-components";

export const Drop =styled.div`
    color: #666;
    padding-bottom: 100px;
    
`

export const Title =styled.h2`
    margin-top: 50px;
    font-size: 70px;
    color:#008080;
    font-family:Apple Chancery, cursive;
    margin-bottom:0px;
    //text-shadow: 5px 5px #dddd;
    text-align: left;
   
`

export const Span =styled.span`
    font-weight: normal
    font-size: 20px;
    
`

export const FormSection =styled.form`
    margin-top: 20px;
    width: 100%;
    
`

export const Input =styled.input`
  float:left;
  width: 100%;
  padding: 15px 20px;
  margin: 9px 0;
  border: 0.5px solid black;
  text-align: left;
  border-radius: 20px;
  
`

export const Body =styled.div`
border-radius: 6px;
background: #fff;
box-shadow: 0 0 10px  #669999; 
padding:5%;
padding-top: 1px;
padding-bottom: 150px;
`

export const InputForm =styled.div`
    overflow: hidden
`


export const InputText =styled(Input)`
    width: 100%;
  
`

export const InputEmail =styled(Input)`
    width: 100%;
  
`

export const InputExp =styled(Input)`
    width: 100%;
    
`

export const TextArea =styled.textarea`
    width: 100%;
    outline: 0;
    background: #dddd;
    border-radius: 10px;
    margin-top:10px;
    font-size:20px;
    `

export const InputSubmit =styled.button`
position: relative;
background-color: white;
color: black;
font-size: 15px;
padding:15px 45px;
float:right;
margin-left:100px;
margin-top:50px;
margin-bottom:10px;
border: 2px solid gray;
font-family:Apple Chancery, cursive;
cursor: pointer;
border-radius: 20px;
text-align: center;
&:hover {
background-color: black;
color: white;
}
`
export const Icon =styled.i`
color:#008080;
margin-top:10px;
`
export const SpanIcon =styled.span`
color:black;
margin-left:20px;
`
export const Header =styled.div`
    position: absolute;
    color:white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
`

export const Title2 =styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: white;
    font-family:Bradley Hand, cursive;
   
`
export const HeaderSection =styled.div`
    height:200px;
    background: linear-gradient(to right, #9907facc,#3204),url('../images2/team.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    margin-bottom:10%;
`