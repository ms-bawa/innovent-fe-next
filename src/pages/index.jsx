import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { HowWeDoIt } from '@/components/HowWeDoIt'
import { WhatDoWeDo } from '@/components/WhatDoWeDo'
import { WhyUsSection } from '@/components/WhyUsSection'
import { ContactUs } from '@/components/ContactUs'

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
      <main>
        <Hero />
        <WhatDoWeDo />
        <SecondaryFeatures />
        <WhyUsSection />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
