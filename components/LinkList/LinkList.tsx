import React from "react"
import type { LinkListItem as TypeLinkListItem } from "../../types/link"

type Props = {
  items: TypeLinkListItem[]
}

const LinkListItem = (props: { data: TypeLinkListItem }) => {
  return (
    <a
      href={props.data.url}
      target="_blank"
      className="mt-2 inline-block bg-gradient-to-r from-indigo-400 to-teal-600 bg-clip-text text-2xl font-medium text-neutral-400 decoration-neutral-500/40 underline-offset-4 opacity-50 transition duration-500 hover:scale-105 hover:text-transparent hover:opacity-100"
    >
      {props.data.title}
    </a>
  )
}

const LinkList: React.FC<Props> = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <div key={item.id} className="mb-3">
          <LinkListItem
            data={item}
          ></LinkListItem>
        </div>
      ))}
    </>
  )
}

export default LinkList
