import CreateProject from ".."
import ChooseCard from "../choose_card"

export default function getScreenUI(compParams) {
  switch (compParams.activeScreenId) {
    case 0:
      return <CreateProject {...compParams} />
    case 1:
      return <ChooseCard {...compParams} />
    default:
      return <div className="p-8">Work in Progress</div>
  }
}