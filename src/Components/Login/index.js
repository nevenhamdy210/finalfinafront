
import React, { useState } from "react";
import axios from 'axios';
import { Container , Form ,  Title , Input , Button , DropdownLink , DropdownContainer , DropdownButton , DropdownContent , TriangleRight  } from './Style.js'

const options = [
  { label: 'Specialist', link: '/SpecialistSignUpForm' },
  { label: 'Parent', link: '/ParentSignUpForm' },
  { label: 'Patient', link: '/PatientSignUpForm' },
];


const Login = () => {

  const [isOpen, setIsOpen] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data , setData] = useState(null)

    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/api/signin/', {
        email,
        password,
      });
      // For Store And Save Data In LocalStorage
      setData(response.data)
      setAuther(response.data)
      console.log(response.data);
      window.location.replace("http://localhost:3000/")
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // SetAuther 
  const setAuther = (data)=>{
    localStorage.setItem("user" , JSON.stringify(data))
  }

  // Karim Code
  const loginHandler = (e)=>{
    e.preventDefault() ; 
    let data = {
      email 
      ,password
    }
      setAuther(data) ; 
      window.location.replace("http://localhost:3000/")

  }
  // For Logout 
  const logout = ()=>{
    localStorage.removeItem("user") ; 
  }


  return (
    <>
    <Container>
      <TriangleRight></TriangleRight>
      <Form  onSubmit={handleSignIn}>
        <Title>Sign In</Title>
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <div>
        <Button type="submit"  >Sign In</Button>
        <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>Create new account</DropdownButton>
          <DropdownContent isOpen={isOpen}>
            {options.map(({ label, link }) => (
              <DropdownLink key={label} to={link} >
                {label}
              </DropdownLink>
          ))}
          </DropdownContent>
        </DropdownContainer>
        </div>
      </Form>
    </Container>
    </>
  );
};
 


export default Login;

