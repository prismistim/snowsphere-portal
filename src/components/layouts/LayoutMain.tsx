import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="container mx-auto h-screen px-6 py-6 lg:w-3/5 xl:w-2/5">
      {children}
    </main>
  )
}

export default Layout
