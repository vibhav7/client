export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      name={props.name || props.children}
      className="focus:outline-none font-medium text-lg py-3 px-12 rounded bg-blue-500 hover:bg-blue-900 text-gray-100 hover:text-white transition duration-300 hover:shadow-2xl"
    >
      {props.children}
    </button>
  )
}