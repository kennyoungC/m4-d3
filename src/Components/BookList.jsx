import SingleBook from "./SingleBook"
import { Container, Col, Row, InputGroup, FormControl } from "react-bootstrap"
import { Component } from "react"
class BookList extends Component {
  state = {
    query: "",
    comments: [],
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
            .filter(
              (b) => b.title.toLowerCase().indexOf(this.state.query) !== -1
            )
            .map((b, i) => (
              <Col sm={9} key={i + 1}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    )
  }
}
export default BookList
