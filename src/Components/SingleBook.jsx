import { Card, Container, Row, Col } from "react-bootstrap"
import { Component } from "react"
const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // }

  return (
    <Container>
      <Row>
        <Col>
          <Card
            className="text-dark mb-3"
            style={{
              border:
                props.selectedBook === props.book.asin
                  ? "2px solid red"
                  : "none",
            }}
            onClick={() => props.changeSelectedBook(props.book.asin)}
          >
            <Card.Img variant="top" src={props.book.img} />
            <Card.Body>
              <Card.Title>{props.book.title}</Card.Title>
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
export default SingleBook
