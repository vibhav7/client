import Button from "../ui/button";
import CheckBoxInput from "../ui/checkbox";
import ModalHeader from "./modal/modal_header";

import IconLabel from "../ui/icon_label";
import addIcon from "../../assets/icon/add.svg"

const inputFields = [{
  name: "card",
  type: "checkbox",
  validation: {
    required: true,
  },
  options: [
    {
      checkbox_label: "Visa Card ending with 2345",
      value: "2345",
    },
    {
      checkbox_label: "Visa Card ending with 7645",
      value: "7645"
    },

  ],
  default: {
    checkbox_label: "Visa Card ending with 2345",
    value: "2345",
  }
}]
export default function ChooseCard(props) {
  return (
    <div>
      <ModalHeader back={(e) => props.back(e, 0)} close={props.close} modalTitle="Choose Card" />
      <div className="p-8 space-y-12">
        <div className="space-y-4">
          {inputFields.map((inputField, i) => <CheckBoxInput
            key={i}
            {...inputField}
            register={props.register(inputField.validation)}
            control={props.control}
            controller={props.Controller}
            errors={props.errors}
          />)}
          <IconLabel icon={addIcon} label="Add Card" />
        </div>
        <div className="text-center">
          <Button onClick={props.handleSubmit} name="pay">Pay</Button>
        </div>
      </div>
    </div>
  )
}