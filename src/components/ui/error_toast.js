const ErrorToast = (props) => {
  return (
    <div className="text-red-600 text-xs">{props.text ? props.text : "This field is required"}</div>
  )
}

export default ErrorToast