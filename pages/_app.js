import '../styles/common.scss'
import Layout from '../src/layouts/default-layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Web Single Sign-on</title>
        <meta name="description" content="New Authorization Format" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
