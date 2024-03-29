import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/pc.jpg';

function Cards() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>COMPUTADOR PICHAU GAMER</Card.Title>
        <Card.Text>
        INTEL I5-12400F, GEFORCE GTX 1650 4GB, 8GB DDR4, SSD 240GB
        </Card.Text>
        <Button variant="danger">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;