import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Component } from "react"
// import ScifiBook from "./Data/book.json"
class SingleBook extends Component {
  state = {
    selected: false,
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card
              className="text-dark mb-3"
              onClick={() => this.setState({ selected: !this.state.selected })}
              style={{ border: this.state.selected ? "2px solid red" : "none" }}
            >
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>

                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default SingleBook
