import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarr from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { Outlet } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <Container data-bs-theme="light">
        <Navbarr bg="light" >
        <Container>
            <Nav variant="pills">
              <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
              <LinkContainer to="business">
                <Nav.Link >Business</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
              <LinkContainer to="entertainment">
                <Nav.Link >Entertainment</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
              <LinkContainer to="sports">
                <Nav.Link >Sports</Nav.Link>
                </LinkContainer>
              </Nav.Item>

              <Nav.Item>
              <LinkContainer to="health">
                <Nav.Link >Health</Nav.Link>
                </LinkContainer>
              </Nav.Item>


              <Nav.Item>
              <LinkContainer to="technology">
                <Nav.Link >Technology</Nav.Link>
                </LinkContainer>
              </Nav.Item>

              
              


            </Nav>            
        </Container>        
      </Navbarr>

        <div>
            <Outlet></Outlet>
        </div>
      </Container>
    )
  }
}
