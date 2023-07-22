import React, { createContext, useContext, useState } from "react"
import Card from "./components/Card"
import Layout from "./components/layouts/LayoutMain"
import FediverseLinkList from "./components/FediverseLinkList/LinkList"
import LinkList from "./components/LinkList/LinkList"
import Footer from "./components/Footer"
import Toast from "./components/Toast"
import { ToastContext, useIsShow } from "./hooks/isShowToast"


const App: React.FC = () => {
  const context = useIsShow()

  return (
    <ToastContext.Provider value={context}>
      <div className="content bg-neutral-950 bg-cover min-h-screen">
        <Layout>
          <div className="mb-8">
            <Card />
          </div>
          <div className="mb-4 animate-pulse border-b border-indigo-800"></div>
          <FediverseLinkList></FediverseLinkList>
          <div className="mb-4 animate-pulse border-b border-indigo-800"></div>
          <LinkList></LinkList>
          <Footer></Footer>
        </Layout>
        { context.isShow && <Toast></Toast> }
      </div>
    </ToastContext.Provider>
  )
}

export default App
