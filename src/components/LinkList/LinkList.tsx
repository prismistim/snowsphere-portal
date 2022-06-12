type LinkList = {
  url: string
  title: string
}

const LinkListItem = (props: LinkList) => {
  return (
    <>
      <a
        href={props.url}
        target="_blank"
        className="inline-block bg-gradient-to-r from-indigo-400 to-teal-600 bg-clip-text py-3 text-3xl font-medium text-neutral-400 decoration-neutral-500/40 underline-offset-4 opacity-50 transition duration-500 hover:scale-105 hover:text-transparent hover:opacity-100"
      >
        {/* <span className="opacity-30">{">"} </span> */}
        {props.title}
      </a>
    </>
  )
}

const LinkList: React.FC = () => {
  const links: LinkList[] = [
    {
      url: "https://snowsphere.net/",
      title: "Portfolio",
    },
    {
      url: "https://twitter.com/prismist_m",
      title: "Twitter",
    },
    {
      url: "https://instagram.com/snowsphere",
      title: "Instagram",
    },
    {
      url: "https://misskey.io/@snowsphere",
      title: "Misskey",
    },
    {
      url: "https://github.com/prismistim",
      title: "GitHub",
    },
    {
      url: "https://soundcloud.com/snowsphere_sc",
      title: "SoundCloud",
    },
    {
      url: "https://last.fm/prismist_m",
      title: "Last.fm",
    },
    {
      url: "https://www.youtube.com/channel/UCAqMZ1QWysfFHTGcgh4CkYw",
      title: "YouTube",
    },
  ]

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
