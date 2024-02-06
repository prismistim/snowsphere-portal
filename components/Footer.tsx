const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="mt-2 flex justify-between border-t border-neutral-800 py-2">
      <div className=" text-neutral-600">©{getYear()} snowsphere</div>
      <a
        href="/index.json"
        className="bg-gradient-to-r from-red-400 to-cyan-600 bg-clip-text text-neutral-600 decoration-neutral-500/40  transition duration-500 hover:scale-105 hover:text-transparent"
      >
        index.json
      </a>
    </footer>
  )
}

export default Footer
