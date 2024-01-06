import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Innovent Studio</title>
        <meta
          name="description"
          content="We Innovate, We Invent, We Venture. We help startups with all the resources they need to scale"
        />
      </Head>
      <Header />
      <main className='h-screen'>
        <div data-tf-live="01HKF5370J8JGTK61QEKKVM9PC"></div>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </main>
      <Footer />
    </>
  )
}
