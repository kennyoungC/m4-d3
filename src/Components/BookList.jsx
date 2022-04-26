import SingleBook from "./SingleBook"
import { Container, Col, Row, InputGroup, FormControl } from "react-bootstrap"
import { Component } from "react"
import CommentArea from "./CommentArea"
class BookList extends Component {
  state = {
    query: "",
    selectedBook: null,
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
          <Col>
            <Row>
              {this.props.book
                .filter(
                  (b) => b.title.toLowerCase().indexOf(this.state.query) !== -1
                )
                .map((b, i) => (
                  <Col sm={8} key={i + 1}>
                    <SingleBook
                      book={b}
                      selectedBook={this.state.selectedBook}
                      changeSelectedBook={(asin) =>
                        this.setState({
                          selectedBook: asin,
                        })
                      }
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default BookList
