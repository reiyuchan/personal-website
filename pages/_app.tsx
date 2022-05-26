import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'

function MyApp({ Component, pageProps }: AppProps) {
  useThemeSwitcher();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name='description' content='Resume Page/Portofolio App' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
