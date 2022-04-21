import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./Components/WarningSign"
import MyBadge from "./Components/MyBadge"
import SingleBook from "./Components/SingleBook"
import ScifiBook from "./Data/Scifibook.json"
import BookList from "./Components/BookList"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <WarningSign text="kenneth" />
        <MyBadge color="danger" text="verified" />
        <Container>
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
