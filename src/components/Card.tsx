import icon from "/rb_icon_me_medium.png"
import ProfileDataList from "./ProfileDataList"

const Card: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <img
          src={icon}
          className="w-48 rounded-md shadow-neutral-800 grayscale transition hover:scale-105 hover:grayscale-0"
        ></img>
      </div>
      <ProfileDataList></ProfileDataList>
    </div>
  )
}

export default Card
