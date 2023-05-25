import React ,{useEffect, useState} from "react";
import { IconSection,Icon4,BodySection, H1, LeftSide,TableContainer, RightSide, Sec1, Sec3, TableHeader,TableRow,TableCell, AddButton } from "./style";
import axios from "axios";
import {Button,Header,HeaderSection,IconP3,IconP4,Iconp5,UlList,ListItem,ImageWrapper, Image,Schedules, Name,Image3,Header_child_list,Button_parent} from "./style.js";
import Footer from '../Footer/index.js';
import { Link } from "react-router-dom";

const Parent=({index})=> {
       const [ChildTable, setChildTable] = useState ([]);
       useEffect(() => {
        axios.get('js/data.json').then(res => {setChildTable (res.data.childs)})
       }, []);

      const TimeTablee =ChildTable.map((cellItem) =>{
      return(
          <React.Fragment>
            <TableRow key={cellItem.id}>
            <TableCell ><Image3 src={cellItem.cell1_img} /></TableCell>
            <TableCell >{cellItem.cell2_name}</TableCell> 
            <TableCell ><Link to="/"><i class="fa fa-edit"  title="edit the data of child"></i> </Link>&nbsp;&nbsp;<Link to="/"><i class="fa fa-trash" aria-hidden="true"  title="delete the data of child"></i></Link></TableCell>
            </TableRow>
          </React.Fragment>
        )})

      const [user , setUser] = useState ([])
      useEffect(()=> {
          axios.get('js/data.json').then(res => {setUser (res.data.Parents)})
      } ,[] )


    const PortfolioImages =user.map((userInfo) =>{
     if (2 === userInfo.id)
      {
      return(
          <div>
          
          <Schedules>
          <ImageWrapper key={userInfo.id}>
          <Image src={userInfo.image} alt=""/>
          <Name>{userInfo.name}&nbsp;&nbsp;<Link to="/ScheduleAdmin"> <i class="fa fa-edit"></i></Link></Name>
          </ImageWrapper>
          <IconSection>
            
            <Icon4 className= "fa fa-facebook-square"></Icon4>
            <Icon4 className= "fa fa-phone"></Icon4>
            <Icon4 className= "fa fa-linkedin"></Icon4>
            </IconSection>
            <hr/>
          <UlList>
          <ListItem><IconP3 className="fa fa-envelope" aria-hidden="true"></IconP3>e-mail : {userInfo.email}</ListItem>
          <br/><br/><br/>
          <ListItem><IconP4 className= "fa fa-child"></IconP4>number of childs : {userInfo.num_of_childs}</ListItem>
          <br/><br/>
          <ListItem><Iconp5 className= "fa fa-user"></Iconp5>age : {userInfo.age}</ListItem> 
          </UlList>
          </Schedules>
     </div>
      )       
  }})
        
        
      return (
        <React.Fragment>
            
            <BodySection>
            <LeftSide>
            <HeaderSection>
            <Header>
                <H1>Welcome to our team</H1> 
            </Header>
            </HeaderSection>
            <Sec3>
            <div>
                <Header_child_list><i className="fa fa-list"> </i> List of your children</Header_child_list>
            <TableContainer>
            <thead>
                <tr>
                <TableHeader> Image<br/></TableHeader>
                <TableHeader> Name<br/></TableHeader>
                <TableHeader> Action<br/></TableHeader>
                </tr>
            </thead>
            <tbody>
                {TimeTablee}
            </tbody>
            </TableContainer>
            <AddButton><i className="fa fa-plus" title="add new child"></i> Add</AddButton>
    </div>
            </Sec3>
            </LeftSide> 


            <RightSide>
            {PortfolioImages}
            <Sec1>
             
            <Link to="/questionnaire"><Button_parent><i className="fa fa-clock-o"></i> Check Appointments Status</Button_parent>  </Link>
            <br/><br/>
            </Sec1>
            
            </RightSide>
            </BodySection>
            <Footer/>
            </React.Fragment>
        )}
      ;
  export default Parent;