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
      className="inline-block w-full px-4 py-3 ring-1 hover:ring-0 ring-neutral-400/50 rounded-md hover:bg-gradient-to-r from-pink-400/50 to-indigo-600/50 text-2xl font-medium text-neutral-400 hover:text-neutral-100 decoration-neutral-500/40 underline-offset-4 opacity-50 transition duration-200 hover:scale-105 hover:opacity-100"
    >
      {props.data.title}
    </a>
  )
}

const LinkList: React.FC<Props> = (props) => {
  return (
    <div className="mt-4 grid md:grid-cols-3 gap-4">
      {props.items.map((item) => (
        <div key={item.id} className="">
          <LinkListItem
            data={item}
          ></LinkListItem>
        </div>
      ))}
    </div>
  )
}

export default LinkList
