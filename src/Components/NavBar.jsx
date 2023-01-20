import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logout from "./Logout";
import "../Styles/NavBar.css";

function NavBar() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <Navbar className="nav-container">
          <Container className="navbar">
            <Navbar.Brand className="nav-brand" href="/">
              FoodiesDev
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/recipe">Recipe</Nav.Link>
              </Nav>
              <NavDropdown
                className="nav-drop"
                title={localStorage.getItem("name")}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/all-users">User</NavDropdown.Item>
                <NavDropdown.Item>
                  <Logout />
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : null}
    </>
  );
}

export default NavBar;
