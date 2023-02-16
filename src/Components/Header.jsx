import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";
import { doLogout } from "../Authentication/Auth";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Employee Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Login"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/adminlogin">
                    Admin Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/employeelogin">
                    Employee Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/managerlogin">
                    Manager Login
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
