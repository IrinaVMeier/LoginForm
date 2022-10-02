import React from 'react';
import {Navbar, Nav, NavItem, DropdownButton, NavDropdown, Form, Container, Button} from 'react-bootstrap';

export default class Menu extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
  
          <Nav.Link href="#action1">Link 1</Nav.Link>
          <Nav.Link href="#action2">Link 2</Nav.Link>
          <NavDropdown title="Drop down link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action6" disabled>
            Disabled Link
          </Nav.Link>
          <Nav className="navbar navbar-light bg-light">
            <Form className="form-inline">
              <Button variant="faded" type="button">Just button</Button>
            </Form>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    );
  }

}
