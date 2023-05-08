
import React, { useState } from "react";
import { ThirdSection,Button,TextArea,Input,Label,InputContainer,FormContainer,RightSide , LeftSide ,Image1,Image2, Image3, Title} from "./style.js";
const FeedbackSection =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  // Add code here to submit the form data to the server
};


  return (
    <ThirdSection>
        <Title>we are intrested about your feedback :</Title>
    <LeftSide>
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="message">Message:</Label>
        <TextArea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </InputContainer>
      <Button type="submit">Submit</Button>
    </FormContainer>
    </LeftSide>


    <RightSide>
    <Image1 src="../images/feedback3.jpg" alt="react"/>
    <Image2 src="../images/feedback2.jpg" alt="react"/>
    <Image3 src="../images/feedback4.jpg" alt="react"/>
    </RightSide>
    </ThirdSection>
    )
}
export default FeedbackSection ;