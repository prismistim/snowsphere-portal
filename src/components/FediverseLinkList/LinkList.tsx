import indexJson from '../../assets/index.json'

type LinkList = {
  url: string
  title: string
}

const LinkListItem = (props: LinkList) => {
  const urlText = props.url.split('/').reverse()
  const userName = `${urlText[0]}@${urlText[1]}`
  
  return (
    <>
      <div className='space-x-2'>
        <a
          href={props.url}
          target="_blank"
          className="inline-block bg-gradient-to-r from-indigo-400 to-teal-600 bg-clip-text py-3 text-3xl font-medium text-neutral-400 decoration-neutral-500/40 underline-offset-4 opacity-50 transition duration-500 hover:scale-105 hover:text-transparent hover:opacity-100"
        >
          {/* <span className="opacity-30">{">"} </span> */}
          {props.title}
        </a>
        <span className='font-medium text-neutral-400'>{userName}</span>
      </div>
    </>
  )
}

const LinkList: React.FC = () => {
  const links: LinkList[] = indexJson.links.filter((item) => item.category.includes('fediverse'))

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
