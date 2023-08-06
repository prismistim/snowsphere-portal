import { useContext } from "react"
import { ShareCardContext } from '../hooks/isShowShareCard'
import icon from "../assets/images/rb_icon_me_medium.png"
import ProfileDataList from "./ProfileDataList"
import ShareDataPanel from "./ShareDataPanel/ShareDataPanel"

const Card: React.FC = () => {
  const { setIsShow } = useContext(ShareCardContext)

  return (
    <div>
      <div className="mb-6">
        <img
          src={icon}
          className="w-48 rounded-md shadow-neutral-800 grayscale transition hover:scale-105 hover:grayscale-0"
          onClick={() => setIsShow(true)}
        ></img>
      </div>
      <ProfileDataList></ProfileDataList>
    </div>
  )
}

export default Card
