import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProjeto() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/fotos-gratis/fundo-de-papel-texturizado-liso-preto_53876-98333.jpg?w=360" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProjeto;