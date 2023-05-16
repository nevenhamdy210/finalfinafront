import styled from "styled-components";

export const BodySection = styled.div` 
    margin:60px;
    padding:40px;
    border-radius: 6px;
    box-shadow: 0 0 10px  #669999; 
    //background:linear-gradient(to top, white, #E1EBEE);
    height: 1000px;
    //background-color:#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;
`
export const LeftSide = styled.div`
    width:65%;
    float:left;
    height: 900px;
    margin-top:3%;
`
export const RightSide = styled.div`
    width:30%;
    float:right;
    height: 860px;
    padding:30px;

`

export const ImageWrapper = styled.div `
    width: 100%;
    padding:30px;
    padding-bottom:0px;
    background-color:white;
`

export const Image = styled.img`
    width: 40%;
    height: 80px;
    border-radius:5px;
    margin-left:30% ;
    box-shadow: 0 0 4px  ; 
`
export const Header =styled.div`
    position: absolute;
    color:white;
    top: 33%;
    left: 38%;
    transform: translate(-50%,-50%);
    
`
export const H1 =styled.h1`
    font-size:40px;
    text-align:left;
    color: #800080;black;white;#005f69;
`
export const Title =styled.div`
    font-size:25px;
    text-align:left;
    color: black;
`
export const HeaderSection =styled.div`
    height:250px;
    background: url('../images/prof4.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    border-radius:60px;
    box-shadow: 0 0 12px  ; 
`
export const Schedules=styled.div`
    padding:5px;
    width: 100%;
    height:400px;  
    background-color:white;
    border-radius: 20px;
    box-shadow: 0 0 5px  ; 
`
export const Name=styled.h2`
    font-size:20px;
    color:black;
    text-align:center;
    background-color:white;
    text-shadow: 2px 0px lightgray;
    font-family:  Arial, sans-serif;
`
export const Desc=styled.div`
    color:white;
    font-size:20px;
    text-align:center;
  
    
`
export const Sec1=styled.div`
height:300px;
margin-bottom:90px;
margin-top:20px;
width:100%;
background-color:white;
border-radius: 10px; 
box-shadow: 0 0 5px  ;    
`
export const Sec3=styled.div`
height:500px;
margin-top:50px;
width:100%;
background-color:white;
border-radius: 10px; 
box-shadow: 0 0 5px  ;  
`
export const Icon4 =styled.i`

font-size:20px;
padding-right:3%;
padding-left:3%;
border-radius: 20px;
color:#5F9EA0;#007791;#800080;#367588;
&:hover {
    background-color:black;
    color: white;
    }
`

export const IconSection=styled.div`
text-align:center;
width:100%;

`
export const Overlay = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 15px;
    opacity: 0 ;
    margin:0;
    border-radius: 20px;
    
`

export const OverlaySpan= styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
    &:hover {
    background-color: black;
    color: white;
}

`

export const UlList = styled.ul`
    width: 70%;
    list-style: none;
    padding: 0%;
    font-size: 9px;
    margin-left:50px;
    margin-top:20px;
    text-align:center;
    
`

export const ListItem = styled.li`
    display:flex;
    padding:0px;
    color:gray;
    font-size: 15px;
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
`
export const TableContainer = styled.table`
  width:100%;
`;

export const TableHeader = styled.th`
padding: 3px;
text-align: center;
background-color: #6c757d;
color: #fff;
font-size:20px;
`
export const TableRow = styled.tr`

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`

export const TableCell = styled.td`
border: 1px solid #ddd;
padding: 3px;
text-align: center;
background-color: ${({ isSelected }) => (isSelected ? 'lightgreen' : 'white')};
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'green' : 'black')};
    color:white;
}

`

export const ReviewHeader = styled.div`
margin-top: 30px;
margin-left: 30px;
float:left;
font-size: 40px;
font-weight: bold;
border:2px solid white;
color:#008080;
text-shadow: 0 0 7px gray ; 
padding:10px;
`
export const Image2 = styled.img`
    width:7%;
    height: 60px;
    border-radius:20px;
    float:left;
    margin-right:15px;
    margin-top:15px;
    box-shadow: 0 0 4px  ; 
`
export const Icon5 =styled.i`
color:gold;
font-size:20px;
`
export const Name2=styled.h2`
    font-size:20px;
    color:black;
    text-align:left;
    font-family: Arial, sans-serif;
`
export const ReviewSection = styled.div` 
    margin:0px;
    padding:20px;
    margin-top:30px;
    margin-left:10%;
    width:80%;
    padding-bottom:0px;
    border-radius: 6px;
    box-shadow: 0 0 3px  #669999; 
`
export const Comment = styled.div`
font-size:20px;
margin-left:7%;
color:gray;
text-align:left;
display:flex;
font-family:  Arial, sans-serif;
padding-bottom:1%;
`

export const IconSection2 =styled.button`
text-align:center;
margin-bottom:3%;
`

export const Icon1 =styled.i`
color:gray;
display:flex;
padding-top:0px;
padding-right:20px;
font-size:20px;
`
export const Icon =styled.i`
color:gray;
display:flex;
padding-top:30px;
padding-bottom:10px;
padding-right:13px;
font-size:20px;
`

export const Icon2 =styled.i`
color:gray;
display:flex;
padding-top:15px;
padding-right:20px;
font-size:20px;
`
export const SpanIcon =styled.span`

`

