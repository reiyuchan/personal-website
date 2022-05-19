import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { switcher } from '../utils/themeswitcher'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    switcher();
  })
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
