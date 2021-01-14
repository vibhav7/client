export default function Attribute(props) {
  return (
    <div className={`flex items-center justify-between ${props.containerClassName}`}>
      <div className={`${props.labelClassName || "text-gray-500 text-sm"}`}>{props.label}</div>
      <div className={`${props.valueClassName || "text-lg text-gray-800 font-medium"}`}>$ {props.value}</div>
    </div>
  )
}