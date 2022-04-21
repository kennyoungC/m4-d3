import SingleBook from "./SingleBook"
import { Container, Col, Row, InputGroup, FormControl } from "react-bootstrap"
import { Component } from "react"
class BookList extends Component {
  state = {
    query: "",
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search For Books"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          {this.props.book
            .filter((b) => b.title.toLowerCase().includes(this.state.query))
            .map((b, i) => (
              <Col sm={6} md={4} lg={3} key={i + 1}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    )
  }
}
export default BookList
