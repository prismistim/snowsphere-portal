import { createContext, useCallback, useState } from "react"

type ToastContext = {
  isShow: boolean,
  setIsShow: (isShow: boolean) => void
}

const defaultToastContext: ToastContext = {
  isShow: false,
  setIsShow: () => {}
}

export const ToastContext = createContext<ToastContext>(defaultToastContext)

export const useIsShow = (): ToastContext => {
  const [isShow, setIsShowState] = useState(false)

  const setIsShow = useCallback((current: boolean) => {
    setIsShowState(current)
  }, [])

  return { isShow, setIsShow }
}
