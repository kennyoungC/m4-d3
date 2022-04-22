import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./Components/WarningSign"
import MyBadge from "./Components/MyBadge"
import SingleBook from "./Components/SingleBook"
import ScifiBook from "./Data/Scifibook.json"
import BookList from "./Components/BookList"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <WarningSign text="kenneth" />
        <MyBadge color="danger" text="verified" />
        <Container>
          <h3>Ex. 3 </h3>
          <Row className="justify-content-center">
            <Col xs={6}>
              <SingleBook book={ScifiBook[0]} />
            </Col>
          </Row>
        </Container>
        <BookList book={ScifiBook} />
      </header>
    </div>
  )
}

export default App
