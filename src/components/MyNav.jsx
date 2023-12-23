import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png'

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white"/>
        <Navbar.Collapse id="navbarScroll" className="text-white">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-white">Tv Show</Nav.Link>
            <NavDropdown title="Movies" className="text-white" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-white" disabled>
              Categoria
            </Nav.Link>
          </Nav>
          <Form className="d-flex text-white">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="text-white">Search</Button> {/* sostituire con icona ricerca */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;