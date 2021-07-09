import Head from 'next/head'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="sticky top-0 flex items-center z-50 px-4 py-2 shadow-md bg-white">
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>

      </Header>
    </div>
  )
}
