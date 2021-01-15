import closeIcon from "../../assets/icon/close.svg"
import backIcon from "../../assets/icon/back.svg"

export default function ModalHeader(props) {
  return (
    <div className="p-8 px-12 md:py-6 flex items-center justify-between border-b space-x-16">
      {props.back ? <img className="cursor-pointer" src={backIcon} onClick={props.back} /> : <div></div>}
      <div className="text-2xl font-medium">{props.modalTitle}</div>
      <img onClick={props.close} className="cursor-pointer" src={closeIcon} />
    </div>
  )
}