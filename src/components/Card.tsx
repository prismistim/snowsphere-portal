import icon from "../assets/images/rb_icon_me_medium.png"
import ProfileDataList from "./ProfileDataList"
import ShareDataPanel from "./ShareDataPanel/ShareDataPanel"
import { useState } from "react"

const Card: React.FC = () => {
  const [panel, setPanel] = useState(false)

  return (
    <div>
      <div className="mb-6">
        <img
          src={icon}
          className="w-48 rounded-md shadow-neutral-800 grayscale transition hover:scale-105 hover:grayscale-0"
          onClick={() => setPanel(!panel)}
        ></img>
      </div>
      {panel && (
        <div>
          <ShareDataPanel></ShareDataPanel>
        </div>
      )}
      <ProfileDataList></ProfileDataList>
    </div>
  )
}

export default Card
