import { useState } from "react"
import Card from "./components/Card"
import Layout from "./components/layouts/LayoutMain"
import LinkList from "./components/LinkList/LinkList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900">
      <Layout>
        <div className="mb-8">
          <Card />
        </div>
        <div className="mb-4 animate-pulse border-b border-indigo-800"></div>
        <LinkList></LinkList>
      </Layout>
    </div>
  )
}

export default App
