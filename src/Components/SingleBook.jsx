import { Card, Container, Row, Col } from "react-bootstrap"
import { Component } from "react"
class SingleBook extends Component {
  // state = {
  //   selected: false,
  // }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card
              className="text-dark mb-3"
              style={{
                border:
                  this.props.selectedBook === this.props.book.asin
                    ? "2px solid red"
                    : "none",
              }}
              onClick={() =>
                this.props.changeSelectedBook(this.props.book.asin)
              }
            >
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                {/* {this.state.selected && (
                  <CommentArea asin={this.props.book.asin} />
                )} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default SingleBook
