export default function IconLabel(props) {
  return (
    <div className="flex space-x-2 items-center rounded border border-gray-300 w-full pl-5 py-3 text-sm text-gray-400">
      <img src={props.icon} alt="" className="h-5 w-5" />
      <div>{props.label}</div>
    </div>
  )
}