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
import indexJson from '../../assets/index.json'
import { LinkListItem } from "../../types/link"

const App: React.FC = () => {
  const toastContext = useIsShow()
  const shareCardContext = useIsShowShareCard()

  const links = indexJson.links as LinkListItem[]

  return (
    <ToastContext.Provider value={toastContext}>
      <ShareCardContext.Provider value={shareCardContext}>
        <div className="content bg-neutral-950 bg-cover min-h-screen">
          { shareCardContext.isShow && <ShareCard></ShareCard> }
          <Layout>
            <div className="mb-6">
              <Card />
            </div>
            <div>
              <LinkList items={links.filter((item) => ['own_website', 'contact'].includes(item.category))}></LinkList>
            </div>
            <div className="mt-4 animate-pulse border-b border-neutral-700"></div>
            <div className="mt-6">
              <div className="text-2xl text-neutral-400 font-bold">Social</div>
              <LinkList items={links.filter((item) => item.category === 'social').sort((a, b) => a.isPrimary ? -1 : 1)}></LinkList>
            </div>
            <div className="mt-6">
              <div className="text-2xl text-neutral-400 font-bold">Development</div>
              <LinkList items={links.filter((item) => item.category === 'dev').sort((a, b) => a.isPrimary ? -1 : 1)}></LinkList>
            </div>
            <div className="mt-6">
              <div className="text-2xl text-neutral-400 font-bold">Media</div>
              <LinkList items={links.filter((item) => item.category === 'media').sort((a, b) => a.isPrimary ? -1 : 1)}></LinkList>
            </div>
            <Footer></Footer>
          </Layout>
          { toastContext.isShow && <Toast></Toast> }
        </div>
      </ShareCardContext.Provider>
    </ToastContext.Provider>
  )
}

export default App
