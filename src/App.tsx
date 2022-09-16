import { useState } from "react"
import Card from "./components/Card"
import Layout from "./components/layouts/LayoutMain"
import LinkList from "./components/LinkList/LinkList"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="content bg-neutral-900 bg-cover min-h-screen">
      <Layout>
        <div className="mb-8">
          <Card />
        </div>
        <div className="mb-4 animate-pulse border-b border-indigo-800"></div>
        <LinkList></LinkList>
        <Footer></Footer>
      </Layout>
    </div>
  )
}

export default App
