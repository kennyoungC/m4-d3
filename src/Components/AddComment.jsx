import React, { Component } from "react"
import { FormControl, Form, Button } from "react-bootstrap"
class AddComment extends Component {
  state = {
    newComment: {
      rate: 1,
      comment: "",
      elementId: null,
    },
  }
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      })
    }
  }
  postData = async (e) => {
    e.preventDefault()
    try {
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
      } else {
        console.log("error")
        alert("your comment was not sent")
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.postData}>
          <FormControl
            placeholder="Add Comments"
            className="mb-1"
            as="textarea"
            rows={2}
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
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Button
            disabled={this.state.newComment.comment.length < 3}
            className="mt-2"
            type="submit"
            variant="secondary"
          >
            Add Comment
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComment
