import qrcode from "../../assets/images/qrcode.png"

const ShareDataPanel = () => {
  return (
    <div className="mb-6 rounded-md bg-neutral-800 p-4">
      <div className="mb-4 flex justify-center">
        <img className="w-64 rounded-sm" src={qrcode}></img>
      </div>
      <div className="select-all rounded-sm bg-neutral-700 p-2 text-center font-mono text-neutral-300">
        https://portal.snowsphere.net/
      </div>
    </div>
  )
}

export default ShareDataPanel
