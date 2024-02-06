type ProfileData = {
  label: string
  data: string
}

const isBirthDay = () => {
  const today = new Date()
  return today.getMonth() === 7 && today.getDate() === 8
}

const ProfileDataListItem = (props: ProfileData) => {
  return (
    <>
      <div className="text-xl font-light text-neutral-100 opacity-30">
        {props.label}:
      </div>
      <div className={`${ props.label === 'birth' && isBirthDay() ? 'opacity-100 animate-bounce bg-clip-text text-transparent text-4xl font-bold' : 'text-2xl font-medium opacity-80'}`}>
        <span className={`${ props.label === 'birth' && isBirthDay() ? 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500' : 'text-neutral-300'}`}>
          {props.data}
        </span>
        { props.label === 'birth' && isBirthDay() && <span className="text-white">🎂</span> }
      </div>
    </>
  )
}

const ProfileDataList = () => {
  const profileDatas: ProfileData[] = [
    {
      label: "name",
      data: "snowsphere",
    },
    {
      label: "birth",
      data: "August, 8th",
    },
    {
      label: "location",
      data: "Gifu, Japan",
    },
    {
      label: "job",
      data: "Web Engineer🐣",
    },
  ]

  return (
    <div>
      {profileDatas.map((item) => (
        <div key={item.label} className="mb-3">
          <ProfileDataListItem
            key={item.label}
            label={item.label}
            data={item.data}
          ></ProfileDataListItem>
        </div>
      ))}
    </div>
  )
}

export default ProfileDataList
