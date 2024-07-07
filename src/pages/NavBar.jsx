import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './css/homepage.css'
import './css/characters.css'
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <Navbar expand="lg" className="navs">
      <Container className="nav-container">
        <Navbar.Brand to="/" as={Link}>Rick & Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="" to="/" as={Link}>Home</Nav.Link>
              <Nav.Link href="" to="/about" as={Link}>About</Nav.Link>
              <Nav.Link href="" to="/characters" as={Link} className="links">Characters</Nav.Link>
              <Nav.Link href="" to="/favorites" as={Link} className="links">Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// export default Navigator;
