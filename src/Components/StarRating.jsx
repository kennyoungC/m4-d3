const StarRating = (props) => {
  return (
    <div className="star-rating">
      {" "}
      {[...Array(props.numOfStars)].map((star) => {
        return <span className="star text-warning">&#9733;</span>
      })}{" "}
    </div>
  )
}
export default StarRating
