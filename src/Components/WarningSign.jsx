// import { Alert } from "bootstrap"

const WarningSign = (props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.text}
    </div>
  )
}

export default WarningSign
