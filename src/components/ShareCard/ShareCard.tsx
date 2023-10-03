import { useContext } from 'react'
import QRCode from 'react-qr-code'
import { ShareCardContext } from '../../hooks/isShowShareCard'

import indexJson from '../../assets/index.json'
import IconImg from "../../assets/images/rb_icon_me_medium.png"
import QRCodeImg from '../../assets/images/qrcode.png'

const generateHash = () => {
  return Math.random().toString(32).substring(2)
}

export const ShareCard = () => {
  const { setIsShow } = useContext(ShareCardContext)

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-neutral-900/75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:my-8" onClick={() => setIsShow(false)}>
            <div className="bg-neutral-800 text-white p-4">
              <div className='w-full border-b border-dashed border-neutral-500 mb-4 pb-4'>
                <div className='text-xl w-full'>{indexJson.profile.name}</div>
                <div className='w-full'>{indexJson.url}</div>
              </div>
              <div className='w-full mx-auto space-y-4 text-center'>
                <div className='border-b border-dashed border-neutral-500 pb-4 flex justify-center'>
                  <img src={IconImg} className='h-36 rounded-md'></img>
                </div>
                <div className='pb-4 flex justify-center'>
                  <div className='h-36 bg-white p-4 rounded-md'>
                    <QRCode size={112} value={`https://portal.snowsphere.net/?share_id=${generateHash()}&utm_source=qrcode`}></QRCode>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareCard
