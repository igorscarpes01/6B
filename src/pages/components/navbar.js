import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css";

function BasicExample() {
  return (
    <Container>
      <Navbar expand="lg" className={`${style.navGradient} my-5 px-3 border border-primary-subtle rounded rounded-4`} data-bs-theme="dark">
      
        <Navbar.Brand href="/">Igor Carpes - 6B </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/noticias">Noticias</Nav.Link>
            <Nav.Link href="/promessa">Promessa</Nav.Link>
            <Nav.Link href="/page">Page</Nav.Link>
            <Nav.Link href="/mesportes">Esportes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
    </Container>
  );
}

export default BasicExample;