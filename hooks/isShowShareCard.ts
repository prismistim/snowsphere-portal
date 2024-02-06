import { createContext, useCallback, useState } from "react"

type ShareCardContext = {
  isShow: boolean,
  setIsShow: (isShow: boolean) => void
}

const defaultShareCardContext: ShareCardContext = {
  isShow: false,
  setIsShow: () => {}
}

export const ShareCardContext = createContext<ShareCardContext>(defaultShareCardContext)

export const useIsShow = (): ShareCardContext => {
  const [isShow, setIsShowState] = useState(false)

  const setIsShow = useCallback((current: boolean) => {
    setIsShowState(current)
  }, [])

  return { isShow, setIsShow }
}
