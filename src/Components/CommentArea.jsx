import React, { useState, useEffect } from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"
import LoadingComponent from "./LoadingComponent"
import ErrorComponent from "./ErrorComponent"
const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       isLoading: true,
  //     })
  //     try {
  //       const response = await fetch(
  //         "https://striveschool-api.herokuapp.com/api/comments/" +
  //           this.props.asin,
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NTA2MDk2MjEsImV4cCI6MTY1MTgxOTIyMX0.JWoOs1eNwEoubIbDC32WsR1WR3K_FzvDvqISzIIztkI",
  //           },
  //         }
  //       )
  //       if (response.ok) {
  //         const data = await response.json()

  //         this.setState({
  //           comments: data,
  //           isLoading: false,
  //           isError: false,
  //         })
  //       } else {
  //         this.setState({
  //           isLoading: false,
  //           isError: true,
  //         })
  //       }
  //     } catch (error) {
  //       console.log(error)
  //       this.setState({
  //         isLoading: false,
  //         isError: true,
  //       })
  //     }
  //   }
  // }
  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin])
  const fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
        {
          headers: {
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NTA2MDk2MjEsImV4cCI6MTY1MTgxOTIyMX0.JWoOs1eNwEoubIbDC32WsR1WR3K_FzvDvqISzIIztkI",
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        setComments(data)
        setIsLoading(false)
        setIsError(false)
      } else {
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }
  return (
    <div>
      <h4>Comments</h4>
      {isLoading && <LoadingComponent />}
      {isError && <ErrorComponent />}
      <CommentList commentsArray={comments} />
      <AddComment asin={props.asin} />
    </div>
  )
}

export default CommentArea
