import { Badge } from "react-bootstrap"
const MyBadge = ({ text, color }) => (
  <h1>
    <Badge bg={color}>{text}</Badge>
  </h1>
)
export default MyBadge
