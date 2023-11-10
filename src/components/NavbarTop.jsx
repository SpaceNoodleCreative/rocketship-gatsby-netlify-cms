import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavLink = ({ to, children }) => (
  <Nav.Link as={Link} to={to} activeClassName="active">
    {children}
  </Nav.Link>
);

const NavbarTop = () => {
  return (
    <Navbar
      className="bg-black bg-opacity-50"
      fixed="top"
      variant="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="The Rocketship logo"
            style={{ height: "42px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/bootstrap">Bootstrap</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/examples">Form Examples</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
