import React from "react";
import { Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {

  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Clientes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inscriptos</Nav.Link>
        <Nav.Link href="#link">Mentorias</Nav.Link>
        <NavDropdown title="Nivel" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Principiante</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mediano</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Avanzado</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBar;
