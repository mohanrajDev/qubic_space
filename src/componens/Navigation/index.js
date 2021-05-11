import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const menus = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Product",
    url: "/products",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
];
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="">Qubix Space</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {menus.map((menu) => (
            <Nav.Link href={menu.url}>{menu.name}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
