const StarRating = (props) => {
  return (
    <div className="star-rating">
      {" "}
      {[...Array(props.numOfStars)].map((star, i) => {
        return (
          <span key={i} className="star text-warning">
            &#9733;
          </span>
        )
      })}{" "}
    </div>
  )
}
export default StarRating
