import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";
import { doLogout } from "../Authentication/Auth";

function Header1() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/managerhome">Employee Management</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/managerhome">Manager Home</Nav.Link>
            <Nav.Link href="/"  onClick={doLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header1;
