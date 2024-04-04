import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {
    MDBBtn,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol
  }
  from 'mdb-react-ui-kit';
  import "../styles/Register.css";

const Register = () => {
  const [input, setInput] = useState({
    name: "", 
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    // terms: false
})

 const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(input);
  localStorage.setItem("user", JSON.stringify(input));
  navigate("/login")
 }


  return (
    <MDBContainer className="registerform">
    <MDBRow className='box'>
        <MDBCol col='4' md='7'>
    
            <h1 className='signUp'> Sign Up:</h1>
        <form onSubmit={handleSubmit}>
          <MDBInput 
          name="name"
          value={input.name}
          onChange={(e) => setInput({
            ...input,
             [e.target.name]: e.target.value })} 
          wrapperClass='mb-4' 
          label='Name' 
          id='form1'  
          type='text'
          />
          <MDBInput 
           name="username"
           onChange={(e) => setInput({
            ...input,
             [e.target.name]: e.target.value })} 
          value={input.username}
          wrapperClass='mb-4' 
          label='Username' 
          id='form1' 
          type='text'
          /> 
          <MDBInput 
          name="email"
          value={input.email}
          onChange={(e) => setInput({
            ...input,
             [e.target.name]: e.target.value })} 
          wrapperClass='mb-4' 
          label='Email' 
          id='form1' 
          type='email'
          />
          <MDBInput
          name="password"
          value={input.password}
          onChange={(e) => setInput({
            ...input,
             [e.target.name]: e.target.value })} 
          wrapperClass='mb-4' 
          label='Password' 
          id='form1' 
          type='password'/>

        <MDBInput
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={(e) => setInput({
            ...input,
             [e.target.name]: e.target.value })} 
          wrapperClass='mb-4' 
          label='Confirm Password' 
          id='form1' 
          type='password'
          />

          {/* <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div> */}

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

          <p className='text-center text-muted mt-2 mb-0'>
            Have already an account   <br/>
         
            <Link to="/" className='fw-bold text-body mb-4'>
              Login Here
            </Link>
          </p>
        </form>
    </MDBCol>
          </MDBRow>
        </MDBContainer>

  )
}

export default Register