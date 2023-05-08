import styled from "styled-components";

export const Drop =styled.div`
    margin-bottom: 5%;
    color: #666;
    padding-top: 100px;
    padding-bottom: 100px;
    
`

export const Title =styled.h2`
    margin-top: 90px;
    font-size: 60px;
    margin-bottom:0px;
    text-shadow: 5px 5px lightgray;
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
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
    background: #ddd;
    border-radius: 10px;
    margin-top:10px;
    font-size:20px;
    `

export const InputSubmit =styled.button`
position: relative;
background-color: black;
color: white;
font-size: 15px;
padding:15px 45px;
float:right;
margin-left:100px;
margin-top:50px;
margin-bottom:10px;
border: none;
cursor: pointer;
border-radius: 20px;
text-align: center;
&:hover {
background-color: gray;
color: white;
}
`
export const Icon =styled.i`
color:red;
margin-top:10px;
`
export const SpanIcon =styled.span`
color:black;
margin-left:20px;
`