import { useState } from "react";
import { useForm } from "react-hook-form";
import closeIcon from "../../assets/icon/close.svg"
import useFetchButton from "../../hooks/useFetchButton";
import CreateProject from "../create_project"
import getScreenUI from "./getScreeUI";
export default function Modal(props) {
  const [projectCost, setProjectCost] = useState(0)
  const [activeScreenId, setActiveScreenID] = useState(0)
  const { control, register, handleSubmit, setValue, errors } = useForm();
  const { isLoading, apiData, apiError, apiButtonId, fetchDATA } = useFetchButton()
  const modalComponentArgs = {
    activeScreenId,
    control,
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    handleFormSubmit,
    setValue,
    errors,
    onChange: onInputChangeHandler,
    projectCost,
    isLoading,
    close: props.close,
    back: handleBack
  }

  function handleBack(e, id) {
    setActiveScreenID(id)
  }

  function handleFormSubmit(data, e) {
    console.log(data)
    console.log(e.target.name)
    fetchDATA("/posts", "post", data, e.target.name)
      .then((res) => {
        if (res)
          setActiveScreenID(1)
      })
  }

  function onInputChangeHandler(e) {
    const reg = /^\d+(\.\d+)*$/;
    if (e.target.name == "cost" && e.target.value <= 100000 && e.target.value >= 100 && reg.test(e.target.value)) {
      setProjectCost(e.target.value)
    }
    else {
      setProjectCost(0)
    }
  }
  return (
    <>
      <div className=" fixed z-40 h-screen w-full">
        <div className="fixed top-0 left-0 h-screen w-full opacity-75 bg-gray-500"></div>
        <div className="fixed inset-0 flex items-center">
          <div className="max-h-90 shadow-2xl md:rounded-lg mx-auto overflow-scroll bg-white">
            <div className="">
              {getScreenUI(modalComponentArgs)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}