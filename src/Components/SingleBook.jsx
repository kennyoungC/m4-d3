import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Component } from "react"
import CommentArea from "./CommentArea"
import ScifiBooks from "../Data/Scifibook.json"
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
              style={{
                border: this.state.selected ? "2px solid red" : "none",
              }}
            >
              <Card.Img
                variant="top"
                src={this.props.book.img}
                onClick={() =>
                  this.setState({ selected: !this.state.selected })
                }
              />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                {this.state.selected && (
                  <CommentArea asin={this.props.book.asin} />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default SingleBook
