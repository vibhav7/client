import { useForm } from "react-hook-form";
import useToggle from "../hooks/useToggle";
import Modal from "./create_project/modal";

import Button from "./ui/button";

export default function Layout(props) {
  const { isShow, setShow } = useToggle()
  return (
    <div>
      {props.children}
      <Button onClick={() => setShow(true)}>Open Modal</Button>
      {isShow && <Modal modalTitle="Create Project" close={() => setShow(false)} />}
    </div>
  )
}