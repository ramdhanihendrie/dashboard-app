import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Footer />
    </div>
  )
}
