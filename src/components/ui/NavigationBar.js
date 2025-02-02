import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-nav {
    flex: 1;
    justify-content: center;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

function NavigationBar(props) {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Infograin Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default withRouter(NavigationBar);
