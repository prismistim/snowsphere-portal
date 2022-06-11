import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const LinkListItem = (props: Props) => {
  return (
    <div className="">
      {props.children}
    </div>
  )
}

export default LinkListItem