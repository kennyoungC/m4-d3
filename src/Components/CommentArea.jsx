import React, { Component } from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"
class CommentArea extends Component {
  state = {
    comments: [],
  }
  componentDidMount = async () => {
    this.fetchComment()
    setTimeout(() => {
      console.log(this.state.id)
    }, 5000)
  }
  fetchComment = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NTA2MDk2MjEsImV4cCI6MTY1MTgxOTIyMX0.JWoOs1eNwEoubIbDC32WsR1WR3K_FzvDvqISzIIztkI",
        },
      }
    )
    const data = await response.json()
    console.log(data)
    this.setState({
      comments: data,
    })
  }
  render() {
    return (
      <div>
        <CommentList commentsArray={this.state.comments} />
        <AddComment commentsAsin={this.props.asin} />
      </div>
    )
  }
}

export default CommentArea
