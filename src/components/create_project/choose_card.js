import ModalHeader from "../modal/modal_header";

export default function ChooseCard(props) {
  return (
    <div>
      <ModalHeader back={(e) => props.back(e, 0)} close={props.close} modalTitle="Create Project" />
    </div>
  )
}