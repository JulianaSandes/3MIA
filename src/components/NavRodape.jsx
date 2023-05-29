import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavRodape() {
  return (
    <Container variant="dark" bg="dark">
      <Navbar variant="dark" bg="dark">
          <Navbar.Brand href="/">Clique e volte ao topo</Navbar.Brand>
          <h1 class="text-rodape">Juliana Barbosa Sandes-3°Mia</h1>
          <h2 class="text-rodape">Trabalho realizado durante a aula</h2>
          <p class="text">© 2023 Copyright: Juliana Sandes</p>
      </Navbar>
    </Container>
  );
}

export default NavRodape;