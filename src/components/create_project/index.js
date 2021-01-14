import validateFutureDate from "../../utils/validateFutureDate";
import Attribute from "../ui/attribute";
import Button from "../ui/button";
import TextInput from "../ui/input";
import TextArea from "../ui/text_area";
import uploadIcon from "../../assets/icon/upload.svg"
import ApiButton from "../ui/api_button";
import closeIcon from "../../assets/icon/close.svg"
import ModalHeader from "../modal/modal_header";


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
    type: "date",
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
      {/* <div className="p-8 px-12 md:py-6 flex justify-between border-b space-x-16">
        <img src="" />
        <div className="text-2xl font-medium">{props.modalTitle}</div>
        <img onClick={props.close} className="cursor-pointer" src={closeIcon} />
      </div> */}
      <ModalHeader close={props.close} modalTitle="Create Project" />
      <div className="space-y-12 md:max-w-xl p-8">
        <div className="space-y-8">
          <div className="space-y-4">
            {inputFields.map((inputField, i) => returnInputElement({ i, ...props, ...inputField }))}
          </div>
          <div className="space-y-4">
            <Attribute label="CleverX transaction fees (20%)" value={transactionFees} />
            <Attribute label="Total amount in $USD" value={totalAmount.toFixed(2)} />
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
      return (
        <div className="flex space-x-2 items-center rounded border border-gray-300 w-full pl-5 py-3 text-sm text-gray-400">
          <img src={uploadIcon} alt="" className="h-5 w-5" />
          <div>Upload attachment</div>
        </div>)
    default:
      return <TextInput key={value.i} {...value} />
      break;
  }
}