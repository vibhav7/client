export default function Attribute(props) {
  return (
    <div className="flex justify-between">
      <div className="text-gray-500 text-sm">{props.label}</div>
      <div className="text-lg text-gray-800 font-medium">$ {props.value}</div>
    </div>
  )
}