export { PageLayout }

import React from 'react'
import '../assets/style/index.css'

function PageLayout({ children }) {
  return (
    <React.StrictMode>
      {children}
    </React.StrictMode>
  )
}
