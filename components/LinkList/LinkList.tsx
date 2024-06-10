import React from "react"
import indexJson from "../../assets/index.json"

type LinkList = {
  id: string
  url: string
  title: string
}

const LinkListItem = (props: Omit<LinkList, 'id'>) => {
  return (
    <a
      href={props.url}
      target="_blank"
      className="mt-2 inline-block bg-gradient-to-r from-indigo-400 to-teal-600 bg-clip-text text-2xl font-medium text-neutral-400 decoration-neutral-500/40 underline-offset-4 opacity-50 transition duration-500 hover:scale-105 hover:text-transparent hover:opacity-100"
    >
      {props.title}
    </a>
  )
}

const LinkList: React.FC = () => {
  const links: LinkList[] = indexJson.links.filter(
    (item) => !item.category.includes("fediverse"),
  )

  return (
    <>
      {links.map((item) => (
        <div key={item.id} className="mb-3">
          <LinkListItem
            url={item.url}
            title={item.title}
          ></LinkListItem>
        </div>
      ))}
    </>
  )
}

export default LinkList
