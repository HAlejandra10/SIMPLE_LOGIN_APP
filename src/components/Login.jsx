import React, { useState } from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.css"


const Login = () => {
  const navigate =useNavigate();
  const [input ,setInput] = useState({
    email: "", 
    password: "",
  });
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(input);
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(
      input.email === loggeduser.email &&
      input.password === loggeduser.password 
      ){
        localStorage.setItem("loggedin", true);
        navigate("/")
      }else{
        alert("Wrong Email or Password")
      }
  }

  return (
    <MDBContainer fluid className="loginform">
    
          <MDBRow className='box'>
    
            <MDBCol>
             <img  className="backimage" src='https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_1280.png' alt="Sample image" /> 
            </MDBCol>
            <MDBCol col='5' md='8'>
                        <h1 className='login'>LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <MDBInput 
               name="email"
               value={input.email}
               onChange={(e) => setInput({
                ...input,
                 [e.target.name]: e.target.value })} 
              wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput 
               name="password"
               value={input.password}
               onChange={(e) => setInput({
                ...input, [e.target.name]: e.target.value
               })}
              wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
    
              <div className="d-flex justify-content-between mb-3">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
    
              <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
              </div>
            </form>
            </MDBCol>
    
          </MDBRow>
        </MDBContainer>
  )
}

export default Login