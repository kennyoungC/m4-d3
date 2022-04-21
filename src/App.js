import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./Components/WarningSign"
import MyBadge from "./Components/MyBadge"
import SingleBook from "./Components/SingleBook"
import ScifiBook from "./Data/Scifibook.json"

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <WarningSign text="kenneth" />
        <MyBadge color="danger" text="verified" />
        <SingleBook book={ScifiBook[0]} />
      </header>
    </div>
  )
}

export default App
