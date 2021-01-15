import DateTimePicker from 'react-datetime-picker';
import { Controller } from "react-hook-form";
import ErrorToast from "./error_toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateTimeInput(props) {
  const errors = props.errors ? props.errors[props.name] : null
  let clsName = "pl-4 w-full h-12 border border-gray-300 rounded bg-white placeholder-gray-400"
  if (errors) {
    clsName = "pl-4 w-full h-12 border border-red-500 rounded bg-red-200 placeholder-red-800"
  }
  return (
    <div className="w-full flex flex-col justify-items-stretch space-y-1">
      <Controller
        name={props.name}
        control={props.control}
        rules={props.validation}
        render={({ onChange, value }) => (
          <DatePicker
            className={clsName}
            minDate={new Date()}
            showTimeSelect
            selected={value}
            isClearable
            onChange={onChange}
            dateFormat="d MMMM, yyyy h:mm aa"
            placeholderText="Delivery Date"
          />
        )}
      />

      {errors ? <ErrorToast text={errors ? errors.message : null} /> : null}
    </div>
  );
}
