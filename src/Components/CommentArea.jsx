import React, { Component } from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"
import LoadingComponent from "./LoadingComponent"
import ErrorComponent from "./ErrorComponent"
class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  }
  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      })
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NTA2MDk2MjEsImV4cCI6MTY1MTgxOTIyMX0.JWoOs1eNwEoubIbDC32WsR1WR3K_FzvDvqISzIIztkI",
            },
          }
        )
        if (response.ok) {
          const data = await response.json()

          this.setState({
            comments: data,
            isLoading: false,
            isError: false,
          })
        } else {
          this.setState({
            isLoading: false,
            isError: true,
          })
        }
      } catch (error) {
        console.log(error)
        this.setState({
          isLoading: false,
          isError: true,
        })
      }
    }
  }
  render() {
    return (
      <div>
        <h4>Comments</h4>
        {this.state.isLoading && <LoadingComponent />}
        {this.state.isError && <ErrorComponent />}
        <CommentList commentsArray={this.state.comments} />
        <AddComment asin={this.props.asin} />
      </div>
    )
  }
}

export default CommentArea
