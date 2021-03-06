import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DataList from '../components/DataList'

const Index = ({ datas }) => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <DataList datas={datas}/>
      <Footer />
    </div>
  )       
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/datas')
  const {data} = await res.json()
  return {datas : data}
}

export default Index;