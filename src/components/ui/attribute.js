export default function Attribute(props) {
  return (
    <div className="flex justify-between">
      <div>{props.label}</div>
      <div>$ {props.value}</div>
    </div>
  )
}