import { Badge } from "react-bootstrap"
const MyBadge = ({ text, color }) => (
  <>
    <h3>Ex. 2</h3>
    <h1>
      <Badge bg={color}>{text}</Badge>
    </h1>
  </>
)
export default MyBadge
