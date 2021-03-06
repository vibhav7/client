export default function IconLabel(props) {
  return (
    <div className={`${props.containerClassName || "flex space-x-2 items-center rounded border border-gray-300 w-full pl-5 py-3 text-sm text-gray-400"}`}>
      <img src={props.icon} alt="" className="h-5 w-5" />
      <div className={`${props.labelClassName}`}>{props.label}</div>
    </div>
  )
}