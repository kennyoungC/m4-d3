import SingleBook from "./SingleBook"
import { Container, Col, Row, InputGroup, FormControl } from "react-bootstrap"
import { useState } from "react"
import CommentArea from "./CommentArea"
const BookList = (props) => {
  // state = {
  //   query: "",
  //   selectedBook: null,
  // }
  const [query, setQuery] = useState("")
  const [selectedBook, setselectedBook] = useState(null)

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search For Books"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            {props.book
              .filter((b) => b.title.toLowerCase().indexOf(query) !== -1)
              .map((b, i) => (
                <Col sm={6} key={i + 1}>
                  <SingleBook
                    book={b}
                    selectedBook={selectedBook}
                    changeSelectedBook={(asin) => setselectedBook(asin)}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  )
}
export default BookList
