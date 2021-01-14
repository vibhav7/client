import ErrorToast from "./error_toast";

export default function TextArea(props) {
  const errors = props.errors ? props.errors[props.name] : null
  let clsName = `rounded border border-gray-300 w-full pl-5 py-3 text-sm text-gray-700 placeholder-gray-400 ${props.className}`
  if (errors) {
    clsName = `h-12 w-full border border-red-400 bg-red-200 rounded py-4 px-5 text-sm placeholder-red-800 focus:border-red-400 outline-none appearance-none ${props.className}`
  }
  return (
    <div className="w-full flex flex-col justify-items-stretch space-y-1">
      <textarea
        type={props.type}
        className={clsName}
        disabled={props.disabled}
        placeholder={props.placeholder}
        ref={props.register(props.validation)}
        name={props.name}
      />
      {errors ? <ErrorToast text={errors ? errors.message : null} /> : null}
    </div>
  );
}
