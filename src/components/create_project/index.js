import validateFutureDate from "../../utils/validateFutureDate";
import Attribute from "../ui/attribute";
import TextInput from "../ui/input";
import TextArea from "../ui/text_area";
import uploadIcon from "../../assets/icon/upload.svg"
import ApiButton from "../ui/api_button";
// import ModalHeader from "../modal/modal_header";
import DateTimeInput from "../ui/date_time_input";
import ModalHeader from "./modal/modal_header";
import IconLabel from "../ui/icon_label";
import getTotalTransactionAmount, { getCleverXFees } from "../../utils/transactionFees";
const inputFields = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Title",
    validation: {
      required: true,
      maxLength: {
        value: 80,
        message: "Title should not be more than 80 words"
      }
    }
  },
  {
    label: "Description",
    name: "summary",
    type: "textarea",
    className: "resize-none h-40",
    placeholder: "Description",
    validation: {
      required: true,
      maxLength: {
        value: 200,
        message: "Title should not be more than 80 words"
      }
    }
  },
  {
    label: "Upload attachment",
    name: "upload_description",
    type: "file",
    placeholder: "Upload attachment",
    validation: {
    }
  },
  {
    label: "Description",
    name: "date",
    type: "datetime",
    placeholder: "Delivery Date",
    validation: {
      required: true,
      validate: (value) => validateFutureDate(value) || "Only future date is allowed"
    }
  },
  {
    label: "Description",
    name: "cost",
    type: "number",
    placeholder: "Project cost",
    validation: {
      required: true,
      min: { value: 100, message: "minimum amount should be 100" },
      max: { value: 100000, message: "maximum amount must be less than 100000" }
    }
  },
]
export default function CreateProject(props) {
  const transactionFees = parseFloat(props.projectCost * 0.2).toFixed(2)
  const totalAmount = parseFloat(props.projectCost * 0.2) + parseFloat(props.projectCost)
  return (
    <>
      <ModalHeader close={props.close} modalTitle="Create Project" />
      <div className="space-y-12 md:max-w-xl p-8">
        <div className="space-y-8">
          <div className="space-y-4">
            {inputFields.map((inputField, i) => returnInputElement({ i, ...props, ...inputField }))}
          </div>
          <div className="space-y-4">
            <Attribute label="CleverX transaction fees (20%)" value={getCleverXFees(props.projectCost)} />
            <Attribute label="Total amount in $USD" value={getTotalTransactionAmount(props.projectCost)} />
          </div>
        </div>
        <div className="flex justify-center">
          <ApiButton isLoading={props.isLoading} name="create_project" onClick={props.handleSubmit}>Create Project</ApiButton>
        </div>
      </div>
    </>
  )
}

function returnInputElement(value) {
  switch (value.type) {
    case "textarea":
      return <TextArea key={value.i} {...value} />
      break;
    case "file":
      return <IconLabel icon={uploadIcon} label="Upload attachment" />
    case "datetime":
      return <DateTimeInput key={value.i} {...value} />
    default:
      return <TextInput key={value.i} {...value} />
      break;
  }
}