import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { switcher } from '../utils/themeswitcher'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    switcher();
  })
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name='description' content='Resume Page/Portofolio App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
