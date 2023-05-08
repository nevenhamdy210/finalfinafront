import React ,{Component} from "react";
import './style.js' ;
import Footer from "../Footer/index.js";
import axios from "axios";
import {Icon2,Hover,Tr,Td,IconSection, ImageWrapper, Overlay, OverlaySpan,Time, PortfolioSection, PortfolioTitle ,Span1,Image,Schedules, Name,Desc} from "./style.js";
import { Link } from "react-router-dom";
class Appointment extends Component
 {

    state ={
        images: [],
        index:''
    }
    componentDidMount (){
        axios.get('js/data.json').then(res=> {this.setState({images : res.data.Doctors})})
    }


    render (){
    const {images}= this.state;
    const PortfolioImages =images.map((imageItem) =>{
        return(
             
               <ImageWrapper key={imageItem.id}> 
               <Hover>
               <Image src={imageItem.image} alt=""/>
                <Overlay>
                <Link to={{
                        pathname: "/Schedule" + imageItem.id}} > <OverlaySpan type='submit'>
                        Schedule Now
                    </OverlaySpan>
                </Link>

                </Overlay>
                </Hover>
            <Schedules>
                    <Name>{imageItem.name}</Name>            
                    <br /><br />
                    <Desc> {imageItem.desc}<br/>{imageItem.body}</Desc>
                    <Time>
                        <Tr>
                            <th>Fri </th>
                            <th>Sat </th>
                            <th>Sun </th>
                            <th>Mon </th>
                            <th>Tue </th>
                            <th>Thu</th>
                        </Tr>

                        <Tr>
                            <Td> 30 Mar. </Td>
                            <Td> 31 Mar. </Td>
                            <Td> 01 Apr. </Td>
                            <Td> 02 Apr. </Td>
                            <Td> 03 Apr. </Td>
                            <Td> 04 Apr. </Td>
                        </Tr>
                    </Time>
                </Schedules>
        </ImageWrapper>
    
        )
       
    })
    return(
        <div>
          <PortfolioSection>
            <PortfolioTitle><i class="fa fa-calendar" aria-hidden="true"></i>     Appointments <br/><Span1><i className="fa fa-angle-double-right"></i> schedule your appointment now</Span1></PortfolioTitle>
            
            <div className="box">
               {PortfolioImages} 
            </div>    
        </PortfolioSection>
        <Footer/>
        </div>
    )}
    }
export default Appointment ;