import BrowserOnly from '@docusaurus/BrowserOnly'
import React, { useEffect } from 'react'

const Ins: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return children
}

const AdsByGoogle: React.FC = (props) => {
  return (
    <BrowserOnly>
      {() => <Ins {...props} />}
    </BrowserOnly>
  )
}

export default AdsByGoogle
