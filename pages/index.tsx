import type { NextPage } from 'next'
import Head from 'next/head'
import Body from '../components/body'
import { homeProps } from '../components/data'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portofolio - Home</title>
        <meta name='description' content='Resume Page/Portofolio App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Body {...homeProps} />
      <Footer />
    </div>
  )
}

export default Home
