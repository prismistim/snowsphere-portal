import indexJson from "../../assets/index.json"
import React, { useContext, useState } from "react"
import { ToastContext } from "../../hooks/isShowToast"

type LinkList = {
  url: string
  title: string
}

const LinkListItem = (props: LinkList) => {
  const urlText = props.url.split("/").reverse()
  const userName = `${urlText[0]}@${urlText[1]}`

  const context = useContext(ToastContext)

  const writeToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    context.setIsShow(true)
  }

  return (
    <div className="space-x-2">
      <a
        href={props.url}
        target="_blank"
        className="inline-block bg-gradient-to-r from-indigo-400 to-teal-600 bg-clip-text py-1 text-2xl font-medium text-neutral-400 decoration-neutral-500/40 underline-offset-4 opacity-50 transition duration-500 hover:scale-105 hover:text-transparent hover:opacity-100"
      >
        {props.title}
      </a>
      <span
        className="text-sm opacity-50 font-medium text-neutral-400 transition duration-500 hover:cursor-pointer hover:scale-105"
        onClick={() => writeToClipboard(userName)}
      >
        {userName}
      </span>
    </div>
)
}

const LinkList: React.FC = () => {
  const links: LinkList[] = indexJson.links.filter((item) =>
    item.category.includes("fediverse"),
  )

  return (
    <div>
      {links.map((item) => (
        <div className="mb-3">
          <LinkListItem
            key={item.title}
            url={item.url}
            title={item.title}
          ></LinkListItem>
        </div>
      ))}
    </div>
  )
}

export default LinkList
