import { Card, Button, Container } from "react-bootstrap"
// import ScifiBook from "./Data/book.json"
const SingleBook = (props) => (
  <Container>
    <h3>Ex. 3</h3>
    <Card className="text-dark">
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Container>
)
export default SingleBook
