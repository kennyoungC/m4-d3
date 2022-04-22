import React, { Component } from "react"
import { FormControl, Form, Button } from "react-bootstrap"
class AddComment extends Component {
  state = {
    newComment: {
      rate: "Ratings",
      comment: "",
      elementId: this.props.commentsAsin,
    },
  }
  // componentDidMount = () => {
  //   this.postData()
  // }
  postData = async (e) => {
    try {
      e.preventDefault()
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NTA2MDk2MjEsImV4cCI6MTY1MTgxOTIyMX0.JWoOs1eNwEoubIbDC32WsR1WR3K_FzvDvqISzIIztkI",
          },
        }
      )
      if (response.ok) {
        alert("new comment added")
        this.setState({
          newComment: {
            rate: "Rate this book",
            comment: "",
            elementId: this.props.commentsAsin,
          },
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.postData(e)}>
          <FormControl
            placeholder="Add Comments"
            type="text"
            value={this.state.newComment.comment}
            onChange={(e) =>
              this.setState({
                newComment: {
                  ...this.state.newComment,
                  comment: e.target.value,
                },
              })
            }
          />
          <Form.Select
            aria-label="Default select example"
            value={this.state.newComment.rate}
            onChange={(e) =>
              this.setState({
                newComment: {
                  ...this.state.newComment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>Rate This Book</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
          </Form.Select>
          <Button type="submit" variant="primary">
            Add Comment
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComment
