import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary py-3"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/dashboard/home" className="me-5">
              Home
            </Link>
            <Link to="/dashboard" className="me-5">
              Services
            </Link>
            <Link to="/dashboard" className="me-5">
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
