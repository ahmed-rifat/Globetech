import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navanaLogo from '../../globetech logo.png';
import CustomLink from '../CustomLink/CustomLink';
import "./Headers.css"

const Headers = () => {
    return (
        <div>
   <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={navanaLogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <CustomLink className='me-3 text-decoration-none' to ="/home">Home</CustomLink>
            <CustomLink className='me-3 text-decoration-none' to="/services">Services</CustomLink>
            <CustomLink className='text-decoration-none' to="/login">Login</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

        </div>
    );
};

export default Headers;