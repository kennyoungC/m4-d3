import React, { Component } from "react"
import { ListGroup, Spinner, Anchor } from "react-bootstrap"
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
      this.setState({ isLoading: false })
    } else {
      alert("comment was successfull deleted")
    }
  }
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.commentsArray.map((com) => (
            <ListGroup.Item
              key={com._id}
              className="d-flex justify-content-between"
            >
              {com.comment} - ratings:{com.rate}
              <div className="position-relative see-more">
                <i className="bi bi-three-dots"></i>
                <Anchor
                  href="#"
                  className="position-absolute"
                  onClick={() => this.deleteComment(com._id)}
                >
                  delete
                  {/* <i class="bi bi-trash"></i> */}
                </Anchor>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default CommentList
