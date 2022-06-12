type ProfileData = {
  label: string
  data: string
}

const ProfileDataListItem = (props: ProfileData) => {
  return (
    <>
      <div className="text-2xl font-light text-neutral-100 opacity-30">
        {props.label}:
      </div>
      <div className="text-4xl font-medium text-neutral-300 opacity-80">
        {props.data}
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
        <div className="mb-3">
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
