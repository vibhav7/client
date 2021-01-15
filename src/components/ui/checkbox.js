import { useState } from "react";

import ErrorToast from "./error_toast";
import visaImage from "../../assets/image/visa.png"
import greenTick from "../../assets/icon/green_tick.svg"

const CheckBox = props => {

  const [activeState, setActiveState] = useState()

  const errors = props.errors ? props.errors[props.name] : null
  const activeCheckbox = props.accountSetupData ? props.accountSetupData[props.name] : null

  const checkActiveCheckBox = (i, optionItem) => {
    let clsName
    if (errors) {
      clsName = "bg-red-200 border-white text-blue-600"
    }
    else if (activeState) {
      if (activeState == (i + props.label + optionItem.value)) {
        clsName = "border-blue-800 text-blue-800"
      }
    }
    else if (props.default) {
      if (props.default.value == optionItem.value)
        clsName = "border-blue-800 text-blue-800"
    }

    return clsName
  }

  return (
    <div className="w-full space-y-1">
      <div className="space-y-2">
        <div className="space-y-4">
          {props.options.map((optionItem, i) => {
            return (
              <div key={i} className={` relative h-12 bg-white rounded border
                  py-3 text-center text-sm cursor-pointer
                hover:text-indigo-900 hover:border-indigo-900
                hover:bg-white
                  ${checkActiveCheckBox(i, optionItem)}`}
                onClick={() => setActiveState(i + props.label + optionItem.value)}>
                <input
                  id={i + props.label + optionItem.value}
                  className="hidden"
                  name={props.name}
                  defaultChecked={
                    props.default ? props.default.value == optionItem.value : null
                  }
                  type="radio"
                  value={optionItem.value}
                  ref={props.register}
                />
                <label className="cursor-pointer absolute flex justify-between px-8 items-center top-0 left-0 w-full h-full m-auto"
                  htmlFor={i + props.label + optionItem.value}>
                  <div className="flex items-center space-x-2">
                    {(activeState ? activeState == (i + props.label + optionItem.value) : props.default.value == optionItem.value) ? <img className="h-5 w-5" src={greenTick} /> : <div className="w-5 h-5"></div>}
                    <img className="h-7 w-12" src={visaImage} alt="" />
                  </div>
                  <span className="text-xs font-light">
                    {optionItem.checkbox_label}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        {errors ? (
          <ErrorToast />
        ) : null}
      </div>
    </div >
  );
};

export default CheckBox;

CheckBox.defaultProps = {
  error: false,
  active: 1
};

