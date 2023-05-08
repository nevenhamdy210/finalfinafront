import styled from "styled-components";

export const PortfolioSection = styled.div` 
    background: #f8f8f8;
    overflow: hidden;   
`

export const PortfolioTitle = styled.h2`
    padding:100px;
    text-align:center;
    margin-top:0;
    font-size: 60px;
    background-color:#ddd;
    text-shadow: 5px 5px lightgray;
    font-family: Roboto, Arial, sans-serif;
`

export const Span1 = styled.span `
text-align: left;
color:gray;
margin: 10px 20px;
margin-bottom:10px;
display: inline-block;
padding-left:6% ;
font-size:20px;
`

export const PortfolioList = styled.ul `
    list-style: none;
    text-align: center;
    margin: 20px 0;
`

export const PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background :${props => props.active ? '#eb5424' : ''}
    color :${props => props.active ? '#fff' : '#000'}
`


export const ImageWrapper = styled.div `
    width: 30%;
    float: right;
    margin-right:50px;
    margin-top:70px;
    font-size: 0;
    padding:20px;
    position: relative;
`
export const Hover = styled.div `
    
    position: relative;
    &:hover > div {
        opacity: 0.4
    }`

export const Image = styled.img`
    width: 100%;
    height: 300px;
    border-radius:10px; 
`

export const Overlay = styled.div` 
    position:absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background:#5F9EA0;gray; rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0 ;
    margin:0;
    border-radius: 20px;
    
`

export const OverlaySpan= styled.button`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-20%);
    background: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    text-align: center;
    &:hover {
    background-color: black;
    color: white;
    
}

`
export const Schedules=styled.div`
margin-top:20px;
padding:10px;
width: 100%;
height:200px;
border-radius:10px;
background-color:#ddd;
`
export const Name=styled.h2`
font-size:30px;
color:black;rgba(24, 193, 150, 0.8);
text-align:center;

`
export const Desc=styled.div`
color:white;
font-size:10px;
text-align:center;
padding-top:10px
`
export const Time=styled.table`

margin-left:5%;
margin-top:2%;
width:90%;
height:10px;
color:black;
font-size:10px;
border:1px solid white;

`
export const Tr=styled.tr`

`
export const Td=styled.td`
text-align:center;
color:gray;
`
export const Icon =styled.i`
color:yellow;
font-size:20px;
margin-right:2%;
`
export const IconSection =styled.span`
margin-left:35%;
text-align:center;
`
export const Icon2 =styled.i`
font-size: 40px;
`