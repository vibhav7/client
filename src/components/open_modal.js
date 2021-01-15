import { useForm } from "react-hook-form";
import useToggle from "../hooks/useToggle";
import Modal from "./modal";

import Button from "./ui/button";

export default function OpenModal(props) {
  const { isShow, setShow } = useToggle()
  return (
    <div>
      {props.children}
      <Button onClick={() => setShow(true)}>Open Modal</Button>
      {isShow && <Modal activeScreenId={0} close={() => setShow(false)} />}
    </div>
  )
}