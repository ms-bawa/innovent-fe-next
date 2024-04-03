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
      <main className="h-auto ">
        <div className="m-auto">
          <iframe
            title="become a foudner"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdP_DPgF5lwBdLf-dD4q-SnQWsk6yyWLiorDyinQ3DpXtFvwA/viewform?embedded=true"
            width="100%"
            height="1248"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </main>
      <Footer />
    </>
  )
}
