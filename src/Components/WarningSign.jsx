// import { Alert } from "bootstrap"

const WarningSign = (props) => {
  return (
    <>
      <h3>Ex. 1</h3>
      <div className="alert alert-danger" role="alert">
        {props.text}
      </div>
    </>
  )
}

export default WarningSign
