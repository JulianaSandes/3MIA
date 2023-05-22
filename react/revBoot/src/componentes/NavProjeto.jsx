import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavProjeto() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Novidades">Novidades</Nav.Link>
            <Nav.Link href="#Precos">Preços</Nav.Link>
            <Nav.Link href="#Sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavProjeto;