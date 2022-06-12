const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="mt-2 border-t border-neutral-800">
      <div className="py-2 text-neutral-600">
        ©{getYear()} snowsphere 
      </div>
    </footer>
  )
}

export default Footer