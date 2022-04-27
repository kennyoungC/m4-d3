import React, { Component } from "react"
import { ListGroup, Anchor } from "react-bootstrap"
import StarRating from "./StarRating"
const CommentList = (props) => {
  const deleteComment = async (id) => {
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

  return (
    <div>
      <ListGroup>
        {props.commentsArray.map((com) => (
          <ListGroup.Item
            key={com._id}
            className="d-flex justify-content-between
              align-items-center"
          >
            <span className="d-flex flex-column align-items-start">
              {com.comment} <StarRating numOfStars={com.rate} />
            </span>

            <span className="position-relative see-more">
              <i className="bi bi-three-dots"></i>
              <Anchor
                href="#"
                className="position-absolute"
                onClick={() => deleteComment(com._id)}
              >
                delete
              </Anchor>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default CommentList
