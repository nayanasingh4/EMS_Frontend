import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";
import { doLogout } from "../Authentication/Auth";

const Header2 = () => {
  return (
    <div>

<>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/employeehome">Employee Management</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link href="/employeehome" > Employee Home</Nav.Link>
            <Nav.Link href="/"  onClick={doLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>



    </div>
  )
}

export default Header2