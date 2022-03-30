import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Footer />
    </div>
  )
}
