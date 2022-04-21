import { Card, Button, Container, Row, Col } from "react-bootstrap"
// import ScifiBook from "./Data/book.json"
const SingleBook = (props) => (
  <Container>
    <Row>
      <Col>
        <Card className="text-dark mb-3">
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)
export default SingleBook
