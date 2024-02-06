import React, { createContext, useContext, useState } from "react"
import Card from "../../components/Card"
import Layout from "../../components/layouts/LayoutMain"
import FediverseLinkList from "../../components/FediverseLinkList/LinkList"
import LinkList from "../../components/LinkList/LinkList"
import Footer from "../../components/Footer"
import Toast from "../../components/Toast"
import ShareCard from "../../components/ShareCard/ShareCard"

import '../../assets/style/index.css'

import { ToastContext, useIsShow } from "../../hooks/isShowToast"
import { ShareCardContext, useIsShow as useIsShowShareCard  } from "../../hooks/isShowShareCard"

const App: React.FC = () => {
  const toastContext = useIsShow()
  const shareCardContext = useIsShowShareCard()

  return (
    <ToastContext.Provider value={toastContext}>
      <ShareCardContext.Provider value={shareCardContext}>
        <div className="content bg-neutral-950 bg-cover min-h-screen">
          { shareCardContext.isShow && <ShareCard></ShareCard> }
          <Layout>
            <div className="mb-8">
              <Card />
            </div>
            <div className="mb-4 animate-pulse border-b border-neutral-700"></div>
            <FediverseLinkList></FediverseLinkList>
            <div className="mb-4 animate-pulse border-b border-neutral-700"></div>
            <LinkList></LinkList>
            <Footer></Footer>
          </Layout>
          { toastContext.isShow && <Toast></Toast> }
        </div>
      </ShareCardContext.Provider>
    </ToastContext.Provider>
  )
}

export default App
