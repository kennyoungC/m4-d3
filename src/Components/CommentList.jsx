import React, { Component } from "react"
import { ListGroup, Button } from "react-bootstrap"
class CommentList extends Component {
  deleteComment = async (id) => {
    const resp = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NTA2MDk2MjEsImV4cCI6MTY1MTgxOTIyMX0.JWoOs1eNwEoubIbDC32WsR1WR3K_FzvDvqISzIIztkI",
        },
      }
    )
    if (resp.ok) {
      alert("comment successfully deleted")
    } else {
      alert("comment was successfull deleted")
    }
  }
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.commentsArray.map((com) => (
            <ListGroup.Item key={com._id}>
              {com.comment} - ratings:{com.rate}
              <Button onClick={() => this.deleteComment(com._id)}>
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default CommentList
