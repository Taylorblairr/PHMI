import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
function header() {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg
      "
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img class="werm" src="https://i.imgur.com/4nPurqw.png" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default header;
