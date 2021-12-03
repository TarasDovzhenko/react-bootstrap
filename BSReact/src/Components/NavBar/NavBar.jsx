import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <Navbar className={classes.navBar} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className={classes.headerLogo}>
          EXPRESS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <NavDropdown title="Our services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Lorem, ipsum.</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Lorem, ipsum.</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Lorem, ipsum.</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Lorem, ipsum.</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1"> Contact us</Nav.Link>
          </Nav>

          <Button className={classes.callUs} variant="outline-success">
            Call us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
