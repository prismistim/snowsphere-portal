import { useContext } from "react"
import { ToastContext } from "../hooks/isShowToast"

const Toast: React.FC = () => {
  const { setIsShow } = useContext(ToastContext)

  return (
    <div className="fixed bottom-0 right-0 mx-4 mb-6 w-full text-right transition-opacity duration-500 ease-in-out">
      <span className="rounded-md bg-neutral-700 p-2 text-neutral-200" onClick={() => setIsShow(false)}>
        Copied!
      </span>
    </div>
  )
}

export default Toast
