import DateTimePicker from 'react-datetime-picker';
import { Controller } from "react-hook-form";
import ErrorToast from "./error_toast";

export default function DateTimeInput(props) {
  const errors = props.errors ? props.errors[props.name] : null
  let clsName = "w-full h-12 border border-gray-500 rounded bg-white"
  if (errors) {
    clsName = "w-full h-12 border border-red-500 rounded bg-red-200"
  }
  return (
    <div className="w-full flex flex-col justify-items-stretch space-y-1">
      <Controller
        name={props.name}
        control={props.control}
        rules={props.validation}
        render={({ onChange, value }) => (
          <DateTimePicker
            className={clsName}
            value={value}
            onChange={onChange}
            minDate={new Date()}
          />
        )}
      />
      {errors ? <ErrorToast text={errors ? errors.message : null} /> : null}
    </div>
  );
}
