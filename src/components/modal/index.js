export default function Modal(props) {
  return (
    <>
      <div className=" fixed z-40 h-screen w-full">
        <div className="fixed top-0 left-0 h-screen w-full opacity-75 bg-gray-500"></div>
        <div className="fixed inset-0 flex items-center">
          <div className="max-h-90 shadow-2xl md:rounded-lg mx-auto overflow-scroll bg-white">
            <div className="">
              Hello I'm modal
            </div>
          </div>
        </div>
      </div>
    </>
  )
}