import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navanaLogo from '../../globetech logo.png';

const Headers = () => {
    return (
        <div>
   <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={navanaLogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Link to ="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

        </div>
    );
};

export default Headers;