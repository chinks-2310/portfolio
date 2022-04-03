import React, { useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import './navbar.css';
import { LinkContainer } from 'react-router-bootstrap';

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/" className="d-flex">
            <a href="/" className="logo">
                <span className="grey-color">&lt;</span>
                <span className="logo-name">Chintan Thakkar</span>
                <span className="grey-color">/&gt;</span>
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'>
                <LinkContainer to="/">
                    <Nav.Link><AiOutlineHome style={{ marginBottom: "2px" }} /> Home</Nav.Link>
                </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
                <LinkContainer to='/about'>
                    <Nav.Link><AiOutlineUser style={{ marginBottom: "2px" }} /> About</Nav.Link>
                </LinkContainer>
            </Nav>      
            <Nav className="ml-auto">
                <LinkContainer to='/project'>
                    <Nav.Link><AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }}
                />{" "} Project</Nav.Link>
                </LinkContainer>
            </Nav>
            {/* <Nav className="ml-auto">
                <LinkContainer to='/resume'>
                    <Nav.Link><CgFileDocument style={{ marginBottom: "2px" }} /> Resume</Nav.Link>
                </LinkContainer>
            </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default NavBar;